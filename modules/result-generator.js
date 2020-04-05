/**
 * Function that generates the result
 * @param {Array} input parsed input array
 * @param {Object} kingdoms kingdoms meta data
 * @returns {Array} kingdoms that the king won
 */
const resultGenerator = function(input, kingdoms){
    let kingdomsWon = [],
    inputLetterCountObj,
    kingDomLetterCountObj,
    charKeys,
    lostKingdom;
    for (let i = 0; i < input.length; i++){
        // if the provided kingdom in the input exists
        if (kingdoms[input[i].kingdom]) {
            lostKingdom = false;
            kingDomLetterCountObj = kingdoms[input[i].kingdom].letter_count;
            inputLetterCountObj = input[i].letter_count;
            // create an array of all the distinct letters in the emblem of the kingdom
            charKeys = Object.keys(kingDomLetterCountObj);
            for (let j = 0; j < charKeys.length; j++){
                // if the input does not contain the character, or if it contains but its count is less than what is present in the emblem,
                // then the king failed to win over the kingdom 
                if (!inputLetterCountObj[charKeys[i]] || (inputLetterCountObj[charKeys[i]] < kingDomLetterCountObj[charKeys[i]])){
                    lostKingdom = true;
                    break;
                }
            }
            !lostKingdom && kingdomsWon.push(input[i].kingdom);
        }
    }
    return kingdomsWon;
}
module.exports = resultGenerator;