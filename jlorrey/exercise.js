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
    console.log("Exercise One");
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
   
    //for each elemetn in urls:
    //  fetch/request the url
    //  save resulting http to ./catalog

    //Note: I had to create the jlorrey/catalog directory before this would work (seems like it should be able to create the directory on its own)
    console.log("Exercise Two");
    var urls = exercise.one();
    urls.forEach(function(url, index) {
        var raw_response = request('GET', url);
        var filename = './catalog/'+index+'.html'; // ./catalog1.html, ./catalog2.html, ...
        fs.writeFileSync(filename, raw_response.getBody().toString()); //save the body of the html response (as a string) to the given filename
    });
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
    console.log("Exercise Three");
    var myFiles = [];
    for (var i=0; i<46; i++) { //get files 0 through 45
        myFiles.push('./catalog/'+i+'.html');
    };
    myFiles.forEach(function(file, index) {
        var file_data = fs.readFileSync(file);
        // console.log('Adding'+file+" to catalog.txt");
        fs.writeFileSync('./catalog/catalog.txt', file_data);
    });
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
    console.log("Exercise Four");
    var myData = fs.readFileSync('./catalog/catalog.txt');
    var scrubbed=minify(myData.toString(), {
        collapseWhitespace: true,
        minifyJS          : true,
        minifyCSS         : true
    });
    var cleaned = scrubbed.replace(/'/g, ''); //remove all (/g = global) single quotes you see
    fs.writeFileSync('./catalog/clean.txt', cleaned); //write the cleaned data to a clean.txt file
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
    console.log("Exercise Five");
    var myData = fs.readFileSync('./catalog/clean.txt');
    var $ = cheerio.load(myData);
   
    var courses = [];
    $('h3').each(function(i, element) { //get elements with the h3 tag
        courses.push($(element).text()); //and push them onto the courses array
    });
    
    // console.log("COURSES:", courses); //prints out all course names (eg. '1.232[J]: The Airline Industry')
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
    console.log("Exercise Six");
    var myData = fs.readFileSync('./catalog/clean.txt');
    var $ = cheerio.load(myData);
    var titles = [];
    $('h3').each(function(i, element) {
        titles.push($(element).text()); //title = text part of course name
    });
    // console.log(titles);
    return titles;

    //Isn't this the exact same thing as question 5?
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
    console.log("Exercise Seven");
    var titles = exercise.six();
    // gets word array from titles & filters out all non-letters (e.g. punctuation & numbers)
    var words = titles.map(function(title) {
        return title.toLowerCase().match(/([a-z]+)/g); // /g = global, /[a-z] = all letters a-z
    }); //map calls a function on every element of an existing array to create a new array 
    // console.log(words);
    return words;
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
    console.log("Exercise Eight");
    var words = exercise.seven();
    var wordsFlat = words.reduce(function(previous, current) {
        return previous.concat(current);
    }, []);
    return wordsFlat;
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
    console.log("Exercise Nine");
    var wordsFlat = exercise.eight();
    //use reduce to count word freq
    var scores = wordsFlat.reduce(function(previous, current){
        if (current != 'j') { //ignore J (turned lowercase) from joint courses
            if (current in previous) { //we've come across this word before (f>=1)
                previous[current] += 1;
            }
            else { //first instance of this word
                previous[current] = 1;
            }
        }
        return previous;
    }, {});
    console.log(scores);
    return scores;
};


module.exports = exercise;
