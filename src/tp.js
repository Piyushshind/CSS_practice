const obj = {
  name: "Alice",
  9:"pa",
  age: 25,
  greet() { return `Hi, I'm ${this.name}`; }
};

// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// console.log(Object.defineProperty(obj, 'x', { value: 10, writable: false, enumerable: false, configurable: false }));
// console.log(obj.greet);

// Object.defineProperties(...)
const user = {
  first: 'A', last: 'B',
  get full() { return `${this.first} ${this.last}`; },
  set full(name) { [this.first, this.last] = name.split(' '); }
};
console.log(user.full); // "Alice Brown"
user.full = "Alice Brown";
console.log(user.full); // "Alice Brown"


