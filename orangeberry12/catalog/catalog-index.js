var fs = require('fs');
var exercise = require('../exercise.js');
var words = exercise.nine();

var data = "var scores = " + JSON.stringify(words);

console.log(data);

fs.writeFileSync('./catalog/words.js',data);