// let element = document.getElementById("element")

// element.addEventListener("event",(event)=>{

// })

// let element1 = document.getElementById("element1")
let element2 = document.getElementById("element2")
let element3 = document.getElementById("element3")
let element4 = document.getElementById("element4")
let element5 = document.getElementById("element5")

// console.log(element1)
// console.log(element2)
// console.log(element3)
// console.log(element4)
// console.log(element5)

// element1.addEventListener("click",(event)=>{
//     console.log(event)
//     console.log("element 1 got clicked !")
//     alert("clicked")
// })

let target = document.getElementById("block")

console.log(target.style.left)

let p = document.getElementById("p")
let n = document.getElementById("n")

let left = 0

let right = 0

function addLeft() {
    if (left < 100) {
        target.style.left = `${left + 10}%`
        left = left + 10
        console.log(left)
    }
}

function subLeft() {
    if (left > 0) {
        target.style.left = `${left - 10}%`
        left = left - 10
        console.log(left)
    }
}

p.addEventListener("click", () => {
    // alert("p clicked ")
    addLeft()

})

n.addEventListener("click", () => {
    // alert("n clicked ")
    subLeft()
})

document.addEventListener("keypress", (event) => {
    console.log(event)

    if (event.key == "+" && event.shiftKey == true) {
        addLeft()
    } else if (event.key == "-" && event.shiftKey == true) {
        subLeft()
    }

})

// element2.addEventListener("dblclick",()=>{
//     console.log('double click has occured !')
// })

// element2.addEventListener("contextmenu",()=>{
//     console.log('right click has occured !')
// })

// element2.addEventListener("mouseenter",()=>{
//     console.log("mouse entred in element")
// })

// element2.addEventListener("mouseleave",()=>{
//     console.log("mouse left the element")
// })

// document.querySelector("body").addEventListener("keypress", (e) => {
//     console.log(e.key)
// })