var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var shell = require('shelljs');
var htmlMinifier = require('html-minifier');
var exercise = {};


exercise.one = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return the address of all the html pages in
    //  the MIT course catalog - string array.
    //  For example, the first page for Course 1 is:
    //  http://student.mit.edu/catalog/m1a.html
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var body = fs.readFileSync('./catalogFile.txt', 'UTF8');

    var $ = cheerio.load(body);
    var allPages = [];
    $('UL A').each(function(i, element){
        var href = $(element).attr('href');
        var splitted = href.split(".");
        
        var a = splitted[0].substring(0, splitted[0].length - 1) + 'a' + '.html';
        var b = splitted[0].substring(0, splitted[0].length - 1) + 'b' + '.html';
        var c = splitted[0].substring(0, splitted[0].length - 1) + 'c' + '.html';
        var d = splitted[0].substring(0, splitted[0].length - 1) + 'd' + '.html';

        allPages.push(a);
        allPages.push(b);
        allPages.push(c);
        allPages.push(d);
    });    

    allPages = allPages.map(function(obj, index) {
        return 'http://student.mit.edu/catalog/'+obj;
    });

    // console.log(allPages);

    // body = fs.readFileSync('./catalogm21d.txt', 'UTF8');
    // $ = cheerio.load(body);
    // if ($('title').text() == '404 Not Found') {
    //     console.log("DO NOT PROCESS");
    // }
    // else {

    // }

    return allPages;

};

exercise.two = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Download every course catalog page.
    //
    //  You can use the NPM package "request".
    //  Or curl with the NPM package shelljs.
    //
    //  Save every page to "your_folder/catalog"
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var urls = exercise.one();

    urls.forEach(function(url, index) {
        var split = url.split('/'); // [..., m1a.html]
        var name = split[split.length - 1];
        var filename = 'catalog/'+name;
        var command = 'curl ' + url + ' > ' + filename;
        //shell.exec(command);
    });

    return urls;

};

exercise.three = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Combine all files into one,
    //  save to "your_folder/catalog/catalog.txt"
    //
    //  You can use the file system API,
    //  https://nodejs.org/api/fs.html
    //
    //  See homework guide document for more info.
    // -----------------------------------------------


    var urls = exercise.one();

    var str = ''

    urls.forEach(function(url, index) {

        var split = url.split('/'); // [..., m1a.html]
        var name = split[split.length - 1];

        body = fs.readFileSync('catalog/'+name, 'UTF8');
        $ = cheerio.load(body);
        if ($('title').text() == '404 Not Found') {
        }
        else {
            str += body;
        }
    });

    fs.writeFileSync('catalog/catalog.txt', str);
};

exercise.four = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Remove line breaks and whitespaces
    //  from the file. Return a string of
    //  scrubbed HTML. In other words, HTML without
    //  line breaks or whitespaces.
    //
    //  You can use the NPM package "html-minifier".
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var catalog = fs.readFileSync('catalog/catalog.txt', 'utf8')


    var minifiedHtml = htmlMinifier.minify(catalog, { //figure out why terminal says minify is not a function
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true 
    });
    fs.writeFileSync('catalog/catalog.txt', minifiedHtml);
};

exercise.five = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Load your scrubbed HTML into the DOM.
    //  Use the DOM structure to get all the courses.
    //
    //  Return an array of courses.
    //
    //  You can use the NPM package "cheerio".
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    
    var catalog = fs.readFileSync('./catalog/catalog.txt', 'UTF8');
    var $ = cheerio.load(catalog);
    var courses = [];
    
    $('H3').each(function(i, element){
        
        var course = $(element).text()
        courses.push(course);
    })
    //console.log(courses);
return courses;

};

exercise.six = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return an array of course titles.
    //
    //  You can use the NPM package cheerio.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    var courses = exercise.five();
    //var titles = courses.split(" ");

    var results = courses.map(function(courseRow, index) {
        var split = courseRow.split(' '); 
        var numbers = split[0];
        var name = courseRow.slice(numbers.length + 1);
        return name;
    })

return results;

};

exercise.seven = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Filter out punctuation, numbers,
    //  and common words like "and", "the", "a", etc.
    //
    //  Return clean array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
var courses = exercise.six();

    var results = courses.map(function(courseRow, index) {
        var name = courseRow.replace(/(^|\b)(\.|\,|and|a|the|\d+)($|\s)/g, '');

        return name;
    })

return results;

};

exercise.eight = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Make an array of words from the titles.
    //
    //  Return array of words.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var courses = exercise.seven();
    var results = courses.map(function(courseRow, index) {
        var split = courseRow.split(' '); 
        return split;
    })
    var allWords = [].concat.apply([], results);
        //console.log(allWords);
    return allWords;
};

exercise.nine = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Count the word frequency.
    //
    //  Return a word count array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

var allWordsArray = exercise.eight()

var wordCounts = {}

allWordsArray.forEach(function (word, index) {
  if (wordCounts[word]) {
    wordCounts[word]++
  } else {
    wordCounts[word] = 1
  }
})
console.log(wordCounts);
return wordCounts

};


module.exports = exercise;
