var exercise = {};
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var url = 'http://student.mit.edu/catalog/index.cgi';
require('shelljs/global');
exec('curl http://student.mit.edu/catalog/index.cgi > catalogIndex.txt');

exercise.one = function(){
    var body = fs.readFileSync('catalogIndex.txt','utf8');
    var $ = cheerio.load(body);
    var urls = [];
    $('UL A').each(function(i,element){
        var href = $(element).attr('href');
        var split = href.split('.');
        var substr = split[0].substr(0,split[0].length - 1);
        var a = substr + 'a';
        var b = substr + 'b';
        var c = substr + 'c';
        var d = substr + 'd';
        var links = [a,b,c,d].map(function(element){
            return 'http://student.mit.edu/catalog/' + element +'.html';
        });
        links.forEach(function(element){
            urls.push(element);
        });
    });
    return urls;
};

exercise.two = function(){
    var urls = exercise.one();
    urls.forEach(function(element,index) {
        var split = element.split('/'); // [...., m1a.html]
        var name = split[split.length - 1];
        var command = 'curl ' + element + ' > catalog/'+ name;
        // console.log(command);
        exec(command);
    });
};

exercise.three = function(){
    var files = fs.readdirSync('./catalog');
    var content = '';
    files.forEach(function(name) {
        if (name != 'catalog.txt') {
            var body = fs.readFileSync('./catalog/'+name, 'utf8');
            content += body;
        }
    });
    fs.writeFileSync('./catalog/catalog.txt', content);
};

exercise.four = function(){
    var file = 'catalog.txt';
    var content = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    content = content.replace(/\n/g, ''); 
    content = content.replace(/\r/g, '');
    fs.writeFileSync('./catalog/catalog.txt', content);     
    // var template = '{{catalog.txt}}.{{md5}}.{{ext}}';
    // var content = null;
    // var result = minifier.generateOutputName(file,{template:template,glob:true});
    // fs.writeFileSync('./catalog/scrubbed.txt',result);
    // var put = require('util').puts;
    // var text = fs.readFileSync('./catalog/catalog.txt', encoding = 'utf8');
    // var short = htmlminify(text);
    // fs.writeFileSync('./catalog/scrubbed.txt',short);
};

exercise.five = function(){
    var text = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    $ = cheerio.load(text);
    var titles = [];
    $('h3').each(function(i, element){
        var title = $(element).text();
        if(title != '404 Not Found' && title != ''){
            titles.push(title);
        };
    });
    console.log(titles);
    return titles;
};

exercise.six = function(){
    var titles = exercise.five();
    return titles;
};

exercise.seven = function(){
    var titles = exercise.five();
    var commonWords = ['and','a','of','the','an','in','to','into'];
    titles = titles.map(function(title){
        var splitArray = title.split(" ");
        var filteredArray = splitArray.filter(function(word){
            if(commonWords.includes(word)) return false;
            else return true;
        });
        return filteredArray;
    });
    // console.log(titles);
    return titles;
};

exercise.eight = function(){
    var titles = exercise.seven();
    var i=0;
    var j=1;
    var words=[];
    for (i=0; i< titles.length; i++){
        for (j=1;j<titles[i].length;j++){
            words.push(titles[i][j]);
        } 
    }
    return words;
};

exercise.nine = function(){
    var words = exercise.eight();
    var frequency = words.reduce(function(previous,current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] = 1;
        }
        return previous;
    },{});
    fs.writeFileSync('./catalog/frequency_data.js',JSON.stringify(frequency));
    return frequency;
};

module.exports = exercise;
