var objA = { property: 'value' };
var pointer1 = objA;
var pointer2 = pointer1;

objA.property = null;

console.log(objA.property, pointer1.property, pointer2.property);