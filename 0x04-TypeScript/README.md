
# 0x04-TypeScript

This project involves tasks that help in understanding and implementing TypeScript features such as interfaces, classes, functions, and modules. The tasks are designed to enhance the knowledge of TypeScript syntax and its advantages over JavaScript.

## Tasks :page_with_curl:

* **0. Creating an interface for a student**
  * [task_0/js/main.ts](./task_0/js/main.ts): Create a `Student` interface with the following attributes:
    - `firstName`: string
    - `lastName`: string
    - `age`: number
    - `location`: string
  * Execution example:
    ```typescript
    interface Student {
      firstName: string;
      lastName: string;
      age: number;
      location: string;
    }

    const student1: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      location: "New York",
    };

    const student2: Student = {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      location: "San Francisco",
    };

    const studentsList: Array<Student> = [student1, student2];
    console.log(studentsList);
    ```
  * Output: `[ { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' }, { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'San Francisco' } ]`

* **1. Let's build a Teacher interface**
  * [task_1/js/main.ts](./task_1/js/main.ts): Create a `Teacher` interface with the following attributes:
    - `firstName`: string
    - `lastName`: string
    - `fullTimeEmployee`: boolean
    - `yearsOfExperience?`: number
    - `location`: string
    - `[propName: string]`: any (optional)
  * Execution example:
    ```typescript
    interface Teacher {
      firstName: string;
      lastName: string;
      fullTimeEmployee: boolean;
      yearsOfExperience?: number;
      location: string;
      [propName: string]: any;
    }

    const teacher3: Teacher = {
      firstName: "John",
      lastName: "Doe",
      fullTimeEmployee: true,
      location: "New York",
      contract: false,
    };

    console.log(teacher3);
    ```
  * Output: `{ firstName: 'John', lastName: 'Doe', fullTimeEmployee: true, location: 'New York', contract: false }`

* **2. Extending the Teacher class**
  * [task_2/js/main.ts](./task_2/js/main.ts): Extend the `Teacher` interface with a `Directors` interface that includes the following attribute:
    - `numberOfReports`: number
  * Execution example:
    ```typescript
    interface Directors extends Teacher {
      numberOfReports: number;
    }

    const director1: Directors = {
      firstName: "Jane",
      lastName: "Smith",
      fullTimeEmployee: true,
      location: "San Francisco",
      numberOfReports: 5,
    };

    console.log(director1);
    ```
  * Output: `{ firstName: 'Jane', lastName: 'Smith', fullTimeEmployee: true, location: 'San Francisco', numberOfReports: 5 }`

* **3. Printing teachers**
  * [task_3/js/main.ts](./task_3/js/main.ts): Write a function `printTeacher` that accepts two arguments, `firstName` and `lastName`, and returns a formatted string.
  * Execution example:
    ```typescript
    interface printTeacherFunction {
      (firstName: string, lastName: string): string;
    }

    const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

    console.log(printTeacher("John", "Doe"));
    ```
  * Output: `J. Doe`

* **4. Writing a class**
  * [task_4/js/main.ts](./task_4/js/main.ts): Write a `StudentClass` that implements the `StudentConstructor` interface.
  * Execution example:
    ```typescript
    interface StudentConstructor {
      new (firstName: string, lastName: string): StudentClassInterface;
    }

    interface StudentClassInterface {
      workOnHomework(): string;
      displayName(): string;
    }

    class StudentClass implements StudentClassInterface {
      firstName: string;
      lastName: string;

      constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
      }

      workOnHomework(): string {
        return "Currently working";
      }

      displayName(): string {
        return this.firstName;
      }
    }

    const student = new StudentClass("John", "Doe");
    console.log(student.displayName());
    console.log(student.workOnHomework());
    ```
  * Output: `John` `Currently working`

* **5. Advanced types Part 1**
  * [task_5/js/main.ts](./task_5/js/main.ts): Create a type alias `NameOrNumber` that can either be a string or a number.
  * Execution example:
    ```typescript
    type NameOrNumber = string | number;

    function combine(input1: NameOrNumber, input2: NameOrNumber) {
      if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
      } else {
        return input1.toString() + input2.toString();
      }
    }

    console.log(combine(1, 5));
    console.log(combine("Hello", "World"));
    ```
  * Output: `6` `HelloWorld`

* **6. Advanced types Part 2**
  * [task_6/js/main.ts](./task_6/js/main.ts): Use a string literal type for `Subject`.
  * Execution example:
    ```typescript
    type Subjects = "Math" | "History";

    interface Teacher {
      subject: Subjects;
    }

    const teacher1: Teacher = {
      subject: "Math",
    };

    console.log(teacher1);
    ```
  * Output: `{ subject: 'Math' }`

* **7. Advanced types Part 3**
  * [task_7/js/main.ts](./task_7/js/main.ts): Use the `Pick` utility type to define the `Directors` type.
  * Execution example:
    ```typescript
    interface Teacher {
      firstName: string;
      lastName: string;
      fullTimeEmployee: boolean;
      yearsOfExperience?: number;
      location: string;
      [propName: string]: any;
    }

    interface Directors extends Pick<Teacher, "firstName" | "lastName" | "location"> {
      numberOfReports: number;
    }

    const director1: Directors = {
      firstName: "Jane",
      lastName: "Smith",
      location: "San Francisco",
      numberOfReports: 5,
    };

    console.log(director1);
    ```
  * Output: `{ firstName: 'Jane', lastName: 'Smith', location: 'San Francisco', numberOfReports: 5 }`

