Array.prototype.myfilter = function(callback){
    const result = [];
    for(let i =0 ;i<this.length;i++){    
        if(callback(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}


const numbers = [4,3,1,4,7];

const result = numbers.myfilter(num =>  num > 5);
console.log(result);
