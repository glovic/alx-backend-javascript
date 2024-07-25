# ES6 Basics

This project is focused on practicing various ES6 features and syntax improvements. The tasks involve rewriting functions to use new ES6 syntax, including `const`, `let`, arrow functions, template literals, spread syntax, rest parameters, and more.

## Tasks :page_with_curl:

* **0. Const or let?**
  * [0-constants.js](./0-constants.js): Modify the function `taskFirst` to instantiate variables using `const` and `taskNext` to instantiate variables using `let`.
  * Execution example:
    ```javascript
    import { taskFirst, taskNext } from './0-constants.js';
    console.log(`${taskFirst()} ${taskNext()}`);
    ```
  * Output: `I prefer const when I can. But sometimes let is okay`

* **1. Block Scope**
  * [1-block-scoped.js](./1-block-scoped.js): Modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.
  * Execution example:
    ```javascript
    import taskBlock from './1-block-scoped.js';
    console.log(taskBlock(true));
    console.log(taskBlock(false));
    ```
  * Output: `[ false, true ]` `[ false, true ]`

* **2. Arrow functions**
  * [2-arrow.js](./2-arrow.js): Rewrite the standard function to use ES6’s arrow syntax for the function `add`.
  * Execution example:
    ```javascript
    import getNeighborhoodsList from './2-arrow.js';
    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    console.log(res);
    ```
  * Output: `[ 'SOMA', 'Union Square', 'Noe Valley' ]`

* **3. Parameter defaults**
  * [3-default-parameter.js](./3-default-parameter.js): Condense the internals of the function to 1 line by defining default parameter values.
  * Execution example:
    ```javascript
    import getSumOfHoods from './3-default-parameter.js';
    console.log(getSumOfHoods(34));
    console.log(getSumOfHoods(34, 3));
    console.log(getSumOfHoods(34, 3, 4));
    ```
  * Output: `142` `56` `41`

* **4. Rest parameter syntax for functions**
  * [4-rest-parameter.js](./4-rest-parameter.js): Modify the function to return the number of arguments passed to it using the rest parameter syntax.
  * Execution example:
    ```javascript
    import returnHowManyArguments from './4-rest-parameter.js';
    console.log(returnHowManyArguments("one"));
    console.log(returnHowManyArguments("one", "two", 3, "4th"));
    ```
  * Output: `1` `4`

* **5. The wonders of spread syntax**
  * [5-spread-operator.js](./5-spread-operator.js): Using spread syntax, concatenate 2 arrays and each character of a string in one line.
  * Execution example:
    ```javascript
    import concatArrays from './5-spread-operator.js';
    console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
    ```
  * Output: `[ 'a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o' ]`

* **6. Take advantage of template literals**
  * [6-string-interpolation.js](./6-string-interpolation.js): Rewrite the return statement to use a template literal.
  * Execution example:
    ```javascript
    import getSanFranciscoDescription from './6-string-interpolation.js';
    console.log(getSanFranciscoDescription());
    ```
  * Output: `As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.`

* **7. Object property value shorthand syntax**
  * [7-getBudgetObject.js](./7-getBudgetObject.js): Modify the function’s budget object to use the keyname shorthand.
  * Execution example:
    ```javascript
    import getBudgetObject from './7-getBudgetObject.js';
    console.log(getBudgetObject(400, 700, 900));
    ```
  * Output: `{ income: 400, gdp: 700, capita: 900 }`

* **8. No need to create empty objects before adding in properties**
  * [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js): Rewrite the function `getBudgetForCurrentYear` to use ES6 computed property names.
  * Execution example:
    ```javascript
    import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';
    console.log(getBudgetForCurrentYear(2100, 5200, 1090));
    ```
  * Output: `{ 'income-2021': 2100, 'gdp-2021': 5200, 'capita-2021': 1090 }`

* **9. ES6 method properties**
  * [9-getFullBudget.js](./9-getFullBudget.js): Rewrite `getFullBudgetObject` to use ES6 method properties in the fullBudget object.
  * Execution example:
    ```javascript
    import getFullBudgetObject from './9-getFullBudget.js';
    const fullBudget = getFullBudgetObject(20, 50, 10);
    console.log(fullBudget.getIncomeInDollars(fullBudget.income));
    console.log(fullBudget.getIncomeInEuros(fullBudget.income));
    ```
  * Output: `$20` `20 euros`

* **10. For...of Loops**
  * [10-loops.js](./10-loops.js): Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator.
  * Execution example:
    ```javascript
    import appendToEachArrayValue from './10-loops.js';
    console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
    ```
  * Output: `[ 'correctly-appended', 'correctly-fixed', 'correctly-displayed' ]`

* **11. Iterator**
  * [11-createEmployeesObject.js](./11-createEmployeesObject.js): Write a function `createEmployeesObject` that will receive two arguments: `departmentName` (String) and `employees` (Array of Strings).
  * Execution example:
    ```javascript
    import createEmployeesObject from './11-createEmployeesObject.js';
    console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));
    ```
  * Output: `{ Software: [ 'Bob', 'Sylvie' ] }`

* **12. Let's create a report object**
  * [12-createReportObject.js](./12-createReportObject.js): Write a function `createReportObject` whose parameter, `employeesList`, is the return value of `createEmployeesObject`.
  * Execution example:
    ```javascript
    import createEmployeesObject from './11-createEmployeesObject.js';
    import createReportObject from './12-createReportObject.js';
    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };
    const report = createReportObject(employees);
    console.log(report.allEmployees);
    console.log(report.getNumberOfDepartments(report.allEmployees));
    ```
  * Output: `{ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }` `2`

* **13. Iterating through report objects**
  * [100-createIteratorObject.js](./100-createIteratorObject.js): Write a function `createIteratorObject` that will take as an argument a report Object created with `createReportObject`. This function returns an iterator to go through every employee in every department.
  * Execution example:
    ```javascript
    import createIteratorObject from "./100-createIteratorObject.js";
    import createEmployeesObject from './11-createEmployeesObject.js';
    import createReportObject from './12-createReportObject.js';
    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };
    const report = createReportObject(employees);
    const reportWithIterator = createIteratorObject(report);
    for (const item of reportWithIterator) {
        console.log(item);
    }
    ```
  * Output: `Bob` `Jane` `Sylvie`

* **14. Iterate through object**
  * [101-iterateThroughObject.js](./101-iterateThroughObject.js): Write a function `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`. It returns every employee name in a string, separated by `|`.
  * Execution example:
    ```javascript
    import createEmployeesObject from "./11-createEmployeesObject.js";
    import createReportObject from './12-createReportObject.js';
    import createIteratorObject from './100-createIteratorObject.js';
    import iterateThroughObject from './101-iterateThroughObject.js';
    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };
    const report = createReportObject(employees);
    const reportWithIterator = createIteratorObject(report);
    console.log(iterateThroughObject

