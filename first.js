// // Operators in Javascript


// // Arithmetic operators
// let a =5;
// let b = 4;
// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);    // //Exponential operator


// //comparison operator

// let c = 5;
// let d = 10;
// console.log("c == d",c == d); // gives output in boolean, here false.
// console.log(" c != d",c != d);
// console.log( "c >= d",c >= d);
// console.log("c <= d",c <= d);
// console.log("c === d",c === d); // output is false.

//  e = 10;
//  f = "10" ; 
// console.log("e == f",e == f)   // // gives true,
// console.log("e === f", e === f) // // gives false.

// //' === ' is use to check data types of var. here e is number and f is string
// //=== first check data type if it is not equal return false. if data type is equal it will check for its values. if they are equal return true. 
// //'data type' => "actual value" => gives answer. 



// //logical operator 
// //logical and -> &&, logical or -> || , logical 
 



// // loops in js
// // for loop, do while loop, while loop,
// // speacial loops : - for of , for in 
// // for of loop used to iterate string and arrays

// let str = "arati";
// let size = 0;
// for (let val of str){
//     console.log("val=",val);
//     size ++ ;

// }
// console.log("size is =", size);  




// // for in loops
// let student = { 
//     name: "Arati Wakchaure",
//     age : 20,
//     cgpa : 10,
//     isPass : true,
// }
// for( let key in student){
//      console.log("key =", key, "value =",student[key]) ;
// }

// console.log(student['age']);



// // eg. print all even numbers from 0 to 100

// for(let i = 0; i<=100; i++){
//    if(i%2==0){
//     console.log("even no",i);}
// }


// for(let i =1; i<=100; i=i+2){
//  console.log("even no",i);
// }




// // eg.2 . guess Number

// let gameNum = 25;
// let userNum = prompt("guess the number: ");
// while(userNum != gameNum){
//     userNum= prompt("you entered wrong number. guess again : ");
// }

// alert("Congratulations, you entered the right number");





// // Strings in js

// let str = "Myfamily";
// let str2 = 'Arati';
// console.log(str.length);
// //string behave as object
// str[2],str[3]
// console.log("7th index ", str[7]);


// //Template literals in JS 
// //A way to have embedded expression in string

// // To create a string by doing substitution of placeholders
// // `string text ${expression} string text`

//  let sentence = `this is a template literal`;
// console.log(typeof(sentence));


// // use of literals
// let obj = {
//     item : "pen ",
//     price : 10,
// };
// console.log("the cost of ", obj.item, "is", obj.price, "rupees");
// let output= `the cost of ${obj.item} is ${obj.price} rupees` ;
// console.log(output);

// //Escape charaters \n and \t (for tab) they are considered as single char \n is single.

// //strings in a js are immutable. new string is created if method is apply like str.toUpperCase(),
// // str.trim()//removes white spaces
// //str.slice(start, end), str1.contact(str2) == str1 + str 2 ,str.replace(searchVal, newVal), str.replaceAll("lo", "p")str.charAt(ind)=>to search char by index

// let str1 = 'Arati';
// let upper= str1.toUpperCase();
// console.log(upper) // ARATI
// console.log(str1); // Arati
// output is Arati because new string created . original does not Change 


// // concatination of string and numbers
// console.log("hello" + "123"); //hello123;
// console.log("hello" + 123) // hello123 (converted to string)
// console.log(3 + 123); // 126
// console.log("3" + 123); //3123
// console.log("3" + "123"); //3123


// // checking the === sign
// let a = 3;
// let b = "3";
// if (a === b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// // question : generate username by adding their length at last 

// let Name = prompt("Enter your Name");
// let userName = `Your username is @${Name}${Name.length}`;
// alert(userName);



// //Arrays in JS
// //(arrays are object) arrays are mutable in js but strings are immutable


// let heros=['Capton America','Hulk','Tony Stark','Dr.strange'];
// for( let i=0; i<heros.length; i++ ){
//     console.log(heros[i]);
// }


// let info=['rahul', 86, 'delhi']; //any type of data
// console.log(info);
// console.log(info.length);


// // to pring elements in array we should use 'for of' 
// for(let hero of heros){
//     console.log(hero);
// }

