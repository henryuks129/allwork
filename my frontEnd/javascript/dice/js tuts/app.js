"use strict";

import { PEOPLE, DATA, NUMBERED } from "./db.js";
// import { DATA } from "./db.js";
console.log(PEOPLE);
console.log(DATA);
console.log(NUMBERED);

// document.querySelectorAll('.btn').forEach((item)=>{item.addEventListener('click', () =>{alert}('hello world'))})

// document.body.style.backgroundcolor = 'green'

// 11th April 2023
// ======= VARIABLES, VALUES ADD DECLARATORS
// --------Variables are storage facility for storing data or values
// --------Values are just piece of data
// --------Declarators are used in declaring variables(lets, conts, var)
// Let
let firstname = "christy";
console.log(firstname);
let lastname = "obi";
console.log(lastname);

// var
var country = "nigeria";
console.log(country);
var tribe = "yoruba";
console.log(tribe);

// const
const PIE = 3.142;
console.log(PIE);

// let vs const vs var

// var------it dclares, re-declares and reassign
var gender = "male";
var gender = "trans";
gender = "female";
console.log(gender);

// let------------it declares and re-assigns
let state = "lagos";
console.log(state);
// let state = 'delta'
state = "delta";
console.log(state);

//  const-----------it declares
const fullName = "chris";
// const fullname = 'mabel'
// fullName = 'racheal'
console.log(fullName);

// constraints in variable naming
// ------ variable names can only contain letters, number, underscore, dollar sign cannot start with a number
// ----- don't give spaces between variable name, use camel casing
// ----- reserved names can't be used as variable names, since it is reserved
// ----- by convention don't start varaible names with uppercase except for const
// ------ use descriptive names when naming variables

// DATA TYPES
// strings: are used for storing letters and they are denoted by a single ('') or double ("") quotes
// numbers: are used for numbers (can hold decimal numbers and whole numbers)
// boolean: true or false
// null - empty
// undefined
// object(arrays, dates): for holding more than one value and denoted by{}
// symbols
// bigInt-

// =============================================================================
// 12th April 2023
// =============================================================================

// season = 'raining';
// console.log(season);

// strings
let continent = "africa";
console.log(continent);
let firstName2 = "christy";
let lastName2 = "obi";
// let fullName2 = firstName2 + ' ' + lastname2
let fullName2 = firstName2 + lastName2;
console.log(fullName2);

// string properties and methods
// properties
let email = "askjeeves@hotmail.com";
console.log(email);
console.log(email.length);
// getting position ------when counting lenght the numbering starts from one(1) but when looking for positions or index the numbering starts from zero(0)
let city = "surulere";
console.log(city[6]);

// methods
let trainee = "abimbola";
console.log(trainee);
// to uppercase()
console.log(trainee.toUpperCase());
let traineeUpperCase = trainee.toUpperCase();
console.log(traineeUpperCase);
// to lowerCase()
let newTrainee = "ENIOLA";
console.log(newTrainee);
let newTraineelowerCase = trainee.toLowerCase();
console.log(newTraineelowerCase);

// indexof()
let newEmail = "techstudio@gmail.com";
console.log(newEmail);
let newEmailIndexOf = newEmail.indexOf("h");
console.log(newEmailIndexOf);

// lastIndexOf()
let applicant = "Racheal";
console.log(applicant);
let lastIndexOfApplicant = applicant.lastIndexOf("a");
console.log(lastIndexOfApplicant);

// slice method
let religion = "christianity";
console.log(religion);
let slicedReligion = religion.slice(0, 9);
console.log(slicedReligion);

// replace
let profession = "developer";
console.log(profession);
let replaceProfession = profession.replace("d", "z");
console.log(replaceProfession);

// TASK1
let animal = "hippopotamus";
console.log(animal);

// animal = animal.toLocaleUpperCase();
// console.log(animal);

let animalUpperCase = animal.toUpperCase();
console.log(animalUpperCase);

let animallowerCase = animal.toLowerCase();
console.log(animallowerCase);

let _animal = "hippopotamus";
console.log(_animal[6]);

