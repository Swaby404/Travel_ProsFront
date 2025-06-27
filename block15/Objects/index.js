

//Prompt the user to enter a list of grocery items separated by commas (milk,eggs,bread,cheese). Your program should:
// 1. Convert the input from a string into an array using .split() (NEW METHOD!!)
// 2. Show the number of items in the list.
// 3. Display the first and last items in the list.
// 4. Remove the last item, then add a new item of your choice at the end.
// 5. Remove the first item, then add a new item of your choice at the beginning.
// 6. Print out the whole grocery list


const input= prompt ("");
let groceries =input.split(",");
  console.log("number of Items" , groceries.length);

console.log("first item" , groceries[0]);
 console.log("last item" , groceries[ groceries.length -1]);
  
 groceries.pop();
 groceries.push("Mango");
 groceries.shift() ;
 groceries.unshift("Orange Juice");
 console.log("groceries" , groceries);




     




   
  



