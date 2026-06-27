//normal this example;

// const student = {
//     name : "Ashoka",
//     getname : function () {
//         console.log(this.name);
//     }
// }

// student.getname();

// by using the call method

const person = {
    name : "Ashok"
}

function greet (city){
    console.log(`Hi I am ${this.name} from ${city}`);
}

const person1 ={
    name : "Umesh"
}

greet.call(person,"Dharashiv");
greet.call(person1,"pune");