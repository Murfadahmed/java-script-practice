document.write(`
<center>
    <h1>Document Object Model! </h1>
</center>`)
// /*===+++++++++++++===== rout map ============ */


// // var malik = (document.documentElement);
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)



// /*===+++++++++++++===== child Node ============ */
// // ========(document.body)============
// // console.log(document.body) 
// console.log(document.body.childNodes)


// /* ***********=====.children sirf tag dega text comment wagera hata dega*/

// console.log(document.body.children)

/*.textContent=======  ander ka text dekaye ga jonsa element btaya howa hoga!!!*/


// /*  ====== Calling first child */

// console.log(document.body.firstElementChild.textContent)
// console.log(document.body.lastElementChild)


// for(Node of document.body.children){
//     console.log(document.body.children)
// }


// console.log(Array.from(document.body.children))


/*          method two*/

// const array = Array.from(document.body.children);
// console.log(array);



/*   sibling */

// const untitle = document.body.children[1];
// const listItems = untitle.children[5]
// console.log( `${listItems.nextElementSibling.textContent}<===next`)
// console.log( `${listItems.previousElementSibling.textContent} <==previous`)
// console.log(listItems.textContent)
// console.log(untitle.textContent)

/*table============*/

// const tablevar = document.body.children[2];
// console.log(tablevar.tBodies[0].rows[0].cells[1].textContent)
// console.log(tablevar.tBodies[0].rows[1].cells[0].textContent)
    /* =========Brief practice are precense in tablejs.html*/
    

    // *************tag selectors*******
    //yahan meyney direct heading call kri he phir styling krdi
    //  heading.style.background = "grey";

     //or ye dusra tareeka he variable bna kr implement krna  (hum variable ka name kuch  bhi rakh saktey hen)


    //  const head = document.getElementById("heading")
    //  head.style.backgroundColor = "lightgrey"



    // ************* implemeny by class selectors*********

        const items = document.getElementsByClassName("btn");
        items[0].style.backgroundColor = "lightblue"         ;   
        console.log(items[0].textContent);

    // by the help of loops 
    const li = document.getElementsByClassName("list")
    for(Node of li){
        li[0].style.backgroundColor = "red"
        li[1].style.backgroundColor = "lightgreen"
        li[2].style.backgroundColor = "yellow"
        li[3].style.backgroundColor = "orange"
        li[4].style.backgroundColor = "pink"
        li[5].style.backgroundColor = "violet"
        console.log(li[0].textContent)
        console.log(li[2].textContent)
        console.log(li[5].textContent)
        // alert(li[5].textContent)
        document.write(`${li[5].textContent} <br>`)


    }
    // implement by tags name========

    let headings = document.getElementsByTagName("h1")
    headings[0].style.backgroundColor = "gold"
    console.log(headings[0].textContent);
    
    let Tfortable = (document.getElementsByTagName("table"));
    console.log(Tfortable[0].tBodies[0].rows[1].cells[0].textContent)



    /* *****  *  * *  query selectors * * * * * * * * * 

    id ::::::=======
    class ::::=====
    tags:::::=====
    pseuodo selectors::::====
    */
   //    const list = document.querySelectorAll('ul > li:nth-child(1) ')
   //    console.log(list[0].textContent)
   
   const list = document.querySelectorAll('body')
   console.log(list[0].textContent)


//    const head03 = document.getElementsByClassName('head3')
//    console.log(head03[0].textContent)


    let heads  = head.getAttribute('malik');
    console.log(heads);
    /*1)getAttribute
    /*2)setAttribute
    /*3)removeAttribute
    /*3)hasAttribute*/
    console.log(head.hasAttribute('malik'))
    console.log(head.setAttribute('murfad','ahmed'))
    console.log(head.removeAttribute('malik'))
    console.log(head.hasAttribute('murfad'))
    console.log(head.hasAttribute('malik'))
    console.log(head.getAttribute('murfad'))
    console.log(head.attributes)


    /* creating updateing removing & replacing elements*/
    // const creatElement = document.createElement('h1')
    // const creatElementText = document.createTextNode('Malik Murfad Ahmed')
    // creatElement.appendChild(creatElementText)
    // body.append(creatElement)



    const newheading = document.createElement('h1')
    const newText = document.createTextNode("YE DOM SE MANUPULATED HIA")
     
    newheading.appendChild(newText)
    // body.append(newheading)
    // body.prepend(newheading)
    // body.before(newheading)
    // body.after(newheading)
    // head.replaceWith(heading)
    // heading.remove()
    // head.remove()


    // Events**********
    function func(){
        alert('murfad is a boy')
    }
    btn.onclick = func