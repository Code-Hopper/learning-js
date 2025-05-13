// get elements by tagname
// []// html collection 
// get elements by classname
// []
// get element by id 
// single

// query selector
// single

// query selector all 
// [] node collection/list

// console.log(document)

// let elements = document.getElementsByTagName("h1")

// console.log(elements)

// elements[0].style.color = "red"
// elements[5].style.color = "green"

// let elements = document.getElementsByClassName("first")

// console.log(elements)

// let element = document.getElementById("i1")

// console.log(element)
// console.log(element.innerHTML)
// console.log(element.innerText)

// // element.innerText = "some new text data!"
// element.innerHTML = "<a href='https://www.google.com'>some new text data!</a>"

// console.log(element.innerHTML)

// let elements = document.querySelectorAll(" .second + h1 ")

// let element = document.querySelector(".first")

// console.log(elements)
// console.log(element)

let element = document.getElementById('i1')

// element.classList = element.classList + " first second third"

element.classList = element.classList + " first second third"

element.style.color = "blue"

console.log(element)