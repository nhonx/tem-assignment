import axios from "axios";
import { Address, Nonprofit, GrantDuration, Submission } from "./schema";
import * as fs from "fs";
function CSVToArray(CSV_string: string, delimiter: string) {
  delimiter = delimiter || ","; // user-supplied delimeter or default comma

  var pattern = new RegExp( // regular expression to parse the CSV values. // Delimiters:
    "(\\" +
      delimiter +
      "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      delimiter +
      "\\r\\n]*))",
    "gi"
  );

  var rows: any = [[]]; // array to hold our data. First row is column headers.
  // array to hold our individual pattern matching groups:
  var matches: any = false; // false if we don't find any matches
  // Loop until we no longer find a regular expression match
  while ((matches = pattern.exec(CSV_string))) {
    var matched_delimiter = matches[1]; // Get the matched delimiter
    // Check if the delimiter has a length (and is not the start of string)
    // and if it matches field delimiter. If not, it is a row delimiter.
    if (matched_delimiter.length && matched_delimiter !== delimiter) {
      // Since this is a new row of data, add an empty row to the array.
      rows.push([]);
    }
    var matched_value = null;
    // Once we have eliminated the delimiter, check to see
    // what kind of value was captured (quoted or unquoted):
    if (matches[2]) {
      // found quoted value. unescape any double quotes.
      matched_value = matches[2].replace(new RegExp('""', "g"), '"');
    } else {
      // found a non-quoted value
      matched_value = matches[3];
    }
    // Now that we have our value string, let's add
    // it to the data array.
    rows[rows.length - 1].push(matched_value);
  }
  return rows; // Return the parsed data Array
}
function getMoneyAmount(amount: string) {
  return parseInt(amount.replace("$", "").replaceAll(",", ""));
}
async function main() {
  const np_csv = fs.readFileSync("./nonprofit_data.csv", "utf-8");
  const raw = CSVToArray(np_csv, ",");
  const npNameIdMapping: Record<string, number> = {};
  for (let i = 1; i < raw.length; i++) {
    const np = raw[i];
    if (i > 0) {
      const newNp = new Nonprofit(
        0,
        np[0],
        new Address(np[23] + np[24], np[25], np[26], np[27]),
        np[2],
        np[5]
      );
      const insertResp = await axios.post("http://localhost:8080/nonprofits", {
        legalName: newNp.legalName,
        ein: newNp.ein,
        address: newNp.address,
        mission: newNp.mission,
      });
      if (insertResp.status == 200) {
        console.log(
          `Insert Nonprofit successfully. NPID: ${insertResp.data.id}`
        );
        npNameIdMapping[newNp.legalName!] = insertResp.data.id as number;
      }
    }
  }

  const sm_csv = fs.readFileSync("./nonprofit_submission_data.csv", "utf-8");
  const sm_raw = CSVToArray(sm_csv, ",");
  for (let i = 1; i < sm_raw.length; i++) {
    const sm = sm_raw[i];
    if (i > 0) {
      const newSm = new Submission(
        0,
        sm[1],
        getMoneyAmount(sm[4]),
        getMoneyAmount(sm[5]),
        sm[6],
        [sm[7]],
        new GrantDuration(sm[8], sm[9])
      );
      const insertResp = await axios.post(
        `http://localhost:8080/nonprofits/${
          npNameIdMapping[sm[0]]
        }/submissions`,
        JSON.stringify({
          grantName: newSm.grantName,
          requestedAmount: newSm.requestedAmount,
          awardedAmount: newSm.awardedAmount,
          grantType: newSm.grantType,
          tags: newSm.tags,
          grantDuration: newSm.grantDuration,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (insertResp.status == 200) {
        console.log(
          `Insert Submissions successfully. NPID: ${insertResp.data.id}`
        );
      }
    }
  }
}
main();
