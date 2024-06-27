// console.log('Hello World');

// //vars

// let myName = 'Mosh';
// let lastName = 'Hamed'
// console.log(myName);

// //conts

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// // Primitives

// // Undefined is type and value
// let str = "Vlad"; // String literal
// let age = 30;
// let isApproved = false;
// let firstName; // undefined
// let tstName = undefined;
// let selectedColor = null;


// console.log(typeof age);


//Reference types
// let person = {
//     name: 'Mosh',
//     age: 30
// };

// // Dot Notation
// person.name = 'John';

// // Bracket Notation
// let selection = 'name';
// person[selection] = 'Mary';


// console.log(person);

//Arrays

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green'
// // console.log(selectedColors[0]);
// console.log(selectedColors.length);


//Functions

// function greet(name, lastName){
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('John', 'Smith');


// function square(number){
//     return number * number;
// }

// console.log(square(2))

//Operators

let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// console.log(++x); // Increment first, see after
// console.log(x++); // See first, increment after

// console.log(--x); //Decrement first, see after
// console.log(x--); //See first, decrement after

// x++;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

let z = 1;

// console.log(z > 0);
// console.log(z >= 1);
// console.log(z < 1);
// console.log(z <= 1);

// == - приводит типы, сравнивает только значение
// === - строгое сравнение , не приводит типы, сравнивает и тип и значение

// console.log(z == 1);
// console.log(z !== 1);

// console.log(1 == 1);
// console.log(1 == '1');
// console.log(true == 1);

// console.log(1 === 1);
// console.log(1 === '1');//false


// let points = 110;
// let type =  points > 100 ? 'gold' : 'silver';

// console.log(type);

//Logical AND (&&)
//Returns true if both are true
// console.log(true && false);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

//Logical OR (||)
//Returns true if one of operands is true 

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible: ' + eligibleForLoan);

// let applicationRefused = !eligibleForLoan;

// console.log('Application Refused: ' + applicationRefused);

//Falsy (false)
// undefined
// null
// 0
// false 
// ''
//NaN




// let userColor = 'red';
// // let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

// 1 = 00000001
// 2 = 00000010
// R = 00000011

// console.log(1 | 2);// output 3

// let r = (2 + 3) * 4;

// console.log(r);

// Task1

// let a = 'red';
// let b = 'blue';

// let tmp;

// tmp = a;
// a = b;
// b = tmp;

// console.log(a);
// console.log(b);

