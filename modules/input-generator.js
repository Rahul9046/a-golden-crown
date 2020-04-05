
const charCounter = require('./char-counter'),
 decoder = require('./decoder');
/**
 * Function that takes in the file input and returns the parsed input object
 * @param {String} rawInput the content of the file
 * @param {Object} kingdomMetaData meta data of all the kingdoms 
 * @returns {Object} parsed input object
 */
const inputGenerator = function(rawInput, kingdomMetaData){
    return rawInput.split('\n').map(inputLine=>{
        let message = inputLine.split(' '),
        kingdomNameInUpperCase = message[0].toUpperCase();
        return{
            kingdom: kingdomNameInUpperCase,
            letter_count: charCounter(message[1].split(''), decoder, kingdomMetaData[kingdomNameInUpperCase].offset)
        }
    })
}

module.exports = inputGenerator;