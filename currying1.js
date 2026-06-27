
function sum(a,b){
    if(b !== "undefined"){
        return a+b;
    } 

    if(b === "undefined"){
        return a;
    }
    return function(b){
        return a+b;
    }
}
console.log(sum(5,6));
console.log(sum(5)(6)(7)());