var price1 = 10;
var price2 = 10;
var price3 = new Number('10');
var price4 = price3;

console.log(price1 === price2);

console.log(price1 === price3);

console.log(price4 === price3);

price4 = 10;

console.log(price4 === price3);

console.log(price4 == price3);