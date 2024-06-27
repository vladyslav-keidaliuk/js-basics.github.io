const numbers = [3,4];

//End
numbers.push(5,6);
//Beginning
numbers.unshift(1, 2);
//Middle 
numbers.splice(2, 0, 'a', 'b');



console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(3));

console.log(numbers.includes(3))

console.log(numbers);


//Finding elements

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(function(course){
    return course.name === 'a';
});

console.log(course);

// Arrow Functions (lambda)
const course1 = courses.find(course => course.name  === 'a');

console.log(course1);

//Remove from array

//End
const last = numbers.pop();

//Beginnig
const first = numbers.shift();

//Middle
numbers.splice(2, 1);
console.log(numbers);


//Empting array

let numbers2 = [1,2,3,4];
let another1 = numbers2;

//Solution1 
// numbers2 = [];

//Solution2
// numbers2.length = 0;

//Solution3
// numbers2.splice(0, numbers2.length);


console.log(another1);


//Combining and slicing arrays

const f = [{id: 10},1,2,3];
const s = [4,5,6];

f[0].id = 5;

// const combined = f.concat(s);

// const slice = combined.slice(2);

// console.log(combined);
// console.log(slice);

// Spread operator 

// const combined = [...f, 'a', ...s, 'b'];

// // const copy = combined.slice();
// const copy = [...combined];
// console.log(combined);

//Iterating an Array

s.forEach((number)=> console.log(number));


//Sorting 

const numberS = [2, 3, 1];
numberS.sort();
console.log(numberS);

numberS.reverse();
console.log(numberS);


const units = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
];

units.sort(function(a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
} );
console.log(units);



const nums = [1, -1, 2, 3];

// Filtering
const filtered = nums.filter(n => n >= 0);
console.log(filtered);
// Mapping

// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

const items = nums
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items);

// Reducing an array

const prices = [200, -5, 24, 36];

// let sum = 0;

// for (let n of prices)
//     sum += n;

// console.log(sum);

// a = 0, c = 200 => a = 200
// a = 200, c = -5 => a = 195
// a = 195, c = 24 => a = 219
// a = 219, c = 36 => a = 255 
const sum = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);