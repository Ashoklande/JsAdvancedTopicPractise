//we pass array as a argument to apply method 


const student = {
    name : "Ashoka"
}

function greet (city,state){
    console.log(`Hi My name is ${this.name} from ${city} ${state}`);
    
}


greet.apply(student ,["pune","India"]);