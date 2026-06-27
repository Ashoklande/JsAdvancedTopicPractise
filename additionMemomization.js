

function memo(fn){
    const cache = {};
    return function(...args){
      const key =  JSON.stringify(args);
        if(key in cache){
            console.log("from cache...");
            
            return cache[key];
        }
        console.log("calculating result ....");
        
        const result = fn(...args);
        cache[key] = result;
        return result;
    }

}

const add = (...args) =>{
    return args.reduce((acc,curr) =>acc += curr)
} 

const addmemo = memo(add);

console.log(addmemo(2,4,5));
console.log(addmemo(2,4,5));


