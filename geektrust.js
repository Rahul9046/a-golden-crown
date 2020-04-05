
const fileName = process.argv[2];
const readFile = require('./modules/file-reader');
const inputGenerator = require('./modules/input-generator');
const kingdomMetaDataGenerator = require('./modules/kingdom-meta-data');

// read data from the input file
let data = readFile(fileName).toString();
// generate the kingdoms meta data
let kingdomMetaData = kingdomMetaDataGenerator();
// parse the input
let parsedInput = inputGenerator(data, kingdomMetaData);
