/**
 * Function that decodes the input character
 * @param {String} inputChar input character
 * @param {Number} offset the offset to deduct from the input char code
 */
const decoder = function(inputChar, offset){
    let charCodeOfInput = inputChar.charCodeAt(0);
    charCodeOfInput -= offset;
    if (charCodeOfInput < 65){ // 65 is the char code of A
        return 90 - (65 % charCodeOfInput); // 90 is the char code of Z
    }
    return charCodeOfInput;
}
module.exports = decoder;