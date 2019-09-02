'use strict';
var t = Number(prompt('Enter your year'));
var a = t % 4;

var leap = a == 0;
var leapYear = true
console.log('Leap year, true or false? ' + (leap && leapYear));