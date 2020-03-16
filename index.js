let launchTimer = 6;

if (launchTimer > 0) {
    console.log('Time until missile launch T-minus ' + launchTimer + ' seconds.');
    --launchTimer
} else if (launchTimer == 0) {
    console.log('Missile launch successful.');
} else {
    console.log('Missile launch failure.');
}

let lightColour = 'blue';

if (lightColour == 'red') {;
    console.log('Light is red, please wait until the light is green to proceed');
} else if (lightColour == 'orange') {
    console.log('Light is orange, light will be green soon, wait to proceed');
} else if (lightColour == 'green') {
    console.log('Light is green, please proceed');
} else {
    console.log('Light Colour is invalid');
};

let stringFirst = '';
 
if (stringFirst) { // Automatic type conversion to truthy/falsy is encouraged in JavaScript, as leads to more concise and understandable code.
    console.log('Value of stringFirst is truthy');
} else {
    console.log('Value of stringFirst is falsy');
};

let objectFirst = { isObject: true };
let objectSecond = { isObject: true };
console.log(objectFirst == objectSecond);
console.log(objectFirst === objectSecond);

objectFirst = objectSecond;
console.log(objectFirst == objectSecond);
console.log(objectFirst === objectSecond);

const person = 'Joe';
switch (person) {
  case 'Jane': {
    let name = 'Jane';
    console.log(name);
    break;
  }
  case 'John': {
    let name = 'John';
    console.log(name);
    break;
  }
  case 'Joe': {
    let name = 'Joe';
    console.log(name);
    break;
  }
  case 'Mary': {
    let name = 'Mary';
    console.log(name);
    break;
  }
  default: {
    console.log('No name');
    break;
  }
}

const foo = 1;
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('I like this number');
    break;
  case -1:
  case -2:
    console.log('I love this number');
    break;
  default:
    console.log('I don\'t like this number.');
}

let personTwo = {
    name: 'tony',
    age: 20,
    driver: null
};

if (personTwo.age >= 16) {
    personTwo.driver = 'Yes';
} else {
    personTwo.driver = 'No';
}
console.log(personTwo.driver);

let personThree = {
    name: 'jim',
    age: 23,
    driver: null
};

personThree.driver = personThree.age >=16 ? 'Yes' : 'No';
console.log(personThree.driver);

let isStudent = true;
let price = isStudent ? 8 : 12; 
console.log(price);

let personStudent = true;
let movieCost = 12;
personStudent ? (movieCost = 8, console.log('Please check for student ID')) : (console.log('Enjoy the movie'));

for (let missileLaunchTimer = 10;; missileLaunchTimer--) {
    console.log('Time until missile launch T-minus ' + missileLaunchTimer + ' seconds.');
    if (missileLaunchTimer == 0) {
        console.log('Missile launch successful');
        break;
    };
};