
const fileName = process.argv[2];
const readFile = require('./modules/file-reader');
const inputGenerator = require('./modules/input-generator');

// read data from the input file
let data = readFile(fileName).toString();
// parse the input
let parsedInput = inputGenerator(data);
