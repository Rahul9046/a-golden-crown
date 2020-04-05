const fs = require('fs');

const readFile = function(fileName){
    var data = fs.readFileSync(fileName, 'utf8');
    return data;
}

module.exports = readFile;
