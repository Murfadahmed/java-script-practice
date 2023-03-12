 /*var name = "murfad";
var age = "17";
var weight = "52";
var standard = "middle";
var into = `I am ${name} "I am ${age} year's old. My weight is about ${weight} and I have a standard that is " ${standard}"`
console.log (`${into}  ${into}`);



// ========positioning============
// first position====


var str = "this is a string"


var position = str.indexOf('a')


console.log (position)


// var name ="murfad"


// lastposition=============



position = str.lastIndexOf('is')


console.log (position)


// var name ="murfad"



// =========type of operaters========
 
// ======+++Alphabetics operater===

var alphabeticals = "ABCD";


console.log (alphabeticals);


console.log(typeof(alphabeticals));

// =========numericals operater=============

var numericals = 12345;

console.log (numericals);


console.log (typeof(numericals));


// =================boleon operater=========

var mrBilalBiryaniHouse = false;

console.log(mrBilalBiryaniHouse)


console.log(typeof(mrBilalBiryaniHouse))

// =============practice about integer signs========

var myName = "murfadahemd";

var MyFatherName = "BilalAhmed"


var MyAge = 17;

var MyWeight = 53;

var iAmUmar = false;

var IamMurfad = true;


// =======implements==========


console.log(MyAge + MyWeight)


console.log(MyAge - MyWeight)

console.log(myName + MyFatherName)

console.log(myName - MyFatherName)

console.log(iAmUmar + IamMurfad)


console.log(iAmUmar - IamMurfad)

console.log(iAmUmar - MyAge)

console.log(iAmUmar + MyAge)

console.log(MyAge + MyAge)

console.log(MyAge - MyAge)


// =========true&false==========

console.log(myName)

console.log(iAmUmar + IamMurfad)

console.log(iAmUmar + iAmUmar)

console.log(iAmUmar - iAmUmar)


console.log(IamMurfad + IamMurfad)


console.log(IamMurfad - IamMurfad)


console.log("myName" + "myFatherName")


// ========null============

var nolie = null;
console.log(nolie)
console.log(typeof(nolie))

// ==========undefine======

var notrue = 22 ;
console.log(notrue)
console.log(typeof(notrue))


// ==============NAN========

var number = NaN;

console.log(number)
console.log(typeof(number) )


// =======icreament and decreament================


var bum = "12";
var number = ++bum + 5; 
console.log( bum)
console.log(number)


var num = "15";
var numbers = --num - 5;
console.log( num)
console.log(numbers)

// ==========alerts==========

// =====simple alert popup============

alert("thanks for visting our website!")

// alert(20 * 3)
// alert(20 / 3)
// alert(20 - 3)

var name =" musatafa jane rehmat per lakhon salam!"

var name2 = "shammae bazmaye hidayat per lakhon salam"

// alert( name  + name2)

// ---------------PROMPT---------------------
var name = (prompt("what is your name ?"))
document.write(name )
//------------prompt in number 
var grade = (+prompt("in which class do you read?"))
document.write(` <br> ${(grade)}  `)
*/


//*******guese the number ! 
/*
let takeNumber = +prompt("try your luck and give your lucky number here!")

if(takeNumber <= 0 )
{
    alert("enter a number")
}
else if(takeNumber < 3 ){
    alert("you are great person,")
}
else if(takeNumber < 7)
{
    alert("your personality is great!")
}
else if(takeNumber < 9 )
{
    alert("your luck is down today!")
}
else if (takeNumber == 9 )
{
    alert("you are infinity!")
}
else{
    alert("some thing is fishy fishy!")
}
*/

//888*********** testing sugar *************
/*

let currentGlucoseLevel = +prompt("what is your blood glucose level?")
let weightPerson = +prompt("how much your weight today?")
// let HBA1C = prompt("write your current HbA1C level,")
let idealBloodGlucose = 100;
let basalInsulineDose = 0.5 * weightPerson
let bolusInsulineDose = (currentGlucoseLevel - idealBloodGlucose ) / 30;
document.write(` 
<style>

        table{
            border: 2px solid red;
            width: 100px;
            height: 100px;
        }
        th{
            border: 2px solid yellow;
            width: 100px;
            height: 100px;
        }
        td{
            border: 2px solid black;
            width: 100px;
            height: 100px;
        }
    </style>


<table>
        <th>No.</th>
        <th></th>
        <th >weight</th>
        <th></th>
        <th >gucose level</th>
        <th></th>
        <th>basal insuline</th>
        <th></th>
        <th>bolus insuline</th>
        <th></th>
        <tr>
            <th>1</th>
            <td></td>
            <td>${weightPerson}</td>
            <td></td>
            <td>${currentGlucoseLevel}</td>
            <td></td>
            <td>${basalInsulineDose}</td>
            <td></td>
            <td>${bolusInsulineDose}</td>
            <td></td>
        </tr>
    </table > `)
if(currentGlucoseLevel === 0 )
{
    console.log("enter the vaue!")
}

else if (currentGlucoseLevel <= 120 && currentGlucoseLevel >= 50)
{
    console.log("you are healthy")
}

else if (currentGlucoseLevel <= 140 && currentGlucoseLevel >= 121){
    console.log(`sugar ziada i he`)
}

else if (currentGlucoseLevel <= 180 && currentGlucoseLevel >= 141){
    console.log(`${ currentGlucoseLevel } sugar  bohut ziada hai`)
}

else if (currentGlucoseLevel <= 200 && currentGlucoseLevel >= 181){
    console.log(`${ currentGlucoseLevel } sugar  bohut ziada hai indus chale jao`)
}
else {
    console.log("ALLAH BEHTAR KARE")
}*/