// // question find average of marks
// let marks= [85,97,44,37,76,60];
// let sum = 0;
// for(let el of marks){
//     sum = sum + el;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class is ${avg}`);



// //question 2 : store final prices in the array after applying offer of 10% off.
// // here we cannot use "for of" loop because it gives value of array not index. so we use explicitly index var to iterate.

// let items = [250,645,300,900,50];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} is ${val}`);
   
//      let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//      i++;
// }

// // using for loop
// let items = [250, 645, 300, 900, 50];
// for(let i = 0; i<items.length; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);



// // array method :  there are two types of arrays method in js, change original array and second is create new array without changing original

// //Push(): add to end, change in original array

// let fruit = ["apple","mango","guava","pineapple"];
// fruit.push("litch");
// console.log(fruit);
// console.log(fruit.toString());
// console.log(fruit);


// let marks = [45,67,87,54,90];
// console.log(marks.toString());
// marks.pop();
// console.log(`after pop method ${marks}`);



// //pop() : delete from end and return 
// // toString():=> (marks.toString())


// // Concat() : no change in original array 
// let marvel = ["thor","tony stark","spiderman"]; 
//  let dc=["spiderman","batman"];
// console.log(marvel.concat(dc));


// unshift method : adds at begining of Array
// shift method : delete from begining
// slice(): returns a piece of the array , not change in original array , marvel.slice(1,4)=> 4th not included , marvel.slice(1,)=> all el from array from 1
// splice(): change in original array (add remove, replace)




// //  functions in JS 

// function myFunction(msg){  // parameter
//    console.log(msg);
// }
// myFunction("helloworld!"); //argument  


// function sum(n1,n2){
//     console.log("SUM IS ", n1+n2);
// }
// sum(4,5);




// // compact way of writing fucntion.... 
// // const functionName = (param1, param2...) => {
// //    do some work
// //}
 
// // eg. 
//  const arrowSum = (a, b) =>{
//     console.log( a + b);
// }

// const mul = (x , y) => {
//      return x*y;
// }
// console.log(mul(2,3));       //6

// let printhello = () =>{                     //without parameter
//     console.log("helloworld!");
// }
// printhello();



// // count vowel using arrow function
// const Vowel = (str) => {
//   let cnt = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     )
//       cnt++;
//   }
//   console.log(cnt);
// };

// Vowel("arati");




// function to count the number of vowels forof loop
// function countVowel(string) {
//   let cnt = 0;
//   for (let char of string) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       cnt++;
//     }
//   }
//   console.log(cnt);
// }

// countVowel("arati");


// //other way using array
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
// const sentence = "This is a sample sentence.";
// console.log(`Number of vowels in the sentence: ${countVowels(sentence)}`);




// foreach method 
//"abc".toUpperCase() is also a method

// for each only use in arrays .........methods are functions, only they are associated with some datastructure, like toUppercase() is always use with string
// In js, functions can passed as a parameter.
// callBack function is a function passed as an argument to another function

// // for ex.

// let arr = ["pune", "delhi", "mumbai", "nagar"];

// arr.forEach( (val) => {
//     console.log(val.toUpperCase());
// })


// output = () => {
// let arr = ["pune", "delhi", "mumbai", "nagar"];
// for(let city of arr){
//     console.log(city);
// }
// }
// output();


// // forEach has parameter val, idx, arr 

//  let arr = ["pune","delhi","mumbai","nagar"];
// arr.forEach( (val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// })





// Higher order functions/ methods are the one which either they take parameter or they return parameter to another function





// question : for given array of numbers , print the square of each number using forEach loop.

// let nums = [1,2,3,4,5];
// nums.forEach( ( val ) => {
//     console.log(`square of ${val}th index is ${val*val}`);
// })

// let nums = [1,2,3,4,5];
// nums.forEach(element => {
//     console.log(element);
// });



// different approach - stored arrow function inside a variable and pass it in the forEach method as an argument.

// let nums = [1,2,3,4,5];
// let calcSquare = (num) => {
//     console.log(num*num);
// };

// nums.forEach(calcSquare);





// //map method
// // array methods foreach, map. now lets see map
// // map creates a new array with the result of some operation.the value its callback returns are used to form new array

// arr.map(callbackfnx(value, index, array))


// let nums = [3,64,23,56,7];

