const obj = {
  name: "Alice",
  x: 5,
  age: 25,
  greet() { return `Hi, I'm ${this.name}`; }
};


console.log(Object.defineProperty(obj, 'name', { value: 10, writable: false, enumerable: false, configurable: false }));
console.log(Object.getOwnPropertyDescriptor(obj, 'x'));
console.log(obj);

// Object.defineProperties(...)
const user = {
  first: 'A', last: 'B',
  get full() { return `${this.first} ${this.last}`; },
  set full(name) { [this.first, this.last] = name.split(' '); }
};
// console.log(user.full); // "Alice Brown"
// user.full = "Alice Brown";
// console.log(user.full); // "Alice Brown"


