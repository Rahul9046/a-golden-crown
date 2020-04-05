const kingdomData = require('../kingdom-data');
const charCounter = require('./char-counter');

const kingdomMetaDataGenerator = function(){
    let returnObj = {};
    for (let i = 0; i < kingdomData.length; i++){
        let charsInEmblem = kingdomData[i].emblem.split('');
        returnObj[kingdomData[i].kingdom] = {
            offset: charsInEmblem.length,
            letter_count: charCounter(charsInEmblem)
        }
    }
    return returnObj;
}

module.exports = kingdomMetaDataGenerator;