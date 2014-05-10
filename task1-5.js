/*1.Write an expression that checks if given integer is odd or even.*/
var a = 6;
console.log(a % 2 === 0 ? 'digit is odd' : 'digit is even');

/*2.Write a boolean expression that checks for given integer if it can be divided (without remainder)
by 7 and 5 in the same time.*/

var b = 35;
console.log(b % 5 === 0 && b % 7 === 0)

/*3.Write an expression that calculates rectangle’s area by given width and height.*/
var width = 20;
var height = 5;
var result = width * height;
console.log('rectangle area is: ' + result);

/*4.Write an expression that checks for given integer if its third digit (right-to-left) is 7. E. g. 1732  true.*/
var a = 1732;
var b = a / 100;
var result = parseInt(b % 10);
console.log(result === 7);

/*5.Write a boolean expression for finding if the bit 3 (counting from 0) of a given integer is 1 or 0.*/
var num = 13;
var result = parseInt(num, 10).toString(2);
console.log(result);
console.log(result[2] === 1);
