# ES6 Classes

This project involved implementing various ES6 classes to better understand object-oriented programming and inheritance in JavaScript.

## Tasks :page_with_curl:

* **0. You used to attend a place like this at some point**
  * [0-classroom.js](./0-classroom.js): JavaScript class that defines a `ClassRoom`.
  * Usage Example:
    ```javascript
    import ClassRoom from "./0-classroom.js";

    const room = new ClassRoom(10);
    console.log(room._maxStudentsSize); // Output: 10
    ```

* **1. Let's make some classrooms**
  * [1-make_classrooms.js](./1-make_classrooms.js): JavaScript function that initializes an array of three `ClassRoom` objects with sizes 19, 20, and 34.
  * Usage Example:
    ```javascript
    import initializeRooms from './1-make_classrooms.js';

    console.log(initializeRooms());
    // Output: [
    //   ClassRoom { _maxStudentsSize: 19 },
    //   ClassRoom { _maxStudentsSize: 20 },
    //   ClassRoom { _maxStudentsSize: 34 }
    // ]
    ```

* **2. A Course, Getters, and Setters**
  * [2-hbtn_course.js](./2-hbtn_course.js): JavaScript class `HolbertonCourse` that defines a course with `name`, `length`, and `students`.
  * Usage Example:
    ```javascript
    import HolbertonCourse from "./2-hbtn_course.js";

    const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
    console.log(c1.name); // Output: ES6
    c1.name = "Python 101";
    console.log(c1); // Output: HolbertonCourse { _name: 'Python 101', _length: 1, _students: [ 'Bob', 'Jane' ] }

    try {
        c1.name = 12;
    } 
    catch(err) {
        console.log(err); // Output: TypeError: Name must be a string
    }

    try {
        const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
    }
    catch(err) {
        console.log(err); // Output: TypeError: Length must be a number
    }
    ```

* **3. Methods, static methods, computed methods names..... MONEY**
  * [3-currency.js](./3-currency.js): JavaScript class `Currency` that defines a currency with `code` and `name`.
  * Usage Example:
    ```javascript
    import Currency from "./3-currency.js";

    const dollar = new Currency('$', 'Dollars');
    console.log(dollar.displayFullCurrency()); // Output: Dollars ($)
    ```

* **4. Pricing**
  * [4-pricing.js](./4-pricing.js): JavaScript class `Pricing` that defines a price with `amount` and `currency`.
  * Usage Example:
    ```javascript
    import Pricing from './4-pricing.js';
    import Currency from './3-currency.js';

    const p = new Pricing(100, new Currency("EUR", "Euro"));
    console.log(p);
    console.log(p.displayFullPrice());
    // Output:
    // Pricing { _amount: 100, _currency: Currency { _code: 'EUR', _name: 'Euro' } }
    // 100 Euro (EUR)
    ```

* **5. A Building**
  * [5-building.js](./5-building.js): JavaScript class `Building` that defines a building with `sqft`.
  * Usage Example:
    ```javascript
    import Building from './5-building.js';

    const b = new Building(100);
    console.log(b);

    class TestBuilding extends Building {}

    try {
        new TestBuilding(200);
    }
    catch(err) {
        console.log(err); // Output: Error: Class extending Building must override evacuationWarningMessage
    }
    ```

* **6. Inheritance**
  * [6-sky_high.js](./6-sky_high.js): JavaScript class `SkyHighBuilding` that extends `Building` with additional attribute `floors`.
  * Usage Example:
    ```javascript
    import SkyHighBuilding from './6-sky_high.js';

    const building = new SkyHighBuilding(140, 60);
    console.log(building.sqft); // Output: 140
    console.log(building.floors); // Output: 60
    console.log(building.evacuationWarningMessage()); // Output: Evacuate slowly the 60 floors
    ```

* **7. Airport**
  * [7-airport.js](./7-airport.js): JavaScript class `Airport` that defines an airport with `name` and `code`.
  * Usage Example:
    ```javascript
    import Airport from "./7-airport.js";

    const airportSF = new Airport('San Francisco Airport', 'SFO');
    console.log(airportSF); // Output: Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
    console.log(airportSF.toString()); // Output: [object SFO]
    ```

* **8. Primitive - Holberton Class**
  * [8-hbtn_class.js](./8-hbtn_class.js): JavaScript class `HolbertonClass` that defines a class with `size` and `location`.
  * Usage Example:
    ```javascript
    import HolbertonClass from "./8-hbtn_class.js";

    const hc = new HolbertonClass(12, "Mezzanine");
    console.log(Number(hc)); // Output: 12
    console.log(String(hc)); // Output: Mezzanine
    ```

* **9. Hoisting**
  * [9-hoisting.js](./9-hoisting.js): JavaScript code to fix hoisting issues.
  * Usage Example:
    ```javascript
    import listOfStudents from "./9-hoisting.js";

    console.log(listOfStudents);
    const listPrinted = listOfStudents.map(student => student.fullStudentDescription);
    console.log(listPrinted);
    // Output:
    // [
    //   StudentHolberton { _firstName: 'Guillaume', _lastName: 'Salva', _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' } },
    //   StudentHolberton { _firstName: 'John', _lastName: 'Doe', _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' } },
    //   StudentHolberton { _firstName: 'Albert', _lastName: 'Clinton', _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' } },
    //   StudentHolberton { _firstName: 'Donald', _lastName: 'Bush', _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' } },
    //   StudentHolberton { _firstName: 'Jason', _lastName: 'Sandler', _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' } }
    // ]
    // [
    //   'Guillaume Salva - 2020 - San Francisco',
    //   'John Doe - 2020 - San Francisco',
    //   'Albert Clinton - 2019 - San Francisco',
    //   'Donald Bush - 2019 - San Francisco',
    //   'Jason Sandler - 2019 - San Francisco'
    // ]
    ```

* **10. Vroom**
  * [10-car.js](./10-car.js): JavaScript class `Car` that defines a car with `brand`, `motor`, and `color`.
  * Usage Example:
    ```javascript
    import Car from "./10-car.js";

    class TestCar extends Car {}

    const tc1 = new TestCar("Nissan", "Turbo", "Pink");
    const tc2 = tc1.cloneCar();

    console.log(tc1); // Output: TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
    console.log(tc1 instanceof TestCar); // Output: true

    console.log(tc2); // Output: TestCar { _brand: undefined, _motor: undefined, _color: undefined }
    console.log(tc2 instanceof TestCar); // Output: true

    console.log(tc1 == tc2); // Output: false
    ```

* **11. EVCar**
  * [100-evcar.js](./100-evcar.js): JavaScript class `EVCar` that extends `Car` with additional attribute `range`.
  * Usage Example:
    ```javascript
    import EVCar from './100-evcar.js';

    const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
    console.log(ec1); // Output: EVCar { _brand: 'Tesla', _motor: 'Turbo', _color: 'Red', _range: '250' }

    const ec2 = ec1.cloneCar();
    console.log(ec2); // Output: Car { _brand: undefined, _motor: undefined, _color: undefined }
    ```
