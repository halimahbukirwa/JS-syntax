class Human {
    constructor(){
        this.gender = "female";
    }
    printMyGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor(){
        super();
        this.name = "Halimah"
    }
    printMyName(){
        console.log(this.name)
    }
}

const person = newPerson();
person.printMyName();
person.printMyGender();