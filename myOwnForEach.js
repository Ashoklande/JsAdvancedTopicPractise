//Array

Array.prototype.myForeach = function (callback) {
    if(typeof callback !== "function"){
        throw new Error("callback must be a function")
    }
  for (let i = 0; i < this.length; i++) {
    callback(this[i],i,this);
  }
};

const numbers = [1, 3, 5];

numbers.myForeach(ca);
