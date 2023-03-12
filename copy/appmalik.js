
// question no 1 function assigment
// function MonthOfDay (currentdate,time,days){
//     return currentdate,time,days
// }
// document.write("14-02-2023"," 2"," wednesday")

// function expression

// const MonthOfDay2 = function(currentdate1,time1,days1){
//     return currentdate1,time1,days1
// }
// document.write( "</br> 14-02-2023"," 2"," wednesday")

// arrow function

// const MonthOfDay3 = (currentdate2,time2,days2)=>{
//     return currentdate2,time2,days2
// }


// document.write( "</br> 14-02-2023"," 2"," wednesday")

// question no 2

// function fullName  (firstName,lastName){
//     // console.log(`my full name is ${firstName} ${lastName}`)
//     return(`my full name is ${firstName} ${lastName}`)

// }
// // fullName("muhammmad","anas")
// var firstName = prompt("Enter your first name")
// var lastName  = prompt("Enter your last name")
// console.log(fullName(firstName,lastName))

// second method function expression
// const fullName1 = function(firstName1,lastName1){
//     return(`my full name is${firstName1} ${lastName1}`)
// }
// console.log(fullName1("muhammad","anas"))
//  third method Arrow function

// const fullName2 =(firstName2,lastName2)=>{
//     return(`my full name is ${firstName2} ${lastName2}`)

// }
// console.log(fullName2("Muhammad ","anas"))
// Question no 3


// function sumOfNumber (number1,number2){
//     return number1 + number2
// }
// alert(sumOfNumber(3,2))
// 


// //  second method function expression
// const sumOfNumber2 = function(number1,number2){
//     return number1 + number2
// }
// console.log(sumOfNumber2(444,44455))


// question no  4

// const calculator = function(number1,number2,operation){
//     if(operation == "+"){
//       return  number1 + number2
//     }else if(operation == "-"){
//         return number1 - number2
//     }else if (operation == "*"){
//         return number1 * number2
//     }else if(operation == "/"){
//         return number1/number2
//     }else if(operation == "%"){
//         return number1%number2
//     }else{
//         alert("non of the value")
//     }
// }
// var number1 = +prompt("Enetr the number of first ")
// var operation = prompt("Enter the operation ")
// var number2 = +prompt("Enter the sceond number")
// console.log(calculator(number1,number2,operation))

// // question no 5

// const squareNumber = function(value1,value2){
//     return value1*value2
// }
// console.log(squareNumber(4,4))

// // Arrow function
// const squareNumber1 =(value1,value2)=>{
//     return value1*value2
// }
// console.log(squareNumber1(4,5))

// // question no 6  function expression

// const factorial = function(n){
//     return n*(n-1)
// }
// alert(factorial(100))

// // arrow function 

// const factorial1 = (n)=>{
//     return n*(n-1)
// }
// alert(factorial(100))

// // question no 7

// const startingAndEndingNumber = function(startingNumber,endingNumber){
//     return (`the  starting number is ${startingNumber} and the ending number is ${endingNumber}`)

// }
// document.write(startingAndEndingNumber(5,10))

// // arrow function

// const startingAndEndingNumber1 = (startingNumber,endingNumber)=>{
//     return (`the  starting number is ${startingNumber} and the ending number is ${endingNumber}`)

// }
// document.write(startingAndEndingNumber1(10,13))

// // question no 9 

// const calculateTheAeraOfCircle = function(width,height){
//     return width * height
// }
// var width = +prompt("Enter the width ")
// var height = +prompt("Enter the height")
// console.log(calculateTheAeraOfCircle(width,height))

// // question no 10
// let value = 123
// const myRevValue = ()=>{
//     let myRevValue = value.toString().split("").reverse().join('');
//     let myStrVal = value.toString();

//     if(myStrVal == myRevValue){
//         console.log("palindrome")
//     }else{
//         console.log("Not the palindrome")
//     }
// }


// // question no 11
// // const parameter = function(firstletter){
// //     return firstletter.toString().
// // }

// // function no 14

// const calcircumference = function(radius,pi){
//     return 2*pi*radius
// } 
// console.log(calcircumference(4,3.142))

// // arrow function

// const calcircumference1 = (radius,pi)=>{
//     return 2*pi*radius
// }
// console.log(calcircumference1(44,3.142))

// // function expression

// const calArea = function(radius,pi){
//     return pi*radius*radius
// }
// console.log(calArea(3,3.142))

// assigment of array


// qustion no 3

// const array = ["muhammad anas","muhammad riaz ali","junaid","abdul wasay"]
// console.log(array[1])

// question no 4

// const numberOfArray = [1,23,45,6,7,8,3]
// console.log(numberOfArray)

// question no 5

// const boolenOfArray = [true,false,true,false,true,false]
// console.log(boolenOfArray)

// question no 6
 
// const mixedArray = ["fruits","graps","amount","karachi",1,12,33,true,false]
// console.log(mixedArray)

// question no 7

// const qualification = ["BS","BCOM","MS","M.PHIL","PHD"]
// console.log(qualification)

// question no 8

const studentsName = ["muhammad anas","abdul wasay","ashhad"];
const marksOfStudents = [400,300,200];
const totalMarks = 500;
console.log(`score of ${studentsName[0]} is ${marksOfStudents[0]} percentage is ${marksOfStudents[0]/totalMarks*100}`)
console.log(`score of ${studentsName[1]} is ${marksOfStudents[1]} percentage is ${marksOfStudents[1]/totalMarks*100}`)
console.log(`score of ${studentsName[2]} is ${marksOfStudents[2]} percentage is ${marksOfStudents[2]/totalMarks*100}`)

// question no 9

const arrayOFColor = ["yellow","red","green","black","purple","pick"]
// const addingColorInTheBeginning = arrayOFColor.unshift("blue")
// console.log(arrayOFColor)
// console.log(addingColorInTheBeginning)
// part b
// const addingColorInTheEnding =arrayOFColor.push("blue");
// console.log(arrayOFColor)
// console.log(addingColorInTheEnding)
// part c

// const adding = arrayOFColor.splice(0,0,'brown','white')
// console.log(arrayOFColor)
// console.log(adding)
// // 
// part d 
// const deleteOfNumber = arrayOFColor.splice(4,2)
// console.log(arrayOFColor)
// console.log(deleteOfNumber)

// const deleteOfNumber2 = arrayOFColor.splice(0,1)
// console.log(arrayOFColor)
// console.log(deleteOfNumber2)

// part e 


const deleteOfNumber4 = arrayOFColor.splice(4,1)
console.log(arrayOFColor)
console.log(deleteOfNumber4)
// question no last
const cities = ["karachi","lahore","islamabad","Quetta"]
console.log(cities[2] + " " + cities[3]) 