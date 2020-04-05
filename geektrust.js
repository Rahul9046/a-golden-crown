
const fileName = process.argv[2];
const readFile = require('./modules/file-reader.js');


var data = readFile(fileName).toString();