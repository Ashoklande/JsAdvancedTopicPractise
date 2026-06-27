//it returns function for later execution

const student = {
    name : "Ashoka"
}

function greet(city){
    console.log(`Hi i am ${this.name} from ${city}`);
}

const printname = greet.bind(student);
printname("pune");