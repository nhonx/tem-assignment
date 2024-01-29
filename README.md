## Problem 1

- I use Javascript (with only builtin package `fs`) to process the transformation, from Swagger format to Typescript class definition models.

- What currently transformed:

  - Primitive type: string, number, integer, boolean, enum.
  - Object reference type: object, arrays, other Class references.
  - Class constructor.
  - Optional/required properties.

- We can validate the schema with any TS linter or formatter, but for more convenience, I'm also generating a Jest test file for the transformed TS schema, to validating the generated schema.

- Steps to run the code:
  - Run `node index.js` to generate `schema.ts` and `schema.test.ts`.
  - Install necessary dependencies and run the test for validation
  ```
    cd problem1
    npm install
    npm run test
  ```