let Animal = "hippopotamus";
console.log(Animal);
let AnimalIndexOf = Animal.indexOf("o");
console.log(AnimalIndexOf);

let animal3 = "hippopotamus";
console.log(animal3);
let lastIndexOfAnimal3 = animal3.lastIndexOf("o");
console.log(lastIndexOfAnimal3);

let animal1 = "hippopotamus";
console.log(animal1);
let slicedAnimal1 = animal1.slice(5, 8);
console.log(slicedAnimal1);

let animal2 = "hippopotamus";
console.log(animal2);
let replaceAnimal2 = animal2.replace("h", "b");
console.log(replaceAnimal2);

// number
let year = 2023;
console.log(year);
let score = 100;
console.log(score);
let score2 = 200;
console.log(score2);

// math operators
// +, -, /, *, **, %
let minus = score2 - score;
console.log(minus);
let multiply = score2 * score;
console.log(multiply);
let divide = score2 / score;
console.log(divide);
console.log(200 * 15);

let num = 10;
console.log(num);
let num2 = 3;
console.log(num2);
let indices = num ** num2;
console.log(indices);

let modulus = num % num2;
console.log(modulus);

// decremental and incremental
// it is used to add values
let newYear = year + 5;
console.log(newYear);
// year++
// year += 2
// year *= 5
console.log(year);

// Es6....ECMAScript-----2015

// assignment
let continent1 = "africa";
console.log(continent1);

let language = "pidginEnglish";
console.log(language);

let ghanaPopulation = 500;
console.log(ghanaPopulation);

let finlandPopulation = 800;
console.log(finlandPopulation);

let country1 = "nigeria";
console.log(country1);

let nigeriaPopulation = 1000;
console.log(nigeriaPopulation);

nigeriaPopulation /= 2;
console.log(nigeriaPopulation);

nigeriaPopulation++;
console.log(nigeriaPopulation);

let description =
  "nigeria is in africa and it's nigeriaPopulation people speak pidginEnglish";
console.log(description);

let description0 =
  "                       nigeria is in africa and it's nigeriaPopulation people speak pidginEnglish";
console.log(description0);
let trimDescription0 = description0.trim();
console.log(trimDescription0);

let description3 =
  country1 +
  " is in " +
  continent1 +
  " and it's " +
  nigeriaPopulation +
  " people speak " +
  language;
console.log(description3);

// let description1 = 'nigeria is in africa and it\'s nigeriaPopulation people speak pidginEnglish';
// console.log(description1);
// let description1IsEmpty = description1.isEmpty();
// console.log(description1IsEmpty);

// String name = 'bro'

// String result = bro.isEmpty()

// concatinating(means joining or merging) variables with strings
let blog = 50;

let statement = "the blog has " + blog + " likes";
console.log(statement);

let traineeScore = 90;
let traineeName = "christy";
let school = "aguda grammar school";
let response =
  "ejiro did you know " +
  traineeName +
  " attends " +
  school +
  " and scored " +
  traineeScore +
  " in her test";
console.log(response);

// template litrals or strings (it uses bacticks(``) and interpolations(${}))
let newResponse = `ejiro did you know ${traineeName} attends ${school} anad scored ${traineeScore} in her test`;
console.log(newResponse);

// ===========================
let classAvailable = "javascript fullstack course";
let bootCamp = "Techstudio academy";
let stateLocation = "Lagos";
let regFeeInNaira = 300;
let prospectiveTrainee = "John";

let adminSay =
  "Hello " +
  prospectiveTrainee +
  " " +
  bootCamp +
  " offers " +
  classAvailable +
  " in " +
  stateLocation +
  " and the registration fee in naira is " +
  regFeeInNaira;
console.log(adminSay);

// small task, replicate the above using template litrals

let adminSay0 = `hello ${prospectiveTrainee} ${bootCamp} offers ${classAvailable} in ${stateLocation} and the registration fee in naira is ${regFeeInNaira}`;
console.log(adminSay0);

