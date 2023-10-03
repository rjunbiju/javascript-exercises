const sumAll = function(num1, num2) {
    let sum = 0;
    let begin = num1;
    let end = num2;
if(num1 > num2){
    begin = num2
    end = num1;
}
 if((typeof num1 != "number" || typeof num2 != "number") || (num1 < 0 || num2 < 0))
    return "ERROR";
else{
for(let i = begin; i<= end; i++){
 sum += i;
}
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
