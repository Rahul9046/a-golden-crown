const fs = require('fs');

/**
 * Function to read the input file
 * @param {String} fileName the path of the file to read
 * @returns {String} the file content
 */
const readFile = function(fileName){
    let data = fs.readFileSync(fileName, 'utf8');
    return data;
}

module.exports = readFile;
