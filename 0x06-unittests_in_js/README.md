# Unit Testing in JavaScript

This project involves various tasks focused on unit testing using Mocha, Chai, and Sinon.

## Tasks :page_with_curl:

* **0. Basic test with Mocha and Node assertion library**
  * **[0-calcul.js](./0-calcul.js):** In this task, we create a simple helper function `calculateNumber(a, b)` that rounds `a` and `b` and returns their sum.
  * **Usage:**
    ```javascript
    console.log(calculateNumber(1.4, 2.6));  // Output: 4
    ```
  
* **1. Combining descriptions**
  * **[1-calcul.js](./1-calcul.js):** We implement `calculateNumber(type, a, b)` to handle `SUM`, `SUBTRACT`, and `DIVIDE`.
  * **Usage:**
    ```javascript
    console.log(calculateNumber('SUM', 1, 2));  // Output: 3
    ```

* **2. Basic test using Chai assertion library**
  * **[2-calcul_chai.js](./2-calcul_chai.js):** This task rewrites the tests for `calculateNumber` using Chai's `expect`.
  * **Usage:**
    ```javascript
    expect(calculateNumber(1.4, 2.6)).to.equal(4);
    ```

* **3. Spies**
  * **[3-payment.js](./3-payment.js):** We create `sendPaymentRequestToApi(totalAmount, totalShipping)` and validate it using `sinon.spy`.
  * **Usage:**
    ```javascript
    sendPaymentRequestToApi(100, 20);
    ```

* **4. Stubs**
  * **[4-payment.js](./4-payment.js):** We stub `Utils.calculateNumber` to return a specific value for testing.
  * **Usage:**
    ```javascript
    const result = sendPaymentRequestToApi(100, 20);
    ```

* **5. Hooks**
  * **[5-payment.test.js](./5-payment.test.js):** This file contains tests for `sendPaymentRequestToApi` using Mocha hooks.
  * **Usage:**
    ```javascript
    describe('Payment', function() {
      before(() => { /* setup code */ });
      after(() => { /* teardown code */ });
    });
    ```

* **6. Async tests with done**
  * **[6-payment_token.js](./6-payment_token.js):** We test `getPaymentTokenFromAPI(success)` with async behavior.
  * **Usage:**
    ```javascript
    getPaymentTokenFromAPI(true, (token) => {
      console.log(token);
    });
    ```

* **7. Skip**
  * **[7-skip.test.js](./7-skip.test.js):** This test suite skips one of the tests intentionally.
  * **Usage:**
    ```javascript
    it.skip('This test will be skipped', () => { /* test code */ });
    ```

* **8. Basic Integration testing**
  * **[8-api/api.js](./8-api/api.js):** We implement basic API endpoints for testing integration.
  * **Usage:**
    ```javascript
    app.get('/api/items', (req, res) => { /* response code */ });
    ```

* **9. Regex integration testing**
  * **[9-api/api.js](./9-api/api.js):** This extends the API with a regex-based route for fetching items.
  * **Usage:**
    ```javascript
    app.get('/cart/:id', (req, res) => { /* response code */ });
    ```

* **10. Deep equality & Post integration testing**
  * **[10-api/api.js](./10-api/api.js):** We add more endpoints and test their responses for deep equality.
  * **Usage:**
    ```javascript
    app.get('/available_payments', (req, res) => { /* response code */ });
    ```

