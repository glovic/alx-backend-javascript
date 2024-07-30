# ES6 Data Manipulation

This project focuses on manipulating data using ES6 features such as `map`, `filter`, `reduce`, and more. Each task involves writing a specific function to perform a data manipulation operation.

## Tasks :page_with_curl:

* **0. Basic list of objects**
  * [0-get_list_students.js](./0-get_list_students.js): Create a function `getListStudents` that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).
  * Execution example:
    ```javascript
    import getListStudents from './0-get_list_students.js';
    console.log(getListStudents());
    ```
  * Output:
    ```javascript
    [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]
    ```

* **1. More mapping**
  * [1-get_list_student_ids.js](./1-get_list_student_ids.js): Create a function `getListStudentIds` that returns an array of ids from a list of object students.
  * Execution example:
    ```javascript
    import getListStudentIds from './1-get_list_student_ids.js';
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
    console.log(getListStudentIds(students));
    ```
  * Output:
    ```javascript
    [1, 2, 5]
    ```

* **2. Filter**
  * [2-get_students_by_loc.js](./2-get_students_by_loc.js): Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.
  * Execution example:
    ```javascript
    import getStudentsByLocation from './2-get_students_by_loc.js';
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
    console.log(getStudentsByLocation(students, 'San Francisco'));
    ```
  * Output:
    ```javascript
    [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]
    ```

* **3. Reduce**
  * [3-get_ids_sum.js](./3-get_ids_sum.js): Create a function `getStudentIdsSum` that returns the sum of all the student ids.
  * Execution example:
    ```javascript
    import getStudentIdsSum from './3-get_ids_sum.js';
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
    console.log(getStudentIdsSum(students));
    ```
  * Output:
    ```javascript
    8
    ```

* **4. Combine**
  * [4-update_grade_by_city.js](./4-update_grade_by_city.js): Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.
  * Execution example:
    ```javascript
    import updateStudentGradeByCity from './4-update_grade_by_city.js';
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 50 },
      { id: 2, firstName: 'James', location: 'Columbia', grade: 60 },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 80 }
    ];
    const newGrades = [
      { studentId: 5, grade: 97 },
      { studentId: 1, grade: 86 }
    ];
    console.log(updateStudentGradeByCity(students, 'San Francisco', newGrades));
    ```
  * Output:
    ```javascript
    [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]
    ```

* **5. Typed Arrays**
  * [5-typed_arrays.js](./5-typed_arrays.js): Create a function `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.
  * Execution example:
    ```javascript
    import createInt8TypedArray from './5-typed_arrays.js';
    console.log(createInt8TypedArray(10, 2, 89));
    ```
  * Output:
    ```javascript
    DataView {
      byteLength: 10,
      byteOffset: 0,
      buffer: ArrayBuffer { byteLength: 10 }
    }
    ```

* **6. Set data structure**
  * [6-set.js](./6-set.js): Create a function `setFromArray` that returns a Set from an array.
  * Execution example:
    ```javascript
    import setFromArray from './6-set.js';
    console.log(setFromArray([12, 32, 15, 78, 98, 15]));
    ```
  * Output:
    ```javascript
    Set { 12, 32, 15, 78, 98 }
    ```

* **7. More set data structure**
  * [7-has_array_values.js](./7-has_array_values.js): Create a function `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.
  * Execution example:
    ```javascript
    import hasValuesFromArray from './7-has_array_values.js';
    const set = new Set([12, 32, 15, 78, 98, 15]);
    console.log(hasValuesFromArray(set, [78, 15, 12]));
    console.log(hasValuesFromArray(set, [78, 15, 100]));
    ```
  * Output:
    ```javascript
    true
    false
    ```

* **8. Clean set**
  * [8-clean_set.js](./8-clean_set.js): Create a function `cleanSet` that returns a string of all the set values that start with a specific string (startString).
  * Execution example:
    ```javascript
    import cleanSet from './8-clean_set.js';
    const set = new Set(['bonjovi', 'bonaparte', 'bon', 'bonsai', 'bonspiel', 'boo']);
    console.log(cleanSet(set, 'bon'));
    ```
  * Output:
    ```javascript
    "jovi-aparte-sai-spiel"
    ```

* **9. Map data structure**
  * [9-groceries_list.js](./9-groceries_list.js): Create a function `groceriesList` that returns a map of groceries with the following items:
    - Apples, quantity: 10
    - Tomatoes, quantity: 10
    - Pasta, quantity: 1
    - Rice, quantity: 1
    - Bananas, quantity: 5
  * Execution example:
    ```javascript
    import groceriesList from './9-groceries_list.js';
    console.log(groceriesList());
    ```
  * Output:
    ```javascript
    Map {
      'Apples' => 10,
      'Tomatoes' => 10,
      'Pasta' => 1,
      'Rice' => 1,
      'Bananas' => 5
    }
    ```

* **10. More map data structure**
  * [10-update_uniq_items.js](./10-update_uniq_items.js): Create a function `updateUniqueItems` that updates the quantity for specific items in a map.
  * Execution example:
    ```javascript
    import groceriesList from './9-groceries_list.js';
    import updateUniqueItems from './10-update_uniq_items.js';
    const map = groceriesList();
    updateUniqueItems(map);
    console.log(map);
    ```
  * Output:
    ```javascript
    Map {
      'Apples' => 20,
      'Tomatoes' => 20,
      'Pasta' => 1,
      'Rice' => 1,
      'Bananas' => 10
    }
    ```

* **11. Weak link data structure**
  * [100-weak.js](./100-weak.js): Export a const instance of `WeakMap` and name it `weakMap`. Export a new function named `queryAPI`. It should accept an endpoint argument and track the number of times `queryAPI` is called for each endpoint. When the number of queries is >= 5, throw an error with the message "Endpoint load is high".
  * Execution example:
    ```javascript
    import { queryAPI, weakMap } from "./100-weak.js";

    const endpoint = { protocol: 'http', name: 'getUsers' };
    weakMap.get(endpoint);

    queryAPI(endpoint);
    console.log(weakMap.get(endpoint));

    queryAPI(endpoint);
    console.log(weakMap.get(endpoint));

    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    ```
  * Output:
    ```javascript
    1
    2
    .../100-weak.js:16
      throw new Error('Endpoint load is high');
    ```
