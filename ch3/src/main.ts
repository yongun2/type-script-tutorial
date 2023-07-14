let stringArr = ['one', 'hey', 'John'];

let guitars = ['Start', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] == 'John';
stringArr.push('eh');

guitars[0] == 192;
guitars.unshift('hello');

let test = [];
let bands:string[] = [];
bands.push('Van Halen');

// Tuple
let myTuple: [string, number, boolean] = ['hello', 1, true];
let mixed = ['John', 1, false]

// Object
let myObj: object;
myObj = [];
myObj = bands
console.log(typeof myObj);

const exampleObj:Guitarist = {
    name: 'Hello',
    active: true,
    albums: ['hello', 1]
}

console.log(typeof exampleObj);

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh:Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1983, 2, 'qu']
};

let jp:Guitarist = {
    name: 'jimmy',
    albums: ['df', 'ds',' d']
};

const greetGuitarlist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`;
};

console.log(greetGuitarlist(jp));

interface GuitaristInterface {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

