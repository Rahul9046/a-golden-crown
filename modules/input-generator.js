/**
 * Functio that counts and returns the number of occurances of all the characters in an array
 * @param {Array} charArr array of chartacters
 * @return {Object} the number of occurances of each character
 */
function charCounter(charArr){
    let returnObj = {},
    uppercaseChar;
    for (let i = 0; i < charArr.length; i++){
        uppercaseChar = charArr[i].toUpperCase();
        if (returnObj.hasOwnProperty(uppercaseChar)){
            returnObj[uppercaseChar]++;
        } else{
            returnObj[uppercaseChar] = 1;
        }
    }
    return returnObj;
}

/**
 * Function that takes in the file input and returns the parsed input object
 * @param {String} rawInput the content of the file
 * @returns {Object} parsed input object
 */
const inputGenerator = function(rawInput){
    return rawInput.split('\n').map(inputLine=>{
        let message = inputLine.split(' ');
        return{
            kingdom: message[0].toUpperCase(),
            letter_count: charCounter(message[1].split(''))
        }
    })
}

module.exports = inputGenerator;