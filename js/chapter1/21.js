var myNull = null;
var myUndefined = undefined;
var primitiveString1 = "string";
var primitiveString2 = String('string');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);

var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x * y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('Error!');

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myObject);
console.log(typeof myArray);
console.log(typeof myFunction);
console.log(typeof myDate);
console.log(typeof myRegExp);
console.log(typeof myError);
