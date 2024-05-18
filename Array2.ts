//question 1
//Create an array named fruits that contains the following string 
// elements: "apple", "banana", "mango", "orange".
console.log("Question 1")
let fruits: string[]=["apple","mango","banana","orange"];
console.log(fruits);

//Question 2 
// Declare an array named numbers that can contain only number 
// elements and initialize it with the values 10, 20, 30, and 40.
console.log("\nQuestion 2")
let numbers :number[]=[10,20,30,40];
console.log(numbers);

// Question 3 
// Access the third element of the fruits array and assign it to a 
// variable named thirdFruit.
console.log("\nQuestion 3");
let thirdFruit=fruits[2];
console.log("Third element of the array is : "+thirdFruit);

//Question 4 
// Change the second element of the numbers array to 25.
console.log("\nQuestion 4");
 numbers[1]=25;
 console.log("Changing the value of second element of the array.The original array will become:");
 console.log(numbers);


 //Question 5 
// Add the element "grape" to the end of the fruits array using the 
// method.
console.log("\nQuestion 5")
 fruits.push("grape");
console.log("Adding a new element 'Grape' to the array.The original array will become ");
console.log(fruits);

 //Question 6
//Remove the last element from the fruits array using the 
// method and assign it to a variable named lastFruit.
console.log("\nQuestion 6");
let lastFruit=fruits.pop();
console.log("Removing the last element ("+lastFruit+") from the array.The original array will become :");
console.log(fruits);

// Question 7 
// Remove the first element from the fruits array using the 
// method and assign it to a variable named firstFruit.
console.log("\nQuestion 7");
let firstFruit=fruits.shift();
console.log("Removing the first element ("+firstFruit+") from the array.THe original array will become : ");
console.log(fruits);

// Question 8 
// Add the element "kiwi" to the beginning of the fruits array 
// using the method.
console.log("\nQuestion 8");
fruits.unshift("kiwi");
console.log("Adding a new element 'kiwi' at the start of the array.The original array will become :");
console.log(fruits);

//Question 9
// Remove 2 elements from the fruits array starting from index 1 
// using the method. 
console.log("\nQuestion 9");
fruits.splice(1,2); //starting from index 1 and remve 2 elements
console.log("Removing the element of index 1 and 2.The original array will become :");
console.log(fruits);

//Question 10 
// Insert the elements "pineapple" and "pear" at index 2 of the 
// fruits array using the method.
console.log("\nQuestion 10");
fruits.splice(2,0,"pinapple","pear"); //staring from index 2 and adding 2 fruits.
console.log("Inserting the element 'pineapple and 'pear' at the index 2 of the array.The original array will become: ");
console.log(fruits);

//Question 11 
// Create a new array named citrusFruits that contains the first 
// two elements of the fruits array using the method.
console.log("\nQuestion 11");
let citrusFruits= fruits.splice(0,2); //starting from index 0 and take 2 elements.
console.log("The starting 2 elements of the array is : "+citrusFruits);

//Question 12 
// Create a new array named lastTwoFruits that contains the last 
// two elements of the fruits array using the  method.
console.log("\nQuestion 12");
let lastTwoFruit=fruits.splice(-2);
console.log("The last two elements of the array is : "+lastTwoFruit);