// nums.map((val) => {
//     console.log(val);
// })
// let newArray = nums.map((val)=>{
//     return val**2;
// })
// console.log(newArray);
// console.log(typeof(newArray))





// array method  : filter, some conditions are apply
// let nums = [3, 64, 23, 56, 7];
// let evenArr=nums.filter((val) => {
//     return val > 6;
// })

// console.log(evenArr);




// array method : reduce. performs some operations & reduces the array to a single value. it returns that single Value.
// let arr4 = [1,2,763,4];
// const output = arr4.reduce((res,curr) => {
//     return res + curr;
// });

// console.log(output); 

// //to find out the largest element from the array using reduce method.
// let arr = [2,3,5,34,67,95];
// const largest = arr.reduce((prev, curr) => {
//    if( prev > curr ){
//     return prev;}
// else{
//     return curr;
// } 
// });
// console.log(largest);



// const output = arr4.reduce((res, curr) => {
//     return res>curr ? res:curr;
// })
// console.log(output);



// // question : filter out marks of student that scored 90+.

// let marks = [65,11,90,75,100,95,23,43];

// let result =marks.filter((val) =>{
//     return val>=90;
// })
// console.log(result);


// // question: take number from user

// let number = prompt("Enter a number");
// let arr5 = [];
// for(let i = 1; i<=number; i++){
//     arr5[i-1]=i;
// }
// console.log(arr5);

// let sum = arr5.reduce((res,curr)=>{
//     return res + curr;
// })
// console.log(sum);

// To iterate through arrays, there is a special type of for loop, forEach, which gets executed for each value in the given array.
// 1
// 2
// 3
// 4
// 5
// let myArray = ["Jack","Jill",4,5,true,"John"]
// myArray.forEach(element => {
//     console.log(element)
// })


// // factorial of a number using reduce method

// let n = prompt("enter a number");

// let arr = [];

// for(let i = 1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let fact = arr.reduce((res, curr)=>{
//     return res * curr;
// })

// console.log(fact);



// let markedprice = [250,645,300,900,50];
// for(let cost of markedprice){
//     console.log(cost-(cost/10));
// }


// let btn = document.querySelector("#btn")
//     btn.onclick = () =>{
//         console.log("btn was clicked!");
//         let a = 25;
//         a ++;
//         console.log(a);
//     }




// console.log('arati how wonderful you are!!');

// const student={
//     name: "arati",
//     age:20,
//     cgpa:10
// }
// console.log("student",student);


// DOM (Document object model)

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




// // Window object , the window object represents an open window in a browser. it is browser's object(not js's) and is automatically created by browser.
// // it is a global object with lots of properties & methods.

// // document object model , when a web page is loaded, the browser creates a DOM of the page
// // to print object we use console.dir for example - console.dir(window.document)
// // to print element we use console.log(window.document)

// console.dir(document);
// console.log(document); 
// console.dir(document); //object of document
// console.log(document.body); //print element body (code)
// console.dir(document.body);//object of body under document



// // Access html inside javascript is dom. it is tree like structure which consist nodes. (childnodes). it is use to change the html with the help of javascript. (dynamic changes)
// document.body.style.backgroundColor = "BLUE";

// // DOM Manipulation -(accessing elements) selecting with id , selecting with class, selecting with tag
// // document.getElementById("myid"), document.getElementsByClassName("myclass"),document.getElementsByTagName("p");
// let heading = document.getElementById("heading");
// console.dir(heading);

// let id1=  document.querySelector("#myid");
// let class1 = document.querySelector(".className");
// let body1 = document.querySelector("body");
// let elements = document.querySelector("body")

// let firstEle = document.querySelector("p"); // first p element;
// console.dir(firstEle);

// let allEle = document.querySelectorAll("p")//all p
// console.dir(allEle);

//  properties - tagName -return tag for element nodes, innerText - return text content of the element and all its children
// // innerHTML - return the plain text or HTML contents inthe element
// // textContent - returns textual content even for hidden elements


// h2.append("from apna college");
// let heading = document.querySelector("h2");
// heading.innerText = heading.innerText + " hello geeks";
// heading = heading.append(" hello geeks");

// DOM MANIPULATION 


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

//  document.querySelector("body").prepend(newBtn);