// arrays (they are used for storing collections of strings, numbers, booleans and other data typees and arrays are denoted by square bracket([]))
let food = "beans";
let food2 = "rice";
let food3 = "okpa";

let christyFavFoods = ["beans", "rice", "okpa"];
console.log(christyFavFoods);

// array properties
let lengthOfChristyFavFoods = christyFavFoods.length;
console.log(lengthOfChristyFavFoods);
console.log(christyFavFoods[0]);
console.log((christyFavFoods[0] = "fufu"));
christyFavFoods[1] = "fufu";
console.log(christyFavFoods);

// array methoods
// includes
let includes = christyFavFoods.includes("corn");
console.log(includes);

// join
let join = christyFavFoods.join(",");
console.log(join);

// concat()
let concat = christyFavFoods.concat(["banga", "starch", "yam"]);
console.log(concat);

// let push()
let push = christyFavFoods.push("efo-riro");
console.log(christyFavFoods);

// pop()
let pop = christyFavFoods.pop();
console.log(pop);
console.log(christyFavFoods);

// let color = [];
// console.log(color.length);
// colors.push('blue');
// colors.push('orange');
// colors[1] = 'green';
// console.log(colors);

// spread operators(...) and destructuring (it can be used to list out things and also merge)
let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers = [7, 8, 9, 10];
let allNumbers = numbers.concat(newNumbers);
console.log(allNumbers);

// with spread operators
let newConcat = [...numbers, ...newNumbers];
console.log(newConcat);

// destructuring
let names = [
  "bola",
  "eni",
  "john",
  "ejiro",
  "christy",
  "sam",
  "henry",
  "fiyin",
];
console.log(names);
console.log(names[3]);
console.log(names[5]);
// here we go
let [zero, one, two, three, four, five, six, seven] = names;
console.log(one);
console.log(seven);

// typeof
let scores = 50;
console.log(scores);
console.log(typeof scores);
let pikinName = "seun";
console.log(typeof pikinName);
let laptop = ["dell", "macbook", "hp", "asus"];
console.log(typeof laptop);
let cart = null;
console.log(typeof cart);
let destination;
console.log(typeof destination);

// Type conversion and coercion
// conversion is when we manually convert from one data type to another but coercion is when javascript does the conversion behind the scene for us

// conversion
let inputYear = "1985";
console.log(inputYear);
console.log(typeof inputYear);
let newNumber = "1986";
let addedNumber = newNumber + 18;
console.log(typeof newNumber);
console.log(addedNumber);
let newNumberss = Number("1986");
let addedNumberss = newNumberss + 18;
console.log(typeof newNumberss);
console.log(addedNumberss);

// lets try and convert something that's not actually a number
let personName = "eggy";
console.log(personName);
// converted
let personNames = Number("eggy");
console.log(typeof personNames);
console.log(personNames);
console.log(typeof NaN);

// coercion
console.log("i am 36 years old");
console.log("i am " + String(22) + " years old");
console.log("22" - 3);
console.log("22" > 2);
console.log("22" > "2");
console.log("2" * "4");
console.log(Number("22") > Number("2"));

let z = "1" + 1;
let w = z - 1;
console.log(w);

// comparison operators
// >, <, ==, ===, !=, >=, <=
const YEAR = 2023;
console.log(YEAR > 2001);
console.log(YEAR < 2001);
console.log(YEAR >= 2001);
console.log(YEAR <= 2001);
console.log(YEAR != 2001);
console.log(!true);

// loose comparison operator ==, only checks for values amd not data type
let SCORE = "100";
let SCORE2 = SCORE == 100;
let SCORE3 = SCORE != 100;
console.log(SCORE2);
console.log(SCORE3);

// strict comparison operator ===, check for both values and data types
let SCORE4 = SCORE === 100;
let SCORE5 = SCORE !== 100;
console.log(SCORE4);
console.log(SCORE5);

// weekend package
// let trainees = ['christy', 'sam', 'henry', 'fiyin', 'ejiro', 'john', 'eni', 'bola']
// console.log(trainees);
// trainees[0] = 'pappi';
// console.log(trainees);

