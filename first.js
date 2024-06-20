// // // console.log('arati how wonderful you are!!');

// // // const student={
// // //     name: "arati",
// // //     age:20,
// // //     cgpa:10
// // // }

// // // console.log("student",student);

// // let markedprice = [250,645,300,900,50];

// // for(let cost of markedprice){
// //     console.log(cost-(cost/10));
// // }
// // // let final = markedprice[0]/10;
// // // console.log( markedprice[0] - final);

// let btn = document.querySelector("#btn")
//     btn.onclick = () =>{
//         console.log("btn was clicked!");
//         let a = 25;
//         a ++;
//         console.log(a);
//     }

// let p = document.querySelector("p")
//     p.onmouseover=()=>{
//         console.log("you are in paragraph");
    
//     }


// document.addEventListener("DOMContentLoaded", function () {
//     const audio = document.getElementById("audio");
//     const playPauseBtn = document.getElementById("playPauseBtn");

//     playPauseBtn.addEventListener("click", function () {
//         if (audio.paused) {
//             audio.play();
//             playPauseBtn.textContent = "Pause";
//         } else {
//             audio.pause();
//             playPauseBtn.textContent = "Play";
//         }
//     });
// });



// Arithmetic operators
// let a =5;
// let b = 4;
// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b); // Exponential operator




// comparison operator

// let c = 5;
// let d = 10;
// console.log("c == d",c == d); // gives output in boolean, here false.
// console.log(" c != d",c != d);
// console.log( "c >= d",c >= d);
// console.log("c <= d",c <= d);
// console.log("c === d",c === d); check data types if type of data is same return true;


//  c = "10";
//  d = "5"; 
// //  string -> number then compare
// console.log("c == d",c == d) // give true,

// console.log("c === d ", c === d) // gives false. === is use to check data types of var. here c is number and d is string . -> false.
// === first check data type if it is not equal return false. if data type is equal it will check for values. if they are equal return true. 
// 'data type' => "actual value" => gives answer. mostly we are going to use === instead of == to check condition. 


// logical operator 
// logical and -> &&, logical or -> || , logical 

// 



// loops in js
// for loop, do while loop, while loop,
// speacial loops : - for of , for in 
// for of loop used to iterate string and arrays

//  let str = "arati";
// let size = 0;
// for (let val of str){
//     console.log("val=",val);
//     size ++ ;

// }
// console.log("size is =", size);  



// for in loops
// let student = { 
//     name: "Arati Wakchaure",
//     age : 20,
//     cgpa : 10,
//     isPass : true,
// }

// for( let key in student){
//      console.log("key= ", key, "value = ",student[key]) ;
// }



// eg. print all even numbers from 0 to 100

// for(let i = 0; i<=100; i++){
//    if(i%2==0){
//     console.log("even no",i);}
// }
// for(let i =1; i<=100; i=i+2){
   
//     console.log("even no",i);}

// eg.2 . guess Number

// let gameNum = 25;
// let userNum = prompt("guess the number: ");
// while(userNum != gameNum){
//     userNum= prompt("you entered wrong number. guess again : ");
// }

// console.log("Congratulations, you entered the right number");



// Strings in js

// let str = "apna college";
// let str2 = 'arati';
// console.log(str.length);
// // string behave as object
// // str[2],str[3]
// console.log("7th index ", str[7]);


// Template literals in JS 
//  A way to have embedded expression in string

// to create a string by doing substitution of placeholders
// `string text ${expression} string text`

//  let sentence = `this is a template literal`;
// console.log(typeof sentence);

// let obj = {
//     item : "pen ",
//     price : 10,
// };

// console.log("the cost of ", obj.item, "is", obj.price, "rupees");
// let output= `the cost of ${obj.item} is ${obj.price} rupees` ;
// console.log(output);

//  escape charaters \n and \t (for tab) they are considered as single char \n is single.
// strings in a js are immutable. new string is created if method is apply like str.toUpperCase(),
// // str.toLowerCase, str.trim()//removes white spaces
//  str.slice(start, end), str1.contact(str2) == str1 + str 2 ,str.replace(searchVal, newVal), str.replaceAll("lo", "p")str.charAt(ind)=>to search char by index
// let str1 = 'Arati';
// str1.toUpperCase();
// console.log(str1); => Arati because new string created . original does not Change 
// "hello" + 123 => hello123 (converted to string)


// question : generate username by adding their length at last 

// let Name = prompt("Enter your Name");
// let userName = `Your username is @${Name}${Name.length}`;
// alert(userName);


// Arrays in JS

// let heros=['abhishek','hulk','arati','dr.strange'];
// let info=['rahul', 86, 'delhi'];
// console.log(info);
// console.log(info.length);
// typeof info => object 
// arrays are mutable in js but strings are immutable
// iterables are string, arrays, objects
// for( let i=0; i<heros.length; i++ ){
//     console.log(heros[i]);
// }

