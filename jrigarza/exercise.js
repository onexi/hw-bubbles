var exercise = {};

// Code to retrieve all the HTML from http://student.mit.edu/catalog/index.cgi
var request = require('request');
var fs = require('fs');
var depromisify = require('depromisify').depromisify
var Minimize = require('minimize');
var cheerio = require('cheerio');
var fileNames;
  
//Function to get HTML from a provided url
var get = function(URL){

        return new Promise(function(resolve,reject) {

            function callback(error, response, body) {
                    if (!error) {
                            resolve( body);
                    }
                    else {
                            reject ( error);
                    }
                    return null;
            }
            request (URL, callback);
        });
};

//Function that returns an array of URLs from a provided HTML
var extractLinks = function(inputHTML){
    var expression = /HREF\s*=\s*[\"']?([^\"' >]+)[\"' >]/g; 
    var rawLinks = inputHTML.match(expression);
    rawLinks.shift();
    rawLinks.shift();
    var cleanLinks = rawLinks.map(function(element) {
        var clean = element.replace('HREF="','http://student.mit.edu/catalog/');
        clean = clean.replace('"','');
        return clean;
    });

    fileNames = rawLinks.map(function(element) {
        var clean = element.replace('HREF="','');
        clean = clean.replace('"','');
        return clean;
    }); 

    return cleanLinks;
};


//Function that returns promise that resolves to the HTML of the provided url
var getURLArray = function(homepage){

    return get(homepage).then(function(homepageHTML){

        var URLArray = extractLinks(homepageHTML);

        return URLArray;
    });

};


//Function that returns the full concatenated HTML of all the links in the course catalog
var getFullHTML = function(homepage){

    var URLArray = depromisify(getURLArray(homepage));

    var fullHTML = URLArray.reduce(function(fullString, element){
        var elementHTML = depromisify(get(element));
        return fullString += elementHTML;
    });

    return fullHTML;

};


exercise.one = function(homepage){

    get(homepage).then(function(homepageHTML){

        var URLArray = extractLinks(homepageHTML);

        console.log(URLArray);
    });

};


exercise.two = function(homepage){

    getURLArray(homepage).then(function(URLArray){

        URLArray.forEach(function(URL,index){

            //request(URL).pipe(fs.createWriteStream('./catalog/' + index + '.html'));
            request(URL).pipe(fs.createWriteStream('./catalog/' + fileNames[index]));
                        
        });

    });

};

exercise.three = function(homepage){
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


    var URLArray = depromisify(getURLArray(homepage));

    var fullHTML = URLArray.reduce(function(fullString, element){
        var elementHTML = depromisify(get(element));
        return fullString += elementHTML;
    });

    var myStream = fs.createWriteStream('./catalog/catalog.txt');

    myStream.write(fullHTML);
    myStream.end();

};



exercise.four = function(homepage){
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

    var rawHTML = getFullHTML(homepage);

    var scrubbedHTML = new Minimize().parse(rawHTML);

    return scrubbedHTML;
};

exercise.five = function(homepage){
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

    var scrubbedHTML = exercise.four(homepage);

    var $ = cheerio.load(scrubbedHTML);

    var coursesArray = [];

    $('h3').each(function(i,element){

        coursesArray.push($(element).text());

    });

    return coursesArray;

};

exercise.six = function(homepage){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return an array of course titles.
    //
    //  You can use the NPM package cheerio.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var coursesArray = exercise.five(homepage);

    var titlesArray = coursesArray.map(function(element){

        var title = element.split(' ');
        title.shift();
        title = title.join(' ');
        return title;

    });

    return titlesArray;

};

exercise.seven = function(homepage){
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

    var rawTitles = exercise.six(homepage);

    var cleanTitles = rawTitles.map(function(element){

        var words = ['of', 'the', 'in', 'on', 'at', 'to', 'a', 'and', 'for', 'with', 'I', 'II', '&'];
        var re = new RegExp('\\b(' + words.join('|') + ')\\b', 'g');
        var semiCleanTitle = (element || '').replace(re, '').replace(/[ ]{2,}/, ' ');
        var cleanTitle = semiCleanTitle.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
        return cleanTitle.replace(/\s{2,}/g," ");

    });

    return cleanTitles;

};

exercise.eight = function(homepage){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Make an array of words from the titles.
    //
    //  Return array of words.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var cleanTitles = exercise.seven(homepage);

    var wordsString = cleanTitles.reduce(function(fullString, element){
        
        return fullString += ' ' + element;

    });

    var words = wordsString.toLowerCase().match(/([a-z]+)/g);

    return words;
};

exercise.nine = function(homepage){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Count the word frequency.
    //
    //  Return a word count array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var words = exercise.eight(homepage);

    var wordsMap = {};
  
    words.forEach(function(word){
        if (wordsMap.hasOwnProperty(word)){
            wordsMap[word]++;
        } else {
            wordsMap[word] = 1;
        }
    });

    return wordsMap;

};


module.exports = exercise;