// let newTrainees = ['amos','mike'];
// let allTrainees = trainees.concat(newTrainees)
// console.log(allTrainees);

// pop = allTrainees.pop();
// console.log(allTrainees);

// let newTrainees2 = ['zack','bobby'];
// let totalTrainees = newTrainees2.concat(trainees)
// console.log(totalTrainees);

// pop = totalTrainees.pop();
// console.log(totalTrainees);

// weekeend package
let trainees = [
  "christy",
  "sam",
  "henry",
  "fiyin",
  "ejiro",
  "john",
  "eni",
  "bola",
];
console.log(trainees);
trainees[0] = "pappi";
console.log(trainees);

trainees.push("Amos", "Mike");
console.log(trainees);

pop = trainees.pop();
console.log(trainees);

trainees.unshift("zack", "bobby");
console.log(trainees);

trainees = trainees.shift();
console.log(trainees);

// let newTrainees2 = ['queen','segun','pius','emeka'];
// let totalTrainees = newTrainees2.concat(trainees)
// console.log(totalTrainees);
let newTrainees2 = ["queen", "segun", "pius", "emeka"];

let totalTrainees = trainees.concat(["queen", "segun", "pius", "emeka"]);
console.log(totalTrainees);

// let teams = ('billy','jane')

// teams = ('zack','john')

// if (teams === 'billy','jane'){
//     alert('youre a genius');
// } else{
//     alert('stupid');}

// prompt('what is your username')

// control flow(loops(for,while,for in,for of) and conditional statement(if,else,else if,switch,ternary operator and a block of code))
// console.log('lifting weight repeation 1 ');
// console.log('lifting weight repeation 2 ');
// console.log('lifting weight repeation 3 ');
// console.log('lifting weight repeation 4 ');
// console.log('lifting weight repeation 5 ');
// console.log('lifting weight repeation 6 ');
// console.log('lifting weight repeation 7 ');
// console.log('lifting weight repeation 8 ');
// console.log('lifting weight repeation 9 ');
// console.log('lifting weight repeation 10 ');
// for loop uses for key-word, initializer,condition,final expression
for (let i = 1; i <= 10; i++) {
  // console.log(i);
  console.log("lifting weight repeatition" + i);
}

let guys = ["sam", "henry", "fiyin", "ejiro", "john", "eni", "bola"];
for (let i = 0; i < guys.length; i++) {
  console.log(guys[i].toUpperCase());
}

// while loop
let i = 0;
while (i < guys.length) {
  console.log(guys[i]);
  i++;
}

// for in
let babes = ["christy", "beauty", "princess", "joan"];
for (let p in babes) {
  console.log(babes[p]);
}

// for of
for (let b of babes) {
  console.log(b.toUpperCase());
}

let colors = ["blue", "pink", "black", "red"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let i in colors) {
  console.log(colors[i]);
}

for (let i of colors) {
  console.log(i.toUpperCase());
}

// conditional statements if, else, else if

let AGE = 5;

if (AGE === 50) {
  console.log("you don old");
} else {
  console.log("invalid");
}

let password = "pass";
console.log(password.length);
if (password.length >= 12) {
  console.log("that's a strong password");
} else if (password.length >= 8) {
  console.log("password is good");
} else if (password.length >= 4) {
  console.log("password is weak");
} else {
  console.log("please password must be atleast 12 characters");
}

// logical operators
// ||(double pipe) means logical or
// &&(ampersand) means logical and

// for logical and
// true && true = true
// true && false = false
// false && true = false
// false && false = true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// for logical or
// true || true = true
// true || false = false
// false || true = false
// false || false = true
console.log(11111111111111111);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let PASSWORD = "pass@ss";
if (PASSWORD.length >= 7 && PASSWORD.includes("@")) {
  console.log("super strong password");
} else if (PASSWORD.length >= 7 && PASSWORD.includes("@")) {
  console.log("very very strong");
} else if (
  (PASSWORD.length >= 5 && PASSWORD.includes("-")) ||
  (PASSWORD.length > 6 && PASSWORD.includes("_"))
) {
  console.log("password is good");
} else {
  console.log("Password is'nt good enough");
}