#### 8. Ambient Namespaces
- **Directory:** `0x04-TypeScript`
- **Files:** `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`
- **Description:**
  1. Create a directory called `task_3` and copy these configuration files into it: `package.json`, `webpack.config.js`, `tsconfig.json`.
  2. Inside `interface.ts`:
     - Create a type `RowID` and set it equal to `number`.
     - Create an interface `RowElement` that contains these 3 fields:
       - `firstName`: `string`
       - `lastName`: `string`
       - `age?`: `number`
  3. Copy `crud.js` into the `task_3/js` directory:
     ```javascript
     export function insertRow(row) {
       console.log('Insert row', row);
       return Math.floor(Math.random() * Math.floor(1000));
     }

     export function deleteRow(rowId) {
       console.log('Delete row id', rowId);
       return;
     }

     export function updateRow(rowId, row) {
       console.log(`Update row ${rowId}`, row);
       return rowId;
     }
     ```
  4. Write an ambient file within `task_3/js`, named `crud.d.ts` containing the type declarations for each `crud` function. At the top of the file import `RowID` and `RowElement` from `interface.ts`.
  5. In `main.ts`:
     - At the top of the file create a triple slash directive that includes all the dependencies from `crud.d.ts`.
     - Import the `rowID` type and `rowElement` from `interface.ts`.
     - Import everything from `crud.js` as `CRUD`.
     - Create an object called `row` with the type `RowElement` with the fields set to these values:
       - `firstName`: `Guillaume`
       - `lastName`: `Salva`
     - Create a `const` variable named `newRowID` with the type `RowID` and assign the value the `insertRow` command.
     - Create a `const` variable named `updatedRow` with the type `RowElement` and update row with an `age` field set to `23`.
     - Call the `updateRow` and `deleteRow` commands.
  6. Requirements:
     - When running `npm run build`, no TypeScript error should be displayed.
     - Every variable should use TypeScript when possible.
     - The main file and the ambient file should both import the types defined in the interface file.
     - You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.

#### 9. Namespace & Declaration merging
- **Directory:** `0x04-TypeScript`
- **Files:** `task_4/package.json`, `task_4/tsconfig.json`, `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`, `task_4/js/subjects/Subject.ts`, `task_4/js/subjects/Teacher.ts`
- **Description:**
  1. Create a new directory `task_4` and copy the above `tsconfig.json` and put this `package.json` in there:
     ```json
     {
       "name": "task_4",
       "version": "1.0.0",
       "description": "",
       "main": "index.js",
       "scripts": {
         "build": "webpack",
         "test": "echo \"Error: no test specified\" && exit 1"
       },
       "keywords": [],
       "author": "",
       "license": "ISC",
       "devDependencies": {
         "@typescript-eslint/eslint-plugin": "^2.4.0",
         "@typescript-eslint/parser": "^2.4.0",
         "clean-webpack-plugin": "^3.0.0",
         "fork-ts-checker-webpack-plugin": "^1.5.1",
         "html-webpack-plugin": "^3.2.0",
         "ts-loader": "^6.2.0",
         "typescript": "^3.6.4",
         "webpack": "^4.41.2",
         "webpack-cli": "^3.3.9",
         "webpack-dev-server": "^3.8.2"
       }
     }
     ```
  2. In `task_4/js/subjects`:
     - Create a file `Teacher.ts` and write a `Teacher` interface in a namespace named `Subjects`:
       - The interface requires `firstName` and `lastName` as `string`.
     - Create a file `Subject.ts` and write a `Subject` class in the same namespace named `Subjects`:
       - The class has one attribute `teacher` that implements the `Teacher` interface.
       - The class has one setter method `setTeacher` that accepts a teacher in argument (and as setter, set the instance attribute `teacher` with it).
     - Create a file `Cpp.ts` and make the following modifications in the same namespace:
       - Using declaration merging, add a new optional attribute `experienceTeachingC` (`number`) to the `Teacher` interface.
       - Create a class `Cpp` extending from `Subject`.
       - Write a method named `getRequirements` that will return a string `Here is the list of requirements for Cpp`.
       - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`. If the teacher doesn’t have any experience in teaching C, then the method should return a string `No available teacher`.
     - Create a file `React.ts` and write a `React` Class in the same namespace:
       - Add a new attribute `experienceTeachingReact?` (`number`) to the `Teacher` interface.
       - In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for React`.
       - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`. If the teacher doesn’t have any experience in teaching React, then the method should return a string `No available teacher`.
     - Create a file `Java.ts` and write a `Java` Class in the same namespace:
       - Add a new attribute `experienceTeachingJava?` (`number`) to the `Teacher` interface.
       - In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for Java`.
       - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`. If the teacher doesn’t have any experience in teaching Java, then the method should return a string `No available teacher`.

#### 10. Update task_4/js/main.ts
- **Directory:** `0x04-TypeScript`
- **Files:** `task_4/js/main.ts`
- **Description:**
  1. Create and export a constant `cpp` for `Cpp` Subjects.
  2. Create and export a constant `java` for `Java` Subjects.
  3. Create and export a constant `react` for `React` Subjects.
  4. Create and export one `Teacher` object `cTeacher` with `experienceTeachingC` = `10`.
  5. For `Cpp` subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return.
  6. For `Java` subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.
  7. For `React` subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return.

#### 11. Brand convention & Nominal typing
- **Directory:** `0x04-TypeScript`
- **Files:** `task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`
- **Description:**
  1. Create a directory `task_5` and copy these configuration files into the root of `task_5`: `package.json`, `tsconfig.json`, `webpack.config.js`.
  2. In `task_5/js/main.ts`:
     - Create two interfaces `MajorCredits` and `MinorCredits`:
       - Each interface defines a number named `credits`.
       - Add a brand property to each interface to uniquely identify each of them.
     - Create two functions named `sumMajorCredits` and `sumMinorCredits`:
       - Each function takes two arguments `subject1` and `subject2`.
       - `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value.
       - Each function sums the credits of the two subjects.
