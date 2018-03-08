var request = require('sync-request'); // for making sync. HTTP requests
var minify  = require('html-minifier').minify;//for cleaning up HTML
var cheerio = require('cheerio'); //to creamte DOM from html content
var fs      = require('fs'); //file system utility

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
    var urls = [];
    const course_nums = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,18,20,22];
    const a_only = [7, 20];
    const ab_only = [3,5,8,9,10,14,16,18];
    const abc_only = [1,2,6,11,12,15,22];
    const abcdefg_only = [4];
    
    const base_string = "http://student.mit.edu/catalog/m";
    course_nums.forEach(function(element) {
        if (a_only.includes(element) == true) {  // for all elts in a_only
            urls.push(base_string+String(element)+"a.html");
        }
        if (ab_only.includes(element) == true) { //for all elts in ab_only
            ['a','b'].forEach(function(letter){
                urls.push(base_string+String(element)+letter+".html");
            });
        }
        if (abc_only.includes(element) == true) { //for all elts in ab_only
            ['a','b','c'].forEach(function(letter){
                urls.push(base_string+String(element)+letter+".html");
            });
        }
        if (abcdefg_only.includes(element) == true) { //for all elts in abcdefg_only
            ['a','b','c','d','e','f','g'].forEach(function(letter){
                urls.push(base_string+String(element)+letter+".html");
            });
        }
    });
    // console.log("Exercise 1:")
    // console.log("urls:", urls);
    return urls;
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
};


module.exports = exercise;
