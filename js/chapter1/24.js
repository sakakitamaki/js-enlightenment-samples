var myNumber = new Number('23');
var myNumberL = 23;
var myString = new String('male');
var myStringL = 'make';
var myBoolean = new Boolean('true');
var myBooleanL = true;
var myObject = new Object();
var myObjectL = {};
var myArray = new Array();
var myArrayL = [];
var myFunction = new Function();
var myFunctionL = new Function();
var myDate = new Date();
var myRegExp = new RegExp('/./');
var myRegExpL = /./;
var myError = new Error();

console.log(
	myNumber.constructor === Number,
	myNumberL.constructor === Number,
	myString.constructor === String,
	myStringL.constructor === String,
	myBoolean.constructor === Boolean,
	myBooleanL.constructor === Boolean,
	myObject.constructor === Object,
	myObjectL.constructor === Object,
	myArray.constructor === Array,
	myArrayL.constructor === Array,
	myFunction.constructor === Function,
	myFunctionL.constructor === Function,
	myDate.constructor === Date,
	myRegExp.constructor === RegExp,
	myRegExpL.constructor === RegExp,
	myError.constructor === Error
);