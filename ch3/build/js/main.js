"use strict";
let stringArr = ['one', 'hey', 'John'];
let guitars = ['Start', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] == 'John';
stringArr.push('eh');
guitars[0] == 192;
guitars.unshift('hello');
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['hello', 1, true];
let mixed = ['John', 1, false];
// Object
let myObj;
myObj = [];
myObj = bands;
console.log(typeof myObj);
const exampleObj = {
    name: 'Hello',
    active: true,
    albums: ['hello', 1]
};
console.log(typeof exampleObj);
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1983, 2, 'qu']
};
let jp = {
    name: 'jimmy',
    albums: ['df', 'ds', ' d']
};
const greetGuitarlist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarlist(jp));
