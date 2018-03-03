let object = {
  "name": "John",
  "age": 22
}
let name, age;
({name, age} = object);
console.log(`${name}`);
console.log(`${age}`);