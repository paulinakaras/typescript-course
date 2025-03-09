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
