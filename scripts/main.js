// console.log("Welcome to your playground")

/* Playground to try js in */

// Exercise 1: November 19, 2020
// Functions can return a value that we can capture:
// Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
// Execute the function in a way that captures the returned value in a variable.
// Console.log the string "When it comes to pets," plus the returned value of the function.

// const dogString = (dog) => {
//     if (dog) {
//     return `my favorite dog breed is ${dog}`
//     }
//     return "I like cats"
// }

// const dogBreed = dogString("border collie")
// console.log(`When it comes to pets, ${dogBreed}.`)


// Skeleton of a for loop
// for (initialExpression; condition; incrementExpression) {
//   (initializing i to 0/ loop to 0; compare the value of i to something else; increment operator to increment the value of i with 1;)
//   statement
// }

  // for (let i = 5; i >= 1; i--) {
  //   if (i % 2 !== 0) console.log(i);
  // }


  // Exercise 2: November 23, 2020
  // let painter = {
  //   tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  //   uniform: "white overalls",
  //   cost_per_hour: 25.00,
  //   insured: true
  // };

  // painter.dancemove = () => "moonwalk";

  // console.log(`The painter's signature dance move is the ${painter.dancemove()}.`);

  // console.log(painter);

  // Add an action that the painter can perform ( a property whose value is a function ).
  // Have her take that action by execucting the method you created


  //Exercise: Event Listener
// const button = document.querySelector("#btn--dontclick")

// button.addEventListener("click", () => {
//   console.log("The uncooperative user has clicked the button.")
//   alert("You weren't supposed to click this button.")
// })


//Mosh Exercises 1 / Max of Two Numbers
// Write a function that takes two numbers 
// and returns the maximum of the two - the one that is the biggest
// Call and make sure it works


//  const max = (number1, number2) => {
//   // if number1 is bigger than number2, return number1, 
//   // if it's not return number2
//   return (number1 > number2) ? number1: number2;

//  }

//  let number = max(10,5);
// console.log(number);


//Mosh Exercises 2 / Landscape or Portrait
// isLandscape will return true, if the width is larger than the height
// if else, it will return false

// const isLandscape = (width, height) => {
//   if (width > height) {
//     console.log(true);
//   }
//   else {
//     console.log(false);
//   }
// }

// Another way to write
// const isLandscape = (width, height) => {
//   if (width > height) console.log(true);
//     else console.log(false);
//   }

// let measurements = isLandscape(1920, 1080);

// Code like this can look very amateurish.
// You don't want to explicitly say true or false. It's ugly

// const isLandscape = (width, height) => {
//   return (width > height) ? console.log(true): console.log(false);
// }

// let measurements = isLandscape(1920, 1080);

// There is no need to explicity say true or false
// it it already embedded, an innate feature
// This is prettier

// const isLandscape = (width, height) => {
//   return (width > height);
// }

// console.log(isLandscape(1920, 1080));

// Mosh Exercises 3 / FizzBuzz
// Very popular interview question called FizzBuzz algorithm 
// function called fizzBuzz, give it an input and return a string

// Divisible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by 3 and 5, = FizzBuzz
// Not divisible by 3 or 5, you get the same input
// If you don't pass a number, but a string - you get "Not a number"

// this is what you did with holy fish!!
// const fizzBuzz = (input) => {
//   if (typeof input !== 'number')
//     return NaN;
    
//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//   if (input % 3 === 0)
//     return 'Fizz';

//   if (input % 5 === 0)
//     return 'Buzz';

//   return input;
// }

// const output = fizzBuzz(false);
// console.log(output);

// Mosh Exercises 4 / Demerit Points

// Speed Limit = 70 = OK
// Every 5 kilometers above the speed limit = Get 1 Point
// 5 -> Point:
// Need to use Math.floor(1.3) - floating number
// More than 12 points = License suspended

// For every 5mph above Speed Limit (70), user gets 1 point


