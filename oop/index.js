// object oriented programming

class person {
    // properties
    name = ""
    address = ""
    phone = ""

    constructor(name, phone, address){
        console.log("constructor got called automatically !")

        this.name = name
        this.phone = phone
        this.address = address

    }

    // methods
    walk() {
        let name = "this some name"
        console.log(`person ${this.name} is walking !`)
    }

    talk() {
        console.log(`person ${this.name} is talking !`)
    }

    displayInfo() {
        console.log("person name is : ", this.name)
        console.log("person phone is : ", this.phone)
        console.log("person address is : ", this.address)
    }
}

let person1 = new person("amey", 9766696550 , "nagpur")

let person2 = new person("om", 8857032120, "pune")

let person3 = new person("yash", 8237895726, "mumbai")

// person1.name = "Amey"
// person1.address = "nagpur"
// person1.phone = 9766696550

// person2.name = "Om"
// person2.address = "Pune"
// person2.phone = 8857032120

person1.walk()
person1.displayInfo()

person2.walk()
person2.displayInfo()

person3.walk()
person3.displayInfo()