// to pring elements in array we should use for of 
// for(let hero of heros){
// //     console.log(hero);
// // }

// // question find average of marks
// let marks= [85,97,44,37,76,60];
// let sum = 0;
// for(let el of marks){
//     sum = sum + el;

// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class is ${avg}`);

// question 2 : store final prices in the array after applying offer of 10% off.
// here we cannot use for of use because for of loop gives value of array not index. so we use explicitly ind var to iterate.
// let items = [250,645,300,900,50];
// let i = 0;
// for(let val of items){
//     // console.log(`value at index ${i} is ${val}`);
   
//      let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//      i++;
// }

// using for loop

// for(let i = 0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);


// array method there are two types of arrays method in js, change original array and second is create new array without changing original

// Push(): add to end, fooditems.push("chips"); change in original array
// pop() : delete from  and return 
// toString():=> (marks.toString())
// Concat() : no change in original array 
// let marvel = ["thor","tony stark","spiderman"]; 
//  let dc=["spiderman","batman"];
// // marvel.concat(dc);

// console.log(marvel.concat(dc));

// unshift method : adds at begining of Array
// shift method : delete from begining
// slice(): returns a piece of the array , not change in original array , marvel.slice(1,4)=> 4th not included , marvel.slice(1,)=> all el from array from 1
// splice(): change in original array (add remove, replace)


// //  functions in JS 

// function myFunction(msg){
//     // parameter
//     console.log(msg);
// }
// myFunction("helloworld!");//argument => funtion call 


// function sum(n,n2){
//     console.log("SUM IS ", n+n2);
// }

// sum(4,5);

// 


// compact way of writing fucntion 
//  const functionName = (param1, param2...) => {
    // do some work
// }

//  eg. 
//  const arrowSum = (a, b) =>{
//     console.log( a + b);
// }

// const mul = (x , y) => {
//      console.log(x * y);
// }

// let printhello = () =>{
//     console.log("helloworld!");
// }

// printhello();



// // count vowel
// const Vowel = (str) => {
//   let  cont = 0;
//     for(let i= 0 ; i<str.length; i++){
//         if(str[i]=== 'a' || str[i] === 'e' || str[i] === 'i' || str[i]=== 'o' || str[i] === 'u')
//         cont ++;
//     }
//     console.log(cont);
// }

// Vowel("arati");





// function countVowel(string){
//     for (let char of string){
//         console.log(char);
//     }
// }

// countVowel("arati");







// const countVowels = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
  
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
  
//   return count;
// };



// // Example usage:
// const sentence = "This is a sample sentence.";
// console.log(`Number of vowels in the sentence: ${countVowels(sentence)}`);




// foreach method for example: "abc".toUpperCase() is a method

// for each only use in arrays .........methods are functions only they are associated with some datastructor.
// in js functions can passed as a parameter.
// call back function is a function passed as an argument to another function



// for ex.

//  let arr = ["pune","delhi","mumbai","nagar"];

// arr.forEach( (val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })



// higher order functions are the one who either take parameter or return parameter another function






// question : for given array of numbers , print the square of each number using forEach loop.

// let nums = [1,2,3,4,5];
// nums.forEach( ( val ) => {
//     console.log(`square of ${val}th index is ${val*val}`);
// })

// arr.forEach(element => {
//     console.log(element);
// });

// array methods foreach, map. now lets see map
// creates a new array with the result of some operation.the value its callback returns are used to form new array

// arr.map(callbackfnx(value, index, array))


let nums = [3,64,23,56,7];

// nums.map((val) => {
//     console.log(val);
// })
// let newArray = nums.map((val)=>{
//     return val**2;
// })
// console.log(newArray);
// console.log(typeof(newArray))


// array method  : filter some conditions are apply
// let evenArr=nums.filter((val) => {
//     return val >6;
// })

// console.log(evenArr);


// array method : reduce. performs some operations & reduces the array to a single value. it returns that single Value.
// let arr4 = [1,2,763,4];
// const output = arr4.reduce((res,curr) => {
//     return res + curr;
// });

// console.log(output); 

// const output = arr4.reduce((res, curr) => {
//     return res>curr ? res:curr;
// })
// console.log(output);

// question : filter out marks of student that scored 90+.

// let marks = [65,11,94,75,100,95,23,43];

// let result =marks.filter((val) =>{
//     return val>90;
// })
// console.log(result);


// question: take number from user

let number = prompt("Enter a number");
let arr5 = [];

for(let i = 1; i<=number; i++){
    arr5[i-1]=i;
}
console.log(arr5);
