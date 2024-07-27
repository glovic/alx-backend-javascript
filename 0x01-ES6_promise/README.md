# ES6 Promises

This project covers the usage of ES6 Promises in JavaScript. The tasks include creating and handling Promises, using async/await, and dealing with promise rejection.

## Tasks :page_with_curl:

* **0. Keep every promise you make and only make promises you can keep**
  * [0-promise.js](./0-promise.js): JavaScript function that returns a Promise.
  * Usage: `import getResponseFromAPI from "./0-promise.js";`
  * Test with: `node 0-main.js`
  * Example Output: `true` (indicating that the function returns a Promise)

* **1. Don't make a promise...if you know you can't keep it**
  * [1-promise.js](./1-promise.js): JavaScript function that returns a Promise based on a boolean argument.
  * Usage: `import getFullResponseFromAPI from './1-promise';`
  * Test with: `node 1-main.js`
  * Example Output:
    - For `true`: `Promise { { status: 200, body: 'Success' } }`
    - For `false`: `Promise { <rejected> Error: The fake API is not working currently }`

* **2. Catch me if you can!**
  * [2-then.js](./2-then.js): JavaScript function that handles a Promise with three handlers.
  * Usage: `import handleResponseFromAPI from "./2-then";`
  * Test with: `node 2-main.js`
  * Example Output: `Got a response from the API`

* **3. Handle multiple successful promises**
  * [3-all.js](./3-all.js): JavaScript function that handles multiple Promises and logs results to the console.
  * Usage: `import handleProfileSignup from "./3-all";`
  * Test with: `node 3-main.js`
  * Example Output: `photo-profile-1 Guillaume Salva`

* **4. Simple promise**
  * [4-user-promise.js](./4-user-promise.js): JavaScript function that returns a resolved Promise with user details.
  * Usage: `import signUpUser from "./4-user-promise";`
  * Test with: `node 4-main.js`
  * Example Output: `Promise { { firstName: 'Bob', lastName: 'Dylan' } }`

* **5. Reject the promises**
  * [5-photo-reject.js](./5-photo-reject.js): JavaScript function that returns a rejected Promise with an error message.
  * Usage: `import uploadPhoto from './5-photo-reject';`
  * Test with: `node 5-main.js`
  * Example Output: `Promise { <rejected> Error: guillaume.jpg cannot be processed }`

* **6. Handle multiple promises**
  * [6-final-user.js](./6-final-user.js): JavaScript function that handles multiple Promises and returns an array with their statuses.
  * Usage: `import handleProfileSignup from './6-final-user';`
  * Test with: `node 6-main.js`
  * Example Output: `Promise { <pending> }`

* **7. Load balancer**
  * [7-load_balancer.js](./7-load_balancer.js): JavaScript function that returns the value of the first resolved Promise from two provided Promises.
  * Usage: `import loadBalancer from "./7-load_balancer";`
  * Test with: `node 7-main.js`
  * Example Output: `Downloading from UK is faster` and `Downloading from FR is faster`

* **8. Throw error / try catch**
  * [8-try.js](./8-try.js): JavaScript function that handles division with error handling for division by zero.
  * Usage: `import divideFunction from './8-try';`
  * Test with: `node 8-main.js`
  * Example Output:
    - For valid division: `5`
    - For division by zero: `Error: cannot divide by 0`

* **9. Throw an error**
  * [9-try.js](./9-try.js): JavaScript function that handles a mathematical operation and logs results with error handling.
  * Usage: `import guardrail from './9-try';`
  * Test with: `node 9-main.js`
  * Example Output:
    - For valid operation: `[ 5, 'Guardrail was processed' ]`
    - For invalid operation: `[ 'Error: cannot divide by 0', 'Guardrail was processed' ]`

* **10. Await / Async**
  * [100-await.js](./100-await.js): JavaScript function that uses async/await to handle multiple Promises and returns their results.
  * Usage: `import asyncUploadUser from "./100-await";`
  * Test with: `node 100-main.js`
  * Example Output: `{ photo: { status: 200, body: 'photo-profile-1' }, user: { firstName: 'Guillaume', lastName: 'Salva' } }`
