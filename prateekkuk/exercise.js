var exercise = {};
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var rp = require('request-promise');
var minify = require('html-minifier').minify;
var path = require('path'); 
var fs = require('fs');

var urls = [];

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

    ///////// trying to do it without relying on local file changes ///////

    //1. using promises
    // var flag = 0;
    // var indexPageUrls = [];
    // var indexPageRequestOptions = {
    //     uri: 'http://student.mit.edu/catalog/index.cgi',
    //     transform: function(body){
    //         return cheerio.load(body);
    //     },
    //     async:false
    // };

    // rp(indexPageRequestOptions)
    //     .then(function($){
    //         links = $('a');

    //         $(links).each(function(index, link){
    //             if($(link).attr('href').toString().startsWith("m")){
    //                 urls.push($(link).attr('href').toString());
    //             }
    //         });
    //         flag = 1;
    //         sendData();
    //     })
    //     .catch(function(){
    //         console.log("request-promise failed");
    //     });
    
    // var sendData = function(){
    //     urls.pop();
    //     urls.forEach((url, index,urls) => {
    //         urls[index] = "http://student.mit.edu/catalog/" + url;
    //     });
    //     console.log(flag);
    //     return urls;
    // }
    // console.log(flag);  
    // if(flag == 1){
    //     console.log(flag);
    //     var returnUrls = sendData();
    //      console.log(returnUrls);
    // }
    //runs before sendData has anything to return, how do get the value
    //out of SendData() or ensure I call it when it has the value?


    
    ///2. using normal request
    // var indexPageRequest = request('http://student.mit.edu/catalog/index.cgi',function(error, response, body){
    //     console.log('error:', error);
    //     console.log('statusCode:', response.statuscode);
    //     $ = cheerio.load(body);
    //     links = $('a');
    //     $(links).each(function(index, link){
    //         if($(link).attr('href').toString().startsWith("m")){
    //             urls.push($(link).attr('href').toString());
    //         }
    //       });
    // },function(){passingURLS();});
     
    // var passingURLS = function(){
    //     console.log(urls);
    // }

    // console.log(urls); //prints undefined - how do I know when a request is complete so I can do this

    ////3. using local files and after removing the copy right symbol //////
    //var indexPageRequest = request('http://student.mit.edu/catalog/index.cgi').pipe(fs.createWriteStream('index.html'));
    // var indexPageData = fs.readFileSync(path.join(__dirname,'index-clean.html') ,{encoding: 'utf-8'});
    // var $ = cheerio.load(indexPageData);
    // links = $('a');
    // $(links).each(function(index, link){
    //     if($(link).attr('href').toString().startsWith("m")){
    //         urls.push($(link).attr('href').toString());
    //     }
    // });

    // urls.pop();
    // urls.forEach((url, index,urls) => {
    //     urls[index] = "http://student.mit.edu/catalog/" + url;
    // });

    // return urls;

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

    // urls.forEach((url, index, urls) => {
    //     var firstcut = "http://student.mit.edu/catalog/".length;
    //     var name = url.slice(firstcut,url.length);
    //     console.log(name + ":" + url);
    //     var eachPageRequest = request(url).pipe(fs.createWriteStream('catalog/'+ name));
    // });

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

    //create empty file 
    //read each file in directory and append to file
    fs.writeFileSync('catalog/catalog.txt',"");

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
