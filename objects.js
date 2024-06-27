
// OOP

const circle ={
    radius : 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw();

//Factory Function

function createCircle(radius){
    return {
        // radius : radius,
        radius,
        draw(){
            console.log(`Draw circle with radius ${this.radius}`);
        }
        // draw: function(){
        //     console.log('Draw circle');
        // }
    };
}

const circle1 = createCircle(2);
console.log(circle1.draw());

const circle2 = createCircle(3);
console.log(circle2.draw());

// Constructor function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Draw circle by constructor func');
    }
    // return this; automatically
}

const circle4 = new Circle(4);
console.log(circle4.draw())


// Dynamic nature of objects

const rectangle = {
    radius: 1
};

rectangle.color = 'yellow';
rectangle.draw = function(){}

delete rectangle.color;
delete rectangle.draw;

console.log(rectangle);

// Constructor property

let t = {}

// let x = new Object();

new String();// '', "", ``
new Boolean(); //true false
new Number(); // 1, 2, 3 ...


//Functions are Objects

// Enumerating properties of an Object
const mixcircle = {
    radius : 1,
    draw(){
        console.log('draw');
    }
};

// for (let key in mixcircle)
//     console.log(key, mixcircle[key]);

// for (let key of Object.keys(mixcircle))
//     console.log(key);

// for (let entry of Object.entries(mixcircle))
//     console.log(entry);

// Cloning 

// const another = Object.assign({}, mixcircle);
const another = {...mixcircle};

console.log(another);


// 


    
