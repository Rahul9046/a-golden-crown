/**
 * Function that counts and returns the number of occurances of all the characters in an array
 * @param {Array} charArr array of chartacters
 * @param {Function} decoder the decoder function
 * @param {Number} offset offset of char code. will be used in decoding
 * @return {Object} the number of occurances of each character
 */
const charCounter = function(charArr, decoder, offset){
    let returnObj = {},
    uppercaseChar;
    for (let i = 0; i < charArr.length; i++){
        uppercaseChar = charArr[i].toUpperCase();
        //  is decoder function is passed then decode the character and then store
        if (decoder){
            uppercaseChar = decoder(uppercaseChar, offset);
        }
        if (returnObj.hasOwnProperty(uppercaseChar)){
            returnObj[uppercaseChar]++;
        } else{
            returnObj[uppercaseChar] = 1;
        }
    }
    return returnObj;
}

module.exports = charCounter;