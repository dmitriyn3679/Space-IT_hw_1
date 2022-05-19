'use strict'

let array1;
let array2;
let array3;

// Task 1
array1 = ['a', 'b', 'c'];
array2 = [1, 2, 3];

array3 = [...array1, ...array2];
array3 = [].concat(array1, array2);


// Task 2
array1.push(...array2);



// Task 3
array1 = [3, 4, 1, 2, 7];
array1.sort();


// Task 4
const reverse = (array) => {
    let res = [];
    let lenArr = array.length;
    for (let x = lenArr - 1; x >= 0; x--) {
        console.log(array[x])
        res.push(array[x])
    }
    return res;
};

console.log(reverse([1, 2, 3, 4]));


// Task 5
// typeof null == object -> Розробники мови підтвердили що це є баг який пішов з перших версіх мови.