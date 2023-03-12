// // -------------- method number one 

// function numOne (){
//     alert( "my name is murfad")
//     console.log( "my name is murfad")
//     document.write( "my name is murfad")
// }
// numOne()


// // ------------method number two--
// // ---------as a number ----------
// function add (j ,k  ,l ){
//     return j + k * l 
// }
// console.log(add (66,4,2))  
// document.write(add(66,4,2))

// //  ------as a string---


// function string (full_name  , nick_name){
//     return `my name is ${full_name }  but  my nick name is ${nick_name}.`
// }

// document.write(string("malik Murfad ahmed","MR Murfi"))

// // ----------method number three 
// // ==========expression method 


//     const method3 = function(schoolname1,schoolname2){
//         return `my primary school  name is ${schoolname1} and secondary is ${schoolname2} `
//     }
// console.log(method3("PAF","NGS"))


// // --------- expression method number two =============================
// // -----------arrow functions-------------

// var place = prompt('what is the first place?')
// var places = prompt('what is the second place?')


//     const expression02 =(place01,place02) =>{
//         return `the first place is ${place01} and the second is ${place02}`
//     }
//     document.write(expression02( place , places))



// var name1 = prompt("what is your first name?")
// var name2 = prompt("what is your last name?")
// var name3 = prompt("what is your  age?")
// function murfad (a,b,c){
//  return `<h1>my first name is ${a} and last name is ${b} and i am ${c}years old.</h1>`
// }
// document.write(murfad(name1,name2,name3))

// // ----------nested functions --------------
// function sun (g){
//     return function(k){
//         return function(l){
//             return g *k *l
//         }
//     };
// }
// var var1 = sun(2)
// var var2 = var1(5)
// var var3 = var2(6)
// document.write(var3)

// let vegeindex = (prompt("how many vegetable do you want to buy!"))

// console.log(fruit.includes("banana"))
// console.log(fruit.indexOf("banana"))

// let askFruit = (prompt("which vegetable do you want to buy!"))

// const fruit =["mango","banana","grapes","lemon","strawberry","kiwi","grapefruit"]



// if ((fruit.includes(askFruit))){
//     alert(`ohh! Really  fruit ${askFruit}is available  and the index no is ${fruit.indexOf(askFruit)}`)
//     document.write(`ohh! Really this fruit ${askFruit} and the index no is ${fruit.indexOf(askFruit)}`)
// }
// else{
//     alert("sorry ! Dear nothing to do have a nice shopping")
//     document.write("sorry ! Dear nothing to do have a nice shopping")
// }

// //----------------object declaretion from prompt-----------
// var askIndex = +(prompt("write the serial no of student."))
// var askspecification = prompt("which type of data you want to know?")

// var car = [
//     {
//         Name: "alia",
//         fatherName: "mujtaba",
//         Id: "7878",
//     },
//     {
//         Name: "maryam",
//         fatherName: "mushtaq",
//         Id: "4601",
//     },
//     {
//         Name: "maria",
//         fatherName: "adil",
//         askspecifications :askspecification,
//         Id: "4626",
//     },
// ]
// // console.log(car[askIndex][askspecification])
// // document.write(car[askIndex][askspecification])

// // alert( car[1].Name)
// console.log((car[askIndex][askspecification]))

// // ------------include method------------

// const shop = ["biryani","chiken","mutton","beef","korma","nihari","sabzi","roti/nan"]
// console.log(shop.includes("chiken"))


// // ------------include method--------with if else condition----


// const askdish = prompt("which dish would you eat?")

// if(shop.includes(askdish) && shop.indexOf(askdish) >=0 ){


//     alert(`yes!     ${askdish} is available here and its price is ${shop.indexOf(askdish)}`)

// }

// else{

//     alert(`No! ${askdish} is not available right now but we provide very best.`)

// }


//---------------objects---------


  const bhai = {
    Name : "murfad",
    fatherName : "bilal Ahemd",
    age : 17,
    class : "intermedites",
    Married : false,
    sibblings : ["anna","mera","tonu",],
    salam(){
        return `hello my name  is ${this.sibblings}`
    },
    for (){
        return this
    }
    
}
console.log(bhai)
console.log(bhai.salam())
console.log(bhai.for())
console.log(bhai.Married)

//------------------changing the value -----------
const murfad = bhai.age;
console.log(murfad);
bhai.class = "matric";
console.log(bhai.class)
bhai.sibblings[1] = "malik";
console.log(bhai.sibblings[1])

//-------------dot notation -------------

console.log(bhai.Name)

//-------------bracket notation--------

console.log(bhai['Name'])

//-------------concatenation------------


const nokey = 'Name'


console.log(bhai[nokey])

console.log(bhai['father'+nokey])


