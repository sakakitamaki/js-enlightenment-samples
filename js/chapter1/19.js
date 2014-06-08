var objectFoo = { same: 'same' };
var objectBar = { same: 'same' };

console.log(objectFoo === objectBar);
console.log(objectFoo == objectBar);

var objectA = { foo: 'bar' };
var objectB = objectA;

console.log(objectA === objectB);
console.log(objectA == objectB);
