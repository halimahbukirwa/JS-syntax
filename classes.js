class Human {
        gender = "female";
    }
    printMyGender = () =>{
        console.log(this.gender);
    }


class Person extends Human{
        name = "Halimah"
    }
    printMyName = () => {
        console.log(this.name)
    }


const person = newPerson();
person.printMyName();
person.printMyGender();