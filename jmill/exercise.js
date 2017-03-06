var exercise = {};
var shell = require('shelljs');

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

    //JM added:

    startPages = [
        "m1",
        "m2",
        "m3",
        "m4",
        "m5",
        "m6",
        "m7",
        "m8",
        "m9",
        "m10",
        "m11",
        "m12",
        "m14",
        "m15",
        "m16",
        "m17",
        "m18",
        "m20",
        "m21",
        "m21A",
        "mCMS",
        "m21W",
        "m21G",
        "m21H",
        "m21L",
        "M21M",
        "mWGS",
        "m22",
        "m24",
        "mCC",
        "mCSB",
        "mEC",
        "mEM",
        "mES",
        "mHST",
        "mIDS",
        "mMAS",
        "mSCM",
        "mAS",
        "mMS",
        "mNS",
        "mSTS",
        "mSWE",
        "mSP"
    ];

    // make array full of permedPages (some pages will be invalid)
    var permedPages = [];
    startPages.forEach(function(element) {
        exercise.suffixMaker(element).forEach(function(permedPage){
            permedPages.push(permedPage);
        });
    });

    // make full URL
    var fullURLs = [];
    var urlBase = 'http://student.mit.edu/catalog/';
    var urlEnding = '.html';

    permedPages.forEach(function(element) {    
        fullURLs.push(urlBase + element + urlEnding);
    });

    return fullURLs;
};


exercise.suffixMaker = function(base){
    //JM added:
    permutations = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i'
        ];
    builtPageNames = [];
    permutations.forEach(function(element) {
        var pageName = base + element; 
        builtPageNames.push(pageName);
    });
    return builtPageNames;
};


exercise.returnAfterSlash = function(url){
    // JM added
    // return just stuff coming after the last '/'
    //  given:  http://student.mit.edu/catalog/m12i.html,
    //  return: m12i.html
    return url.slice(url.lastIndexOf('/'), url.length);
};

exercise.downloadURL = function(url){
    // JM added
    // fetch each URL and save the page locally
    saveDir = "catalog"
    destFile = exercise.returnAfterSlash(url)
    curlURL = "curl " + url + " -o " + saveDir + destFile;

    var isValid = function(urlToCheck){
        //see if server returns a 404 error
        if (shell.exec('curl -i -s ' + urlToCheck).stdout.indexOf("404 Not Found") == '-1'){
            return true;
        } else {return false};
    };

    //see if page gives 404
    if (isValid(url)){
        shell.exec(curlURL);
    };
    
    //shell.exec('curl -i -s http://student.mit.edu/catalog/m12i.html').stdout.indexOf("404 Not Found");
    return;
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

    // JM added
    var fullURLs = exercise.one();
    fullURLs.forEach(exercise.downloadURL);
    return fullURLs;
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
