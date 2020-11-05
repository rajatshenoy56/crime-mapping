const csvToJson = require('convert-csv-to-json');

const input = 'E:/Chicago_Crimes_2012_to_2017.csv';
const output= 'E:/ChiCRIMES.json';

csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(input,output);