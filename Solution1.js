const fs = require("fs");

const generateTestValue = (fieldType) => {
    var testValue = "";
    switch (fieldType) {
        case "number":
            testValue = "1"; break;
        case "integer":
            testValue = "1"; break;
        case "boolean":
            testValue = "true"; break;
        case "string":
            testValue = `"test"`; break;
        case "array":
            testValue = "[]"; break;
        case "any":
            testValue = "{}"; break;
        default:
            if (fieldType.includes("[]")) {
                testValue = "[]"
            }
            else if (fieldType.includes("|")) {
                testValue = fieldType.split("|")[0].trim();
            }
            else {
                testValue = "TESTFIELD_" + fieldType;
            }
    }
    return testValue
}
const createTSClassFromObject = (modelName, model) => {
    var generatedFields = []
    const
        definitions = [],
        params = [],
        assign = [];
    tests = []
    let code = 0;
    let desc = null;
    const processing = (fieldName, fieldType, isRequired, desc) => {
        generatedFields.push({ fieldName, fieldType, isRequired, desc })
    }

    try {
        desc = model.description;
        if (!model.properties) {
            code = 1;
        } else {
            var requiredFields = [];
            if (model.required) {
                requiredFields = model.required;
            }
            Object.keys(model.properties).forEach(pkey => {
                const props = model.properties[pkey];
                var isRequired = requiredFields.includes(pkey)
                const desc = props.description
                switch (props.type) {
                    case "string": {
                        if (props.enum && props.enum.length > 0) {
                            const ntype = props.enum.map(x => `"${x}"`).join("|")
                            processing(pkey, ntype, isRequired, desc)
                            break;
                        }
                        processing(pkey, "string", isRequired, desc)
                        break;
                    }
                    case "number": {
                        if (props.enum && props.enum.length > 0) {
                            const ntype = props.enum.map(x => `${x}`).join("|")
                            processing(pkey, ntype, isRequired, desc)
                        }
                        processing(pkey, `number`, isRequired, desc)
                        break;
                    }
                    case "integer": {
                        processing(pkey, `number`, isRequired, desc)
                        break;
                    }
                    case "boolean": {
                        processing(pkey, `boolean`, isRequired, desc)
                        break;
                    }
                    case "array": {
                        if (props.items.type) {
                            if (props.items.type !== "array") {
                                processing(pkey, `${props.items.type}[]`, isRequired, desc)
                            } else {
                                const ntype = (props.items.items.$ref) ? props.items.items.$ref.replace("#/definitions/", "") :
                                    props.items.items.type;
                                processing(pkey, `${ntype}[]`, isRequired, desc)
                            }
                            break;
                        }
                        if (props.items.$ref) {
                            const ntype = props.items.$ref.replace("#/definitions/", "");
                            processing(pkey, `${ntype}[]`, isRequired, desc)
                            break;
                        }
                    }
                    case undefined: {
                        if (props.$ref) {
                            const ntype = props.$ref.replace("#/definitions/", "");
                            processing(pkey, ntype, isRequired, desc)
                        }
                        break;
                    }
                    case "object": {
                        processing(pkey, "any", isRequired, desc)
                    }
                    default: {
                        break;
                    }
                }
            })
        }
    } catch (e) {
        console.error("Err", modelName, e)
    }
    generatedFields = [...generatedFields.filter(x => x.isRequired), ...generatedFields.filter(x => !x.isRequired)]
    generatedFields.forEach(x => {
        definitions.push(`${x.desc ? `
        /** ${x.desc} */
        ` : ""}${x.fieldName}${!x.isRequired ? "?" : ""}: ${x.fieldType}`)
        params.push(`_${x.fieldName}${!x.isRequired ? "?" : ""}: ${x.fieldType}`)
        assign.push(`this.${x.fieldName} = _${x.fieldName}`)
        if (x.isRequired) {
            tests.push(x.fieldType);
        }
    })
    return {
        code,
        definitions,
        params,
        assign,
        desc, tests
    }
}


const main = () => {
    const raw = fs.readFileSync("./swagger.json");
    const json = JSON.parse(raw);
    var output = ""
    var unitTestOutput = `
    import { describe, expect, test } from "@jest/globals";
    import  {${Object.keys(json.definitions).join(",")}} from "./schema";\n
    `
    const testFieldValues = {}
    Object.keys(json.definitions).forEach((x, idx) => {
        const rs = createTSClassFromObject(x, json.definitions[x])
        if (rs.code === 0) {
            output += `
            ${rs.desc ? `/* ${rs.desc} **/` : ""}
            export class ${x} {\n
                ${rs.definitions.join(";\n")};\n
                constructor(${rs.params.join(", ")}) {\n
                    ${rs.assign.join(";\n")};\n
                }
            }\n
            `
        } else {
            output += `
            export class ${x} {};\n
            `
        }
        testFieldValues[x] = rs.tests.map(x => generateTestValue(x));
    })
    Object.keys(json.definitions).forEach((x) => {
        const testValues = testFieldValues[x].map(f => {
            if (typeof f === "string" && f.startsWith("TESTFIELD_")) {
                let c = `new ${f.replace("TESTFIELD_", "")}(${testFieldValues[f.replace("TESTFIELD_", "")]?.join(",")})`
                return c;
            } else {
                return f
            }
        })
        unitTestOutput += `
        describe("${x} model", () => {
            test("constructor", () => {
              var obj = new ${x}(${testValues.join(",")});
              expect(obj).toBeInstanceOf(${x});
            });
          });
        `
    })
    fs.writeFileSync("./problem1/schema.ts", output);
    fs.writeFileSync("./problem1/schema.test.ts", unitTestOutput);
}
main()