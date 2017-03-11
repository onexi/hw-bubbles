var exercise = {};

// Code to retrieve all the HTML from http://student.mit.edu/catalog/index.cgi
var request = require('request');
var fs = require('fs');

var get = function(url){

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
            request (url, callback);
        });
};


exercise.one = function(url){

    get(url).then(function(msg){
        var data = msg;
        var expression = /HREF\s*=\s*[\"']?([^\"' >]+)[\"' >]/g; 
        var matches = data.match(expression);
        var matchesClean = matches.map(function(element) {
            var clean = element.replace('HREF="','http://student.mit.edu/catalog/');
            clean = clean.replace('"','');
            return clean;
        });
        
        return matchesClean;
    });


};

exercise.two = function(url){
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

    get(url).then(
        function(msg){
            var data = msg;
            var expression = /HREF\s*=\s*[\"']?([^\"' >]+)[\"' >]/g; 
            var matches = data.match(expression);
            var matchesClean = matches.map(function(element) {
                var clean = element.replace('HREF="','http://student.mit.edu/catalog/');
                clean = clean.replace('"','');
                return clean;
            });
            
            return matchesClean;
    }).then(
        function(urlArray){

            urlArray.map(function(url,index){
                 request({uri: url})
                .pipe(fs.createWriteStream('C:/Users/JRI/Documents/2017_spring/1.001/PS4/hw-bubbles/jrigarza/catalog/'+ index + '.html'))
                .on('close', function() {
                    //callback();
                    });
            })
           
        });

};

exercise.three = function(url){
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

    var htmlString = '';

    get(url).then(
            function(msg){
                var data = msg;
                var expression = /HREF\s*=\s*[\"']?([^\"' >]+)[\"' >]/g; 
                var matches = data.match(expression);
                var matchesClean = matches.map(function(element) {
                    var clean = element.replace('HREF="','http://student.mit.edu/catalog/');
                    clean = clean.replace('"','');
                    return clean;
                });
                return matchesClean;
        }).then(
            function(urlArray){
                    var fullHTML = urlArray.reduce(function(htmlString, url){
                    return htmlString + request({uri: url});
                });
                console.log(fullHTML);
                return fullHTML;

            }).then(function(fullHTML){
                    var writeableStream = fs.createWriteStream('C:/Users/JRI/Documents/2017_spring/1.001/PS4/hw-bubbles/jrigarza/catalog/compendium.html');
                    writeableStream.write(fullHTML);
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