// let newPassword = prompt('type a password');
// if(newPassword.length >= 12 && newPassword.includes('@','.com')){
//     alert('very very strong password')
// }else if(newPassword.length >= 8 || newPassword.includes('* ')){
//     alert('password is good')
// }else{
//     alert('password is weak')
// }

// let inputtedNumber = prompt('please type a number')

// if(inputtedNumber % 2 === 0){
//     alert('even number')
// }else{
//     alert('odd number')
// }

// break and continue

let result = [20, 40, 0, 50, 100, 15, 4, 6, 8, 9];
for (let i = 0; i < result.length; i++) {
  if (result[i] === 0 || result[i] === 50) {
    continue;
  }
  if (result[i] === 9) {
    break;
  }
  // if (result[i]=== 50) {
  //     continue
  // }
  console.log(result[i]);
}

// if statement vs switch satement
let points = "f";
if (points === "a") {
  console.log("you got a");
} else if (points === "b") {
  console.log("you got c");
} else if (points === "c") {
  console.log("you got c");
} else if (points === "d") {
  console.log("you got d");
} else {
  console.log("guy you don fail, try dey attend classes abeg!");
}

// switch
let GRADE = "c";
switch (GRADE) {
  case "a":
    console.log("you got a");
    break;
  case "b":
    console.log("you got b");
    break;
  case "c":
    console.log("you got c");
    break;
  case "d":
    console.log("you got d");
    break;
  default:
    console.log("guy you don fail, try dey attend class abeg!");
}

// task 1
let mass1 = 60;
console.log(mass1);
let height1 = 10;
console.log(height1);

let sam = mass1 / height1 ** 2;
console.log(sam);

let mass2 = 70;
console.log(mass2);
let height2 = 9;
console.log(height2);

let christy = mass2 / height2 ** 2;
console.log(christy);

if (sam > christy) {
  console.log(`sam's bmi of ${sam}is greater than christy's bmi of ${christy}`);
} else {
  console.log(`christy's bmi ${christy} is greater than sam's bmi of ${sam}`);
}

// ternary operator
// authenticated ? renderApp() : renderLogin()
sam > christy
  ? console.log(`sam's bmi of ${sam} is greater than christy bmi of ${christy}`)
  : console.log(
      `christy's bmi of ${christy} is greater than sam's bmi of ${sam}`
    );

// global scope, block and function scope
let myAge = 100;
if (myAge) {
  let myAge = 200;
  console.log("inside 1st block: " + myAge);
  if (myAge) {
    let myAge = 300;
    console.log("inside 2st block: " + myAge);
  }
}
console.log("outside block of code: " + myAge);

// function scope - functions are lines of codes that preforms a given task
// it's only when  you call, invoke or run the function that the function works
// three types of functions, declaration, expression and arrow function
// functions are re-useable
// keyword for function is the function keyword, function name and a block of code

// function declaration
// it accepts hoisting
function team() {
  let name = "christy";
  console.log(name);
}
team();

// function expression
// it doesn't accepts hoisting
let speak = function () {
  let myColor = "yellow";
  console.log(myColor);
};
speak();

// arrow function
// it doesn't accepts hoisting
let newTrainer = () => {
  let country = "Nigeria";
  console.log(country);
};
newTrainer();

// parameters and arguments in functions
function getName(userName) {
  let person = "hi my name is " + userName;
  console.log(person);
}
getName("sam");

let getSpeaker = function (customerName) {
  let person = `hello my name is ${customerName}`;
  console.log(person);
};
getSpeaker("steve");

let getAge = (NameOfclient, clientYearOfBirth) => {
  let clientAge = `${NameOfclient} is ${2023 - clientYearOfBirth} years old`;
  console.log(clientAge);
};
getAge("sam", 1985);

const getGreeting = function (name, time) {
  let statements = `good ${time} ${name}`;
  console.log(statements);
};
getGreeting("john", "afternoon");

let getDay = (currency) => {
  let count = 10 + currency;
  console.log(count);
};
getDay("naira");

