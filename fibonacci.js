#!/usr/bin/env node

// node fibonacci.js - executes the app
// chmod u+x fibonacci.js - gives the executable permission to the app
// node -e "console.log("test") - executes a string 
// npm i -g nodemon - to restart the app automatically (install nodemon globally)
// npm i --save-dev nodemon - (install nodemon as a development dependency)

console.log("test")

function fibs(number) {
    const array = [0, 1];   

    for (let i = 2; i < number; i++) {
        array[i] = array[i-1] + array[i-2];
    }
    return array; 
}

console.log(fibs(8));

function fibsRec(number, array = [0, 1]) { 
    console.log("This was printed recursively");  

    if (array.length === number) {
        return array;
    }    

    array.push(array[array.length - 1] + array[array.length - 2]);

    return fibsRec(number, array);
}

console.log(fibsRec(8));