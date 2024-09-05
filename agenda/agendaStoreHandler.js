const fs = require('node:fs');
const path = require('node:path');

const jsonPath = path.join(__dirname, 'store.json');
const jsonString = fs.readFileSync(jsonPath, 'utf8');

exports.parsedData = JSON.parse(jsonString);