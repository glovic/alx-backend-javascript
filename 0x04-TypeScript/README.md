
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

