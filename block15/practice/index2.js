 //STEP1.The user is prompted for froyo flavors upon entering the website.
//STEP2.The user's input string is split into an array of strings.
//STEP3.A loop is used to iterate through the array of flavors.
//STEP4.An object is used to keep count of how many orders there are of each flavor.
//STEP5.The program correctly counts the number of each flavor in the user's input.
//STEP6.The console output changes depending on the user's input.

//OBJECT TO KEEP COUNT
//let flavors = {
//    strawberry: 0,
//    vanilla: 0,
 //   chocolate: 0,
 //   orange: 0,
   // cherry: 0,
   // mango: 0,
//};
 
 //STEP1. user is prompted for froyo flavors upon entering the website.
  ///   let getFlavors=prompt("Enter your flavors:");

//STEP2.The user's input string is split into an array of strings.
   ///   let userFlavors= getFlavors.split(",").map(flavor => flavor.trim().toLowerCase());
       

//STEP3.A loop to iterate through the array of flavors also to store & count. 
 /// function storeFlavors(orderedFlavors){
  //      for (let flavor of orderedFlavors){
     
  //      flavors[flavor]= (flavors[flavor] || 0) +1;
  //   }      return flavors;
//}

//STEP4.invoking function
//storeFlavors(userFlavors);

//STEP5.displaying results desired.
//console.log("Here's your order: ");
//console.table(flavors);

//vanilla,vanilla,vanilla,strawberry,coffee,coffee

//dissect code above and learn logic behind each step shown!!
//An object is used to keep count of how many orders there are of each flavor.
 let Flavors = {
    strawberry: 0,
    vanilla: 0,
    chocolate: 0,
    coffee: 0,
     
}; 
///prompt user for flavors
let getFlavors = prompt("enter your icecream option:")

/// string together the users input into array.
 let properties = Object.keys(Flavors)
     console.log(properties )
   
 
///create a loop to iterate through array of flavors(store & count!)
   function storeFlavors(){
      let Flavors =[orderedFlavors]

      for(let flavor of orderedFlavors){

         console.log(flavor)
}
      flavors[flavor]= (Flavors[flavor] || 0) +1;
               return flavor;
      }     
   
 

 



    
  


  
   
   
   
  





     
     
    
    



 