// exception handling | try catch finally 

// error & exception

// try {

// code in which an exception might apear

// } catch (err) {

// solution to that code/ handling

// } finally {

// end of block  

// }

// try {

//     console.log(data)

// } catch (err) {
//     console.log("some error occured !")
//     console.log(err)
// }

// console.log(123)


// custom exception

try {

    let n = Number(window.prompt("enter N"))
    let d = Number(window.prompt("enter D"))

    if (d == 0) throw ("d is 0 answer will be Infinity !")

    let division = n / d

    console.log(division)

} catch (err) {
    console.log("dividing by 0 not possible !")
    console.log(err)
}