// returning variables from a function
let getProgramme = () => {
  let stack = "javascript fullstack";
  console.log(stack);
  return stack;
};

let ss = getProgramme();
let newApplicant = "hi blessing did you know that tech-studio offers " + ss;
console.log(newApplicant);

// task 2
let spartans = (60 + 70 + 80) / 3;
console.log(spartans);

let alpha = (88 + 91 + 120) / 3;
console.log(alpha);

if (spartans > alpha) {
  console.log(
    `spartans average of ${spartans} is greater than alpha's average of ${alpha}`
  );
} else if (spartans > alpha) {
  console.log(
    `alpha average of ${alpha} is greater than spartans average of ${spartans} `
  );
} else {
  console.log("it's a tie");
}

spartans === alpha
  ? console.log(
      `spartans average of ${spartans} is greater than alpha's average of ${alpha}`
    )
  : console.log(
      `alpha average of ${alpha} is greater than spartans average of ${spartans} `
    );

spartans > alpha
  ? console.log(
      `spartans average of ${spartans} is greater than alpha's average of ${alpha}`
    )
  : console.log(
      `alpha average of ${alpha} is greater than spartans average of ${spartans} `
    );

//  conditional statement
let condition = spartans > alpha;

if (condition) {
  console.log("spartans win");
} else if (condition) {
  console.log("alpha wins");
} else {
  console.log("it's a tie");
}

let getWords = (food) =>
  "Hello eni did you know christy ate " + food + " wraps of fufu";

let newWord = getWords(20);
let reterate = newWord + " after class today";
console.log(reterate);

let fees = [60, 80, 0, 120];
let peeps = ["ejiro", "christy", "kruz", "sam", "eni", "henry"];

function getDetails(sth, newSth) {
  for (let i = 0; i < sth.length; i++) {
    console.log(sth[i]);
  }
  for (let i = 0; i < newSth.length; i++) {
    if (newSth[i] === 0) {
      continue;
    }
    console.log(newSth[i]);
  }
}
getDetails(peeps, fees);

// higher order functions and call back functions
// higher order functions accepts another function as an argument or returns another function as a result
// call back functions are functions passed to another function as an argument and executed inside that function

function getHello() {
  return "hi";
}
let rr = getHello();
let getReport = (nth) => {
  console.log(nth);
};
getReport(rr);

// object ---------- object literal, math object, dates
// Dom(Document object model)

let christyClient = ["henry", "kingsley", "dark", ["kruz", "sam"], 2023 - 1980];
console.log(christyClient);

// object, key and value pairs, denoted by curly braces({})
let christyCustomer = {
  firstName: "hemry",
  lastName: "kingsley",
  complexion: "dark",
  friends: ["kruz", "sam"],
  age: 2023 - 1960,
  canDrive: true,
  isBlind: false,
  date: Date(),
};
console.log(christyCustomer);
console.log(typeof christyCustomer);

let newCustomer = {
  country: "Nigeria",
  state: "Lagos",
};
console.log(newCustomer);

let christy_Customer = { ...christyCustomer, ...newCustomer };
console.log(christy_Customer);

// Accessing objects dot vs bracket notation
let christyTrainee = {
  firstName: "kruz",
  lastName: "bola",
  skinColor: "dark",
  tribe: "yoruba",
  age: 39,
  address: {
    stateOfOrigin: "Ibadan",
    stateOfResidence: "Lagos",
    Lga: "surulere",
  },
  favFoods: ["banga", "egusi", "fufu", "amala"],
  canDrive: true,
  profession: "senior front-end dev",
  canSmoke: false,
  numberOfKids: null,
};
//  Dot notation
// accessing firstName

let newchristyTrainee2 = christyTrainee.firstName.toUpperCase();
console.log(newchristyTrainee2);
// accessing favfoods
let newchristyTrainee3 = christyTrainee.favFoods;
console.log(newchristyTrainee3);
// accessing stateOfOrigin
let newchristyTrainee4 = christyTrainee.address.stateOfOrigin;
console.log(newchristyTrainee4);