// if speed at 70 = console.log(OK!)
// if speed above 75, user will log 1 point for every 5mph over
// if above 70, then that number - 70, and then divide by 5

// Rickie's
// let currentPoints = 0;

// const checkSpeed = (speed) => {

//   const speedCalculator = () => {
//     let currentPoints = ((speed - 70) / 5)
//     console.log(`Points: ${currentPoints}`)
//   }

//   if (speed === 70) {
//     console.log('OK');
//   }
//   else if (speed >= 75) {
//     speedCalculator();
//   }

// }

// checkSpeed(100);

//Mosh
// You will always want to define the numbers - Use variables
// It's easier to read
// const checkSpeed = (speed) => { 
//   const speedLimit = 70;
//   const mphPerPoint = 5;

//   if (speed <= speedLimit + mphPerPoint) {
//     console.log('OK');
//   }
//   else {
//     const points = Math.floor((speed - speedLimit) / mphPerPoint);
//     if (points >= 12)
//       console.log('License suspended')
//     else
//       console.log('Points', points);
//   }
// }

// checkSpeed(130);

// // Another way to write it, without indentation of else
// const checkSpeed = (speed) => { 
//   const speedLimit = 70;
//   const mphPerPoint = 5;

//   if (speed <= speedLimit + mphPerPoint) {
//     console.log('OK');
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / mphPerPoint);
//   if (points >= 12)
//     console.log('License suspended')
//   else
//     console.log('Points', points);
// }

// checkSpeed(130);

// Lightning Exercise 3? 4?
// Add a <section> element with an id of family to your index.html
// Use a good old for loop to iterate over this array of objects to pull out the 
// names of the family members and represent them as HTML by wrapping each in an <h3> tag. Append them to the DOM.
// Achieve the same result using .map()

// let family = [
//   {
//     name: "Fred Jones",
//     age: 49,
//     title: "parent"
//   },
//   {
//     name: "Pat Jones",
//     age: 50,
//     title: "parent"
//   },
//   {
//     name: "Bubba Jones",
//     age: 20,
//     title: "adult child"
//   },
//   {
//     name: "Kelly Jones",
//     age: 12,
//     title: "dependent child"
//   },
//   {
//     name: "Bartleby",
//     age: 3,
//     title: "pet"
//   }
// ]

// const familyElement = document.querySelector("#family");

// const familyMap = () => {
//   familyElement.innerHTML += family.map( (member) => {
//     return `<h3>${member.name}</h3>`;
//   })
//   .join("")
// }

// familyMap();


// .filter
// filtering each object with a certain condition into a variable
// then spits it out as an array of objects
// Use this array method instead to find multiple things that fit your condition
// const adults = family.filter((familyMember) => familyMember.age >= 18)

// // .find
// // Finding the first thing it can find, and return it back to you
// // Function's job is to return the thing that is in it's condition
// // So in thise case, only one parent object was returned to you, despite there being two parents
// const parent = family.find( (familyMember) => familyMember.title === "parent")

// // .map
// // 

// console.log('With .filter, Grownups?', adults);
// console.log('With .find, Parents', parent);


// Lightning Round | December 8th, 2020

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}

// Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'
// Console log "Jeff was hired on 09/22/2010" using bracket notation.
// Add a new key, vacation_days, and its value, 20, to employee. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.
// let eom = "employee_of_the_month";
// Use the variable above to add a new property to employee. Set its value to false. Should you use dot or bracket notation?


// console.log(`Our company's lawyer is ${employee.name}.`)
// console.log(`${employee['name']} was hired on ${employee['hire_date']}.`)

// employee.vacation_days = 20
// employee['vacation_days'] = 20
// console.log(employee)

// let eom = "employee_of_the_month";
// employee['eom'] = false;

// console.log(`Our company's lawyer is ${employee['name']}.`)
// console.log(employee)


// employee['name'], employee['hire_date']