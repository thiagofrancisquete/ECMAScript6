let weakset = new WeakSet();

(function(){
  let a = {};
  weakset.add(a); // garbage collected pelo weakset
})();

console.log(weakset.size); // undefined
console.log(...weakset); // Exception

weakset.clear() // Exception