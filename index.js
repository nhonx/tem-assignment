const fs = require("fs");

const createTSPrimitiveClassFromObject = (modelName, model) => {
    const
        definitions = [],
        params = [],
        assign = [];
    let code = 0;
    const processing = (fieldName, fieldType) => {
        definitions.push(`${fieldName}: ${fieldType}`)
        params.push(`_${fieldName}: ${fieldType}`)
        assign.push(`this.${fieldName} = _${fieldName}`)
    }
    try {
        if (!model.properties) {
            code = 1;
        } else {
            Object.keys(model.properties).forEach(pkey => {
                const props = model.properties[pkey];
                switch (props.type) {
                    case "string": {
                        if (props.enum && props.enum.length > 0) {
                            const ntype = props.enum.map(x => `"${x}"`).join("|")
                            processing(pkey, ntype)
                            break;
                        }
                        processing(pkey, "string")
                        break;
                    }
                    case "number": {
                        if (props.enum && props.enum.length > 0) {
                            const ntype = props.enum.map(x => `${x}`).join("|")
                            processing(pkey, ntype)
                        }
                        processing(pkey, `number`)
                        break;
                    }
                    case "integer": {
                        processing(pkey, `number`)
                        break;
                    }
                    case "boolean": {
                        processing(pkey, `boolean`)
                        break;
                    }
                    case "array": {
                        if (props.items.type) {
                            if (props.items.type !== "array") {
                                processing(pkey, `${props.items.type}[]`)
                            } else {
                                const ntype = (props.items.items.$ref) ? props.items.items.$ref.replace("#/definitions/", "") :
                                    props.items.items.type;
                                processing(pkey, `${ntype}[]`)
                            }
                            break;
                        }
                        if (props.items.$ref) {
                            const ntype = props.items.$ref.replace("#/definitions/", "");
                            processing(pkey, `${ntype}[]`)
                            break;
                        }
                    }
                    case undefined: {
                        if (props.$ref) {
                            const ntype = props.$ref.replace("#/definitions/", "");
                            processing(pkey, ntype)
                        }
                        break;
                    }
                    case "object": {
                        console.log("Type object detected", modelName);
                        processing(pkey, "any")
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
    return {
        code,
        definitions,
        params, assign
    }
}


const main = () => {
    const raw = fs.readFileSync("./swagger.json");
    const json = JSON.parse(raw);
    // console.log(Object.keys(json.definitions))
    var output = ""
    Object.keys(json.definitions).forEach((x, idx) => {
        // if (idx < 10) {
        const rs = createTSPrimitiveClassFromObject(x, json.definitions[x])
        if (rs.code === 0) {
            output += `
            class ${x} {\n
                ${rs.definitions.join(";\n")};\n
                constructor(${rs.params.join(", ")}) {\n
                    ${rs.assign.join(";\n")};\n
                }
            }
            `
        } else {
            output += `
            type ${x} = any;\n
            `
        }
        // }
    })
    const out = fs.writeFileSync("./schema.ts", output);
}
main()