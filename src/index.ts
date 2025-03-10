// Define const
const firstName: string = "John";
// firstName = "Ola"; it throws error, const cannot change value

console.log(firstName);

// Define variables
let secondName: string = "Ala";
secondName = "Ola"; // let allow to change value

let age: number = 25;

let isAdult: boolean = false;

// Type inference
let ageTypeInference = 25;

let nameTypeInference = "Alice";

let isAdultTypeInference = false;

// Type any
let randomValue: any;
randomValue = 42;
randomValue = "random";
randomValue = true;

// Type unknown
let userInput: unknown;
userInput = "Hello";
userInput = 42;

// console.log(userInput.toUpperCase()); compilation error, type is not verified

// Type is verified
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

if (typeof userInput === "number") {
  console.log(userInput.toFixed(2));
}

// Union
let myValue: string | number;
myValue = "Hello";
myValue = 123;
// myValue = true; - complilation error

// Literal types
let state: "on" | "off";
state = "on";
state = "off";
// state = "pending" - compliation error

// Type null
let nameNullable: string | null;
nameNullable = "John";
nameNullable = null;

// Array
// First option
let numbers: number[] = [1, 2, 3, 4];
console.log(numbers);

//Second option
let names: Array<string> = ["Jan", "Kasia", "Ola"];

let mixedArray: (number | string)[] = [1, "two", 3, "four"];

let twoDimensionArray: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(twoDimensionArray[1][0]);

let tuple: [string, number, boolean] = ["example", 42, true];

type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "John", age: 23 },
  { name: "Kate", age: 34 },
];
console.log(users);

users.push({
  name: "Paulina",
  age: 32,
});
console.log(users);
