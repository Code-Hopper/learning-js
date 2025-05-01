// regex (regular expersion | is a pattern)

// litral

// let pattern1 = /Hello/

// console.log(pattern1.test("Hello"))

// let string = "hello this is a string hello"

// console.log(string.match(pattern1))

// ^ - starting of string 
// $ - ending of string

let pattern = /^(?!\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,10}$/

let string = "Hello1234asdasd"

console.log(pattern.test(string))


// /(?=.*[a-z])/.test("hello") - > true
// /(?=.*[a-z])/.test("HELLO") - > fasle
// /(?=.*[a-z])/.test("Hello") - > true
// /(?=.*[a-z])/.test("HELLo") - > true

// /(?=.*[a-z])(?=.*[A-Z])/.test("HELLo") - > true
// /(?=.*[a-z])(?=.*[A-Z])/.test("hello") - > false
// /(?=.*[a-z])(?=.*[A-Z])/.test("HELLO") - > false

// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("hello") - > false
// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("Hello") - > false
// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("HELLO") - > false
// (?=.*[a-z])(?=.*[A-Z](?=.*[0-9])).test("Hello123") - > false

// (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}.test("hello123") - > false
// (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}.test("Hello123") - > false
// (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}.test("Hello1234") - > true(min 8 chars)
// ^(?!\d) there should be no number/s at the starting of a string