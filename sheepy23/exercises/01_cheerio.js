var cheerio = require('cheerio');
var data = '<h3> Title 1 </h3>space<h3>Title 2</h3>space<h3>Title 3</3>space<h3>Title 4</h3>';
var data = require('./mitcourse_one');

var $ = cheerio.load(data);

var matches = [];

$('h3').each(function(i,element){
    matches.push($(element).text());
})

console.log(matches);

