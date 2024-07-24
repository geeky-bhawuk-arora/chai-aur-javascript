// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "Doraemon"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array Methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(42)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// Slice, Splice
console.log("A", myArr);
const myArr3 = myArr.slice(1, 3); // Returns a copy of that section of the array
console.log(myArr3)
console.log("B", myArr);

const myArr4 = myArr.splice(1, 3); // Removes the elements from that section of the array
console.log("C", myArr);
console.log(myArr4) 
