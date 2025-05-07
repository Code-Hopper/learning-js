// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


// // let mo2 = []
// // let mo3 = []
// // let mo4 = []

// // let lostNumber = []

// // // numbers.forEach((number) => {
// // //     if (number % 2 == 0) {
// // //         mo2.push(number)
// // //     } else if (number % 3 == 0) {
// // //         mo3.push(number)
// // //     } else if (number % 4 == 9) {
// // //         mo4.push(number)
// // //     }
// // // })

// // mo2 = numbers.filter((number) => number % 2 == 0)
// // mo3 = numbers.filter((number) => number % 3 == 0)
// // mo4 = numbers.filter((number) => number % 4 == 0)


// // numbers.forEach((number) => {

// //     if ((number % 2 != 0) && (number % 3 != 0) && (number % 4 != 0)) {
// //         lostNumber.push(number)
// //     }

// // })

// // console.log(mo2)
// // console.log(mo3)
// // console.log(mo4)
// // console.log(lostNumber)

// // 2-D Array

// // let arr = [    
// //     [1,2,3],[4,5,6],[7,8,9]
// // ]

// // console.log(arr)

// // for(let x of arr){
// //     console.log(x)
// // }

// // console.log(arr[0][0])
// // console.log(arr[0][1])
// // console.log(arr[0][2])

// // console.log(arr[1][0])
// // console.log(arr[1][1])
// // console.log(arr[1][2])

// // console.log(arr[2][0])
// // console.log(arr[2][1])
// // console.log(arr[2][2])


// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *


// // for(let r = 0 ; r < 5 ; r++){
// //     for(let c = 0 ; c < 5 ; c++){
// //         console.log(" * ")
// //     }
// //     console.log("")
// // }

// // for(let i = 0 ; i < 1000;i++){
// //     console.log("hello")
// // }

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6,10,11,12],
//     [7, 8, 9]
// ]


// // for (let r = 0; r < 3; r++) {
// //     for (let c = 0; c < arr[r].length; c++) { 
// //         console.log(arr[r][c])
// //     }
// // }

// // for(let row of arr){
// //     for(let col of row){
// //         console.log(col)
// //     }
// // }

// arr.forEach((row)=>{
//     row.forEach((col)=>{
//         console.log(col)
//     })
// })

let cube = [
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    [  
        [10,11,12],
        [13,14,15],
        [16,17,18]
    ]
]

console.log(cube[0][0][0])