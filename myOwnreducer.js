//this myreducer is copy of original reducer method;

Array.prototype.myreducer = function(callback,initial = 0){
    let result = initial;
    for(let i = 0; i<this.length;i++){
       result = callback(this[i] , result );
    }
    return result;
}

const numbers = [3,5,6];

 const result = numbers.myreducer((current , acc ) => {
   return acc += current;
},0);

console.log(result);