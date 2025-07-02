class class1 {
    #data = 10; // to declare private data

    increement() {
        return this.#data++
    }

    decreement() {
        return this.#data--
    }

    getData() {
        console.log(this.#data)
    }

}

let obj1 = new class1()

obj1.getData()
obj1.increement()
obj1.increement()
obj1.decreement()
obj1.getData()