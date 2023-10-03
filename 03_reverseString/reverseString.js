const reverseString = function(string) {
let unreversed = string;
let reversedstring = '';
let i = unreversed.length-1;
while (i >=0){
    reversedstring += unreversed.charAt(i);
    i--;
};
return reversedstring;
}
// Do not edit below this line
module.exports = reverseString;
