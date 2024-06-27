
// let role; 

// switch (role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;

//     default:
//         console.log('Unknown User');
//         break;   
// }

// if (role === 'guest') console.log('Guest');
// else if (role === 'moderator') console.log('Moderator user');
// else console.log('Unknown User');




//Loops

// for (let i = 0; i < 5; i++){
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
// }


// let i = 0;
// while (i <= 5){
//     if  (i % 2 !== 0) console.log(i);
//     i++;
// }

//Do-while - executed at least once

// let i = 9;

// do {
//     if  (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

// For-in 

// const person = {
//     name: 'Vlad',
//     age : 30
// };

// for (let key in person)
//     console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
//     console.log(index, colors[index])

// // For-of
// for (let color of colors)
//     console.log(color);

// let i = 0;
// while (i <= 10){
//     if(i % 2 === 0){
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }


// Max of two 

// function max (a, b){
//     if(a > b) return a;
    
//     return b;
// }

function max (a, b){
    return (a > b) ? a : b;
}
console.log(max(1,2));

console.log(isLandscape(600,400));

function isLandscape(width, height){
    return (width > height);
}

function fizzBuzz(input) {
    if (typeof input !== 'number') return 'Not a Number';
    else if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    else if (input % 3 === 0) return 'Fizz';
    else if (input % 5 === 0) return 'Buzz';
    

    return input;
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(7));
console.log(fizzBuzz('9'));


function checkSpeed(speed){
    const limit = 70;
    if (speed <= limit){

        return 'Ok';
    }
    else{
        let points = Math.floor ((speed - limit)/5);
        if(points >= 12 ){
            return 'License suspended';
        }
        else{
            return `Point : ${points}`;
        }
    }
}

console.log(checkSpeed(70));
console.log(checkSpeed(72));
console.log(checkSpeed(75));
console.log(checkSpeed(80));
console.log(checkSpeed(180));


const movie = {
    title : 'a',
    releaseYear : 2018,
    rating : 4.5,
    director : 'b'
};

function showProperties(obj){

    for (let prop in obj){
        if (typeof obj[prop] === "string"){
            console.log(prop, obj[prop])
        }
    }
}

showProperties(movie);

customSum35(10);

function customSum35 (limit){
    let sum = 0;

    for (let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }

    console.log(sum);
}

const marks = [80, 80, 50];


function calculateGrade(marks){
    let sum = 0;
    
    for (let index in marks){
        if(typeof marks[index] === "number"){
            sum += marks[index];
        }
    }

    let avg = sum / marks.length;

    if(avg >= 90 && avg <= 100){
        return 'A';
    }
    else if(avg >= 80 && avg <= 89){
        return 'B'
    }
    else if(avg >= 70 && avg <= 79){
        return 'C';
    }
    else if(avg >= 60 && avg <= 69){
        return 'D';
    }
    else if(avg >= 1 && avg <= 59){
        return 'F';
    }
    return avg;
}

console.log(calculateGrade(marks));

showStars(10);

function showStars(rows){
    for(let i = 1; i <= rows; i++){
        let pattern = '';
        for (let j = 0; j < i; j++){
            pattern += '*';
        }
        console.log(pattern);
    }
}

showPrimes(5);

function showPrimes(limit){
    

    for(let number = 0; number <= limit; number++){
        let arr = [];

        for(let i = 0; i <= number; i++){
            
            if(number % i === 0){
                arr.push(i);
            }
        }

        for(num in arr){
            if(arr.length === 2){
                console.log(number);
            }
        }
    }
}