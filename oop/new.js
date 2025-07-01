class animal {
    name = ""
    constructor(name) {
        this.name = name
    }
    isAlive() {
        console.log(`${this.name} is alive !`)
    }
}

class bird extends animal {
    wings = 2
    canFly = true

    constructor(name) {
        super(name)
    }

    fly() {
        console.log(`${this.name} is flying !`)
    }
}

class dog extends animal {
    legs = 4
    canRun = true
    constructor(name, legs, canRun) {
        super(name)
        this.legs = legs
        this.canRun = canRun
    }
    run() {
        console.log("dog is running !")
    }
}

let bird1 = new bird("sparrow")

console.log(bird1.name)
console.log(bird1.wings)
console.log("can bird fly : ", bird1.canFly)
bird1.isAlive()
bird1.fly()

let dog1 = new dog("tommy", 2, true)

console.log(dog1.name)
console.log(dog1.legs)
console.log("can dog run : ", dog1.canRun)
dog1.isAlive()
dog1.run()