// let myPromise = new Promise((resolve, reject) => {
//     let data = false
//     setTimeout(() => {
//         if (data) {
//             resolve("my promise is resolved !")
//         } else {
//             reject("my promise is rejected !")
//         }
//     }, 9000)
// })

// console.log("p1")

// myPromise.then((reslove) => {
//     if (reslove) {
//         console.log("promise resolved ", reslove)
//     } else {
//         console.log("promise rejected ", reject)
//     }
// }).catch((err) => {
//     console.log("promise got us an error ", err)
// })

// console.log("p2")

async function doSomething() {
    let myPromise = new Promise((resolve, reject) => {
        let data = true
        setTimeout(() => {
            if (data) {
                resolve("my promise is resolved !")
            } else {
                reject("my promise is rejected !")
            }
        }, 2000)
    })

    return myPromise
}

async function callPromise() {
    try {

        let result = await doSomething()

        console.log("my promise is successfully resolved !")

        console.log(result)

    } catch (err) {
        console.log("some error occured : ", err)
    }
}

callPromise()