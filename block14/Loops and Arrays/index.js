// Modify the array using various array methods:
// .pop(), .push(), .unshift(), .shift()

//create an array of fruits that contains "lemon", "strawberry", "grape", "orange", "lime"

const fruits=[ "lemon", "strawberry", "grape", "orange", "lime"]
console.log(fruits)
 

// STEP 1: console.log the length of the array

console.log("The Array length is", fruits.lengths)

// STEP 2: console.log the first and last items in the array


console.log("First item in Array", fruits[0])
console.log("The last item in Array",fruits[fruits.lengths -1])

// STEP 3: Remove lime from the end of fruits array.
fruits.pop()
console.log("fruits at step 3:" , fruits)


// STEP 4: Add banana and dragonfruit to the end of the fruits array.
fruits.push("banana , dragonfruit")
    console.log("fruits at step 4:", fruits)



// STEP 5: Remove the first fruit in the fruits array.
fruits.shift()
    console.log("fruits at step 5:", fruits)


// STEP 6: Add apple to the beginning of the fruits array.
fruits.unshift("apple" , "strawberry")
    console.log("fruits at step 6:" , fruits)



// STEP 7: Create a for loop that console.logs out the name of every fruit in the array

for(let i=0; i <= fruits.length -1; i++ ){
    console.log(fruits[i])
}


/**
 * STEP 8: Create a function that console.logs the fruits at an even index, starting with the passed in index
 *
 * @param {number} index number of which element to start in the array
 */

const printEven =(index)=>{
 for(let i=index; i<= fruits.length -1 ; i++){
   if(i % 2===0){
      console.log(fruits[1])
   }
 }
}




 printEven(0);
 console.log("__________________________")
 printEven(2);

// STEP 9: Create a while loop that console.logs the name of every fruit in the array 

let idx = 0 

while(idx < fruits.length){
  console.log("WHILE LOOP" , fruits[idx])
  idx++
}



/**
 *  STEP 10: Create a function to console.log the fruits at an odd index using a while loop, starting with the passed in index
 *
 * @param {number} idx number of which element to start in the array
 */

function printOdd (index) {
   while (index < fruits.length){
    if(index % 2  !==0) {
    console.log(fruits[index]);
    }
    index ++;
   }
}
printOdd(0)












