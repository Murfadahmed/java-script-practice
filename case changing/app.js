let input = document.querySelector(".Input")

let head02 = document.querySelector('.head02')

let btn = document.querySelector('#btn')

// btn.addEventListener('click',() =>{

// console.log(input.value)

// let first = input.value.slice(0, 1).toUpperCase()

// let second = input.value.slice(1, input.value.length).toLowerCase()

// let fullName = first + second

// head02.textContent = fullName

//     console.log(fullName)
// })

// console.log(btn)

let name01 = "murfad malik murfad malik murfad malik murfad malik murfad malik";

btn.addEventListener('click', () => {

   let  valueInput = input.value.split(" ");

    

    for (let a = 0 ; a < valueInput.length; a++) {

        // console.log(valueInput[a].charAt(1))

         valueInput[a] = valueInput[a].charAt(0).toUpperCase() + valueInput[a].slice(1).toLowerCase();
    }

    console.log(valueInput)

    let join_cap = valueInput.join(" ")

    // console.log(join0)

    // console.log(valueInput)
    head02.innerHTML = join_cap
});






















let splt = name01.split(" ");
// let splt0 = splt.split("");
// console.log(splt[0].charAt(0))