//  Bracket notation
// accessing firstName

let bracketChristyTrainee = christyTrainee["firstName"].toUpperCase();
console.log(bracketChristyTrainee);
// accessing stateOfOrigin
let bracketChristyTrainee2 =
  christyTrainee["address"]["stateOfOrigin"].toUpperCase();
console.log(bracketChristyTrainee2);

// destructuring objects
let account = {
  name: "uloma",
  toes: 10,
  stateOfMind: "extra cool",
  statusOfLove: "she she bere",
};
console.log(account);

// console.log(account.names);
let nameInAccount = account.name;
console.log(nameInAccount);
let toesInAccount = account.toes;
console.log(toesInAccount);
let stateOfAccount = account.stateOfMind;
console.log(stateOfAccount);

let { name, toes, stateOfMind, statusOfLove } = account;
console.log(name, toes, stateOfMind, statusOfLove);

// Object method
let passenger = {
  firstName: "christy",
  lastName: "kingsley",
  year: 2023,
  busFAreInNaira: 200,
  pocketMoneyInNaira: 1000,
  currentDate: Date(),
  calcbal: function () {
    let statement =
      this.firstName +
      " has " +
      (this.pocketMoneyInNaira - this.busFAreInNaira) +
      " Naira";
    console.log(statement);
    return statement;
  },
};
console.log(passenger.calcbal());
// console.log(this);

// assignment2
let alpha1 = 43 + 21 + 73;
let alpha2 = 87 + 55 + 39;
let totalAlp = 318;

let spartan1 = 63 + 55 + 47;
let spartan2 = 21 + 33 + 2;
let totalSpar = 221;

let calcAverage = () => {
  let alphas = totalAlp / 3;
  console.log(["alphas"]);

  let spartans = totalSpar / 3;
  console.log(spartans);

  let teamAve = alphas >= 2 * spartans;
  console.log(teamAve);
};
calcAverage();

let checkwinner = (aveAlpha, aveSpartan) => {
  let pc = "alphas win(106 vs 73.6)🎖";
  console.log(pc);
};
checkwinner();
// incorrect workings

// A1
let calcAverages = (scores1, scores2, scores3) => {
  let aveOfScores = (scores1 + scores2 + scores3) / 3;
  console.log(aveOfScores);
  return aveOfScores;
};
calcAverages();

// A2
let teamAlpha = calcAverages(43, 21, 73);
console.log(teamAlpha);
let teamSpartan = calcAverages(63, 55, 47);
console.log(teamSpartan);
let teamAlpha2 = calcAverages(87, 55, 39);
console.log(teamAlpha2);
let teamSpartan2 = calcAverages(21, 33, 2);
console.log(teamSpartan2);

// A3
let checkWinners = function (aveAlphas, aveSpartans) {
  if (aveAlphas >= 2 * aveSpartans) {
    console.log(`Alpha wins ${aveAlphas} vs ${aveSpartans}`);
  } else {
    console.log("no winner🏆");
  }
};
checkWinners(teamAlpha, teamSpartan);

// A4
checkWinners(teamAlpha2, teamSpartan2);
// correct workings

// higher order function(forEach, map, filter, find, findIndex, reduce)

for (let i = 0; i < DATA.length; i++) {
  console.log(DATA[i]);
}

// forEach()
// It doesn't return a new array
// It loops

DATA.forEach((xx) => {
  console.log(xx);
});

function newData(datum) {
  console.log(datum);
}
DATA.forEach(newData);

// Map method
// It returns a new array
// It doesn't change the size of the original array
// It uses values from the original array
// It loops

let anotherPerson = PEOPLE.map((person) => person);
console.log(anotherPerson);

// filter()
// It loops
// It returns based on condition
for (let i = 0; i < PEOPLE.length; i++) {
  if (PEOPLE[i].name === "christy") {
    console.log(PEOPLE[i]);
  }
}
let filteredPerson = PEOPLE.filter(function (pp) {
  return pp.name === "christy";
});
console.log(filteredPerson);

