let rendom = Math.random()*7;
// console.log(rendom)
var div01 = document.querySelector(".div01")
// let newrendom = Math.round(rendom)
let newrendom = Math.ceil(rendom)
// let newrendom = Math.floor(rendom)
console.log(newrendom)
let nor = div01.textContent = newrendom

console.log(nor)



// **********changing string to integers ************

let num = prompt("what is your name?")
// var num = 1.00000
console.log(typeof(num))
let NewNum = parseInt(num)
console.log(typeof(NewNum))
let oneNew = parseFloat(NewNum)
console.log((NewNum))

// let string = num.toString();
// console.log(string)

let fixNum = rendom.toFixed(0)
console.log(fixNum)

// =************* Date *************
 let Newdate = new Date()
 console.log(Newdate)