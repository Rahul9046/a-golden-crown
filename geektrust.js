
const fileName = process.argv[2];
const readFile = require('./modules/file-reader');
const inputGenerator = require('./modules/input-generator');
const kingdomMetaDataGenerator = require('./modules/kingdom-meta-data');
const resultGenerator = require('./modules/result-generator');

// read data from the input file
let data = readFile(fileName).toString();
// generate the kingdoms meta data
let kingdomMetaData = kingdomMetaDataGenerator();
// parse the input
let parsedInput = inputGenerator(data, kingdomMetaData);
// generate the result
let result = resultGenerator(parsedInput, kingdomMetaData);
// King Shan becomes ruler only when he wins over atleast three kingdoms
if (result.length >= 3){
    console.log('SPACE ', result.join(' '));
} else {
    console.log('NONE');
}
