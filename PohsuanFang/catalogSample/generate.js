var data=require('./run.js');
var fs = require('fs');
var score="var score =" + JSON.stringify(data);
fs.writeFileSync('score.js', score);
console.log(score);