var scores=require('./exercise.js');
var fs=require('fs');
// var dict=generateDict('earth');
// console.log(dict);
// var fs=require('fs');
// console.log(fs);
var data="var scores =" + JSON.stringify(scores);
fs.writeFileSync('scores.js', data);
console.log(data);