// findIndex
let itemidx = DATA.findIndex(function (idx) {
  return idx.id === 4;
});
console.log(itemidx);

// find()
let item = DATA.find(function (singleItem) {
  return singleItem.id === 1;
});
console.log(item);

// reduce()
// It returns callback for each elemnet of an array
// the difference here is that a reduce passes the result of this callback(the accummulator) from one array to another

const sum = NUMBERED.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log(sum);

let countries = ["Nigeria", "Egypt", "Cameroon", "France"];

let africa = countries.map((country) => country);
console.log(africa);

let filteredAfrica = countries.filter(function (places) {
  return places === "Egypt";
});
console.log(filteredAfrica);

let red = countries.findIndex(function (ice) {
  return ice === "Cameroon";
});
console.log(red);

// Math object
let floor = 4.9999;
let floorResult = Math.floor(floor);
console.log(floorResult);

let ceil = 5.8888;
let ceilResult = Math.ceil(ceil);
console.log(ceilResult);

// round()
let round = 7.1222;
let roundResult = Math.round(round);
console.log(roundResult);

// pow()
let pow = Math.pow(2, 2);
console.log(pow);
console.log(2 ** 2);

// random()
let random = Math.random(Math.random() * 6);
console.log(random);

// take home1
let person1 = {
  fullName: "sam",
  mass: 76,
  height: 1.99,
  calcBMI: function () {
    let pass = (this.mass / this.height) ** 2;
    return pass;
  },
};
console.log(person1.calcBMI());

let person2 = {
  fullName: "christy",
  mass: 80,
  height: 2.1,
  calcBMI: function (run) {
    run = (this.mass / this.height) ** 2;
    return run;
  },
};
console.log(person2.calcBMI());

if (person1 > person2) {
  console.log(
    `sam's BMI of ${person1.calcBMI()} is greater than christy's BMI of ${person2.calcBMI()}`
  );
} else {
  console.log(
    `christy's BMI of ${person2.calcBMI()} is greater than sam's BMI of ${person1.calcBMI()}`
  );
}

// take home2
const companies = [
  { name: "company One", category: "Finance", start: 1981, end: 2003 },
  { name: "company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "company Eight", category: "technology", start: 1981, end: 1989 },
];

// b1
let company = companies.map(function (race) {
  return race.name;
});
console.log(company);

// b2
let years = companies.filter((tt) => tt.end - tt.start >= 10);
console.log(years);

// b3
const age = [30, 15, 10, 5, 40, 80, 2, 20, 21, 25];
let ages = age.filter((pr) => pr >= 21);
console.log(ages);

// take home3
// c1
let billValues = 275;
console.log(billValues);

// function billTotal(value) {
//   console.log(value);
// }
// billValues.forEach(billTotal);

let tip =
  billValues >= 50 && billValues <= 300 ? billValues * 0.15 : billValues * 0.2;
console.log(
  `total bill equal ${billValues} and tip equals ${tip} total values ${
    billValues + tip
  }` 
)
console.log(billValues + tip);

// dates
// console.log(new Date().getseconds());
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const DAYS =['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
console.log(new Date());
let date = new Date()

const month = date.getMonth()
console.log(MONTHS[month]);
const day = date.getDay() 
console.log(DAYS[day]);
const fullYear = date.getFullYear()
console.log(fullYear);
const hours = date.getHours()
console.log(hours);
const minutes = date.getMinutes()
console.log(minutes);
const seconds = date.getSeconds()
console.log(seconds);
const zone = date.getTimezoneOffset()
console.log(zone);
let statementOfYear = `${DAYS[day]} ${MONTHS[month]} ${date.getDate()} ${fullYear} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getTimezoneOffset()}`
console.log(statementOfYear);


// timer
// setTimeOut() vs satInterVal

function coloured(){
  console.log('this is a function');
}
setTimeout(coloured, 8000)

setTimeout(() => {
  console.log('blue');
}, 3000)

coloured()

let colours = function(){
  console.log('blue');
}

setInterval(colours,8000)

let interval = setInterval(()=>{
  let date = new Date()
  console.log(date);
},1000)









































