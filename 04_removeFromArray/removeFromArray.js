const removeFromArray = function(array, ...args) {
 for(let j =0; j< array.length; j++){
       for (let i=0; i<args.length; i++){
        if(array[j] === args[i]){
            array.splice(j,1);
            j = j-1;
        }
       }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
