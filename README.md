## Problem 1

- I use Javascript (with only builtin package `fs`) to process the transformation, from Swagger format to Typescript class definition models.

- What currently transformed:

  - Primitive type: `string`, `number`, `integer`, `boolean`, `enum`.
  - Object reference type: object, arrays, other Class references.
  - Class constructor.
  - Optional/required properties.

- We can validate the schema with any TS linter or formatter, but for more convenience, I'm also generating a Jest test file for the transformed TS schema, to validating the generated schema.

- Steps to run the code:
  - Run `node Solution1.js <swagger_specs.json>` to generate `schema.ts` and `schema.test.ts`.
  - Install necessary dependencies and run the test for validation
  ```
    cd problem1
    npm install
    npm run test
  ```

## Problem 2

- Preinstalled: JDK + Maven
- Run `maven clean package` to build the server.
- Run `java -jar target/temelio-1.0-SNAPSHOT.jar server sample.yml` for starting the Web Server. The API service will be running in port 8080.
- Open `http://localhost:8080/swagger` to see the Swagger API Document and download the file `openapi.json`.
- Copy the file `openapi.json` to root folder and run the command `node Solution1.js openapi.json`.
- The generated schema will be place again at `/problem1`
- Verify the schema and install necessary dependencies:
  ```
    cd problem1
    npm install
    npm run test
  ```
- Install `ts-node` for running Typescript-powered NodeJS script: `npm i -g ts-node`
- While keeping the API Service running at port 8080, run the script `ts-node problem2.ts` to parsing 2 CSV file and pushing data to API Backend.
- Open `http://localhost:8080/nonprofits` and `http://localhost:8080/nonprofits/submissions` for verifying the result.
