var request = require('sync-request');
var minify = require('html-minifer').minify;
var cheerio = require('cheerio');
var fs = require('fs');


var exercise = {};

exercise.one = function(){
    console.log('|question 1|');
    
    var urls = [];
    urls.push('http://student.mit.edu/catalog/m1a.htm');
    urls.push('http://student.mit.edu/catalog/m2a.htm');
    urls.push('http://student.mit.edu/catalog/m3a.htm');
    urls.push('http://student.mit.edu/catalog/m4a.htm');
    urls.push('http://student.mit.edu/catalog/m5a.htm');
    urls.push('http://student.mit.edu/catalog/m6a.htm');
    urls.push('http://student.mit.edu/catalog/m7a.htm');
    urls.push('http://student.mit.edu/catalog/m8a.htm');
    urls.push('http://student.mit.edu/catalog/m9a.htm');
    urls.push('http://student.mit.edu/catalog/m10a.htm');
    urls.push('http://student.mit.edu/catalog/m11a.htm');
    urls.push('http://student.mit.edu/catalog/m12a.htm');
    urls.push('http://student.mit.edu/catalog/m14a.htm');
    urls.push('http://student.mit.edu/catalog/m15a.htm');
    urls.push('http://student.mit.edu/catalog/m16a.htm');
    urls.push('http://student.mit.edu/catalog/m17a.htm');
    urls.push('http://student.mit.edu/catalog/m18a.htm');
    urls.push('http://student.mit.edu/catalog/m20a.htm');
    urls.push('http://student.mit.edu/catalog/m22a.htm');
    urls.push('http://student.mit.edu/catalog/m24a.htm');
    return urls;
};

exercise.two = function(){
    console.log('|question 2|');

    var urls = excercise.one();
    urls.forEach(function(url,index){
        var res = request('GET', url);
        var filename = './catalog/' + index + 'html';
        fs.writeFileSync(filename, res.getBody().toString());
    });
};


exercise.three = function(){
    console.log('|question 3|');

    var files = [];
    for (var i = 0; i < 46; i++) {
        files.push('./catalog/' + i + 'html');
    }

    files.forEach(function(file,index){
        var data = fs.readFileSync(file);
        console.log('adding' + file + 'to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt', data);
    });

};

exercise.four = function(){
    console.log('|question 4|');

    var data = fs.readFileSync('./catalog/catalog.txt');

    var scrubbed = minify(data.toString(), {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
    });

    var clean = scrubbed.replace(/'/g, '');
    fs.writerFileSync('./catalog/clean.txt', clean);
};

exercise.five = function(){
    console.log('|question 5|');

    var data = fs.readFileSynce('.catalog/clean.txt');

    var $ = cheerio.loud(data);

    var courses = [];
    $('h3').each(function(i,element){
        courses.push($(element).text());
    });
    return courses;
};

exercise.six = function(){
    console.log('|question 6|');

    var data = fs.readFileSynce('.catalog/clean.txt');

    var $ = cheerio.loud(data);

    var titles = [];
    $('h3').each(function(i,element){
        titles.push($(element).text());
    });
    return titles;
};

exercise.seven = function(){
    console.log('|question 7|');

    var titles = exercise.six();
    var words = titles.map(function(title) {
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    return words;
};

exercise.eight = function(){
    console.log('|question 8|');
    
    var words = exercise.seven();
    var wordsFlat = words.reduce(function(previous, current){
        return previous.concat(current);
    },[]);
    return wordsFlat;
};

exercise.nine = function(){
    console.log('|question 9|');

    var scores = wordsFlat.reduce(function(previous,current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] = 1;
        }
        return previous;
    },{});

    console.log(scores);
    return scores;
};


module.exports = exercise;
