const d = require('./src/data/employees.json');
let output = '| # | PIS Number | Name | Designation | Password |\n';
output += '|---|-----------|------|-------------|----------|\n';
d.forEach((e, i) => {
  output += '| ' + (i+1) + ' | ' + e.pisNo + ' | ' + e.name + ' | ' + e.designation + ' | ' + e.password + ' |\n';
});
require('fs').writeFileSync('./credentials_output.txt', output);
console.log('Done! Written to credentials_output.txt');
