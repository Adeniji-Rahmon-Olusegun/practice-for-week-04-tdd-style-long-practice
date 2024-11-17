class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} you are welcome!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return this.visit(otherPerson);
  }

  update(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) throw new TypeError('Invalid argument, expects a valid object type');

    let keys = Person.objectKeys(obj);

    if (!(keys.includes("name") && keys.includes("age"))) throw new TypeError('Object properties do not match Person Class');

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {

    try {
      this.update(obj);

      return true;
    } catch (err){
      return false;
    }
  }

  static greetAll(obj) {

    if (!Array.isArray(obj)) throw new TypeError("Invalid argument, an array was expected");

    let greetings = obj.map((person) => {
      return person.sayHello();
    });

    return greetings;
  }

  static objectKeys(obj) {
    
    let keys = Object.keys(obj);

    return keys;
  }
}

// let person1 = new Person("Taiwo", 35);
// let person2 = new Person("Kehinde", 56);
// let person3 = new Person("Kemi", 30);

// let arr = [2, 4, 6, 1];

// let myArr = arr.map((ele) => {
//   return ele * 2;
// });

// console.log(myArr);

// console.log(Person.greetAll([person1, person2, person3]));

//************************************** */
export { Person };