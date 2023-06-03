
var firstName = "Murfad";
var secondNmame = "Ahmed";
var num = 93270;sec = "SMIT(WMA)";
let btn = document.querySelector('button');

btn.addEventListener('click', MALIK );

 function MALIK() {
     console.log(`my name is ${firstName}${secondNmame} \n and i am in batch  8 of ${sec} roll number is ${num}`)
     alert(`my name is ${firstName}${secondNmame} \n and i am in batch  8 \n of ${sec} roll number is ${num}`)
}


/*for loops*/
let ask = prompt("write your name ?")
let fname = ["malik","murfad","ahmed","murtaza","jamal"]
// console.log(`hello ${name[1]} ${name[2]}`)
for(let n=0 ; n < fname.length ; n++){
     if(ask === fname[n]){
          console.log("milgaya")
          break
     }
     else{
          console.log("nhi mila ?")
     }
     
     // console.log(fname.length)
}
