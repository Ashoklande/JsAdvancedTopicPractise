

function memosquare(){
    const cache = {};

    return function (num){
        
        if (cache[num]){
            console.log("from cache");
            return cache[num];
        }
            console.log("calculating the result");
            let result = num * num;
            cache[num] = result;

            return result;
        
    }

    


}


console.log(memosquare()(6));
console.log(memosquare()(6));