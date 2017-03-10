var exercise = {};
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var minify = require('html-minifier').minify;
//var concat = require('concat-files');
var shelljs = require('shelljs/global');
//var buildify = require('buildify');
//exec('curl http://student.mit.edu/catalog/index.cgi > linkage.txt');
var url = 'http://student.mit.edu/catalog/index.cgi';


exercise.one = function(){
     
    var data = fs.readFileSync('linkage.txt','UTF8');
    var $ = cheerio.load(data);
    var urls = [];
    
    $('UL A').each(function(i,element){
        var href = $(element).attr('href');

        var split = href.split('.'); // [m1a, html]
        var substr = split[0].substr(0, split[0].length - 1); // m1

        var a = substr + 'a';
        var b = substr + 'b';
        var c = substr + 'c';
        var d = substr + 'd';

        var links = [a, b, c, d].map(function(element) {
            return 'http://student.mit.edu/catalog/' + element + '.html';
        });

        links.forEach(function(element) {
            urls.push(element);
        });
    });
    return urls;
    
};

exercise.two = function(){

        urls = exercise.one();
        urls.forEach(function(element,i) {
        var filename = i + '.html';     
            exec('curl '+ element + ' > catalog/' + filename);
        });
};

exercise.three = function(){
//     var size = 176;
//     var array =[];
//     var i =0; 
//     for (i=0; i < size; i++) {
//         array.push( i + '.html');
//     }

//     var read = '';
//     var h =0; 
//     //var data = [];
//     //var $ = cheerio.load(data);
//     for (h=0; h < size; h++) {
//         data = fs.readFileSync(array[h], 'UTF8');
//         $ = cheerio.load(data);
//         if ($('title') != '404 Not Found'){
     
//         read += data;      
//     }

//     fs.writeFileSync('catalog.txt', read);     

// };
 
// exercise.three = function(){
//     var files = fs.readdirSync('./catalog');
//     var content = '';
//     files.forEach(function(name) {
//         if (name != 'catalog.txt') {
//             var body = fs.readFileSync('./catalog/'+name, 'utf8');
//             content += body;
//         }
//     });
//     fs.writeFileSync('./catalog/catalog.txt', content);
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
    fs.writeFileSync('./catalog/catalog1.txt', content); 

};

// exercise.four = function(){
      
//     var input = fs.readFileSync('catalog.txt', 'UTF8');

//     var min = minify(input);
//     //var min1 = min.replace(/\n|\r\n|\r/g,'');
//     //var min2 = min1.replace(/\s/g,''); 

//     console.log(min);
     
//     fs.writeFileSync('whiteremoved.txt', min);   
//     //exec('curl' + min2 +' > whiteremoved.txt');

//     // -----------------------------------------------
//     //   YOUR CODE
//     //
//     //  Remove line breaks and whitespaces
//     //  from the file. Return a string of
//     //  scrubbed HTML. In other words, HTML without
//     //  line breaks or whitespaces.
//     //
//     //  You can use the NPM package "html-minifier".
//     //
//     //  See homework guide document for more info.
//     // -----------------------------------------------
// };

exercise.five = function(){

    var data = fs.readFileSync('./catalog/catalog1.txt','UTF8');
    var $ = cheerio.load(data);
    var courses = [];
     
    $('h3').each(function(i,element){
        var title = $(element).text();
        if (title != '404 Not Found' && title != '' ){
            courses.push(title);
        }
    });
    return courses;
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
    var six = exercise.five();
    return six;

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
  
    var titles = exercise.five();

    
    var commonWords = ['and', 'in', 'a', 'an', 'the','of', 'for','to','into','some','any','1','2','3','4','5','6','7','8','9','0','-','--','!',':','?','[',']','{','}','&'];

    titles = titles.map(function(title) {

    var splitArray = title.split(" ");

    var filteredArray = splitArray.filter(function(word) {
        if (commonWords.includes(word)) return false;
        else return true;
    });

    return filteredArray;

});

    return titles;

};

exercise.eight = function(){
    
    var titles=exercise.seven();
    var i=0;
    var j=1;
    
    var words=[];
    for (i=0; i< titles.length; i++){
        for (j=1;j<titles[i].length;j++){
            words.push(titles[i][j]);
        } 
    }
    return words;
 
    // // var list=[];
    // // titles.forEach(function(element){ 

        
    // //     list.push(element);

    // // });
    // //var str = JSON.stringify(list);
    // console.log(titles.length);

    // titles.reduce(function(previous,current){
    //     return previous+current;
    // },{});
    // return titles;
       
        
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
    var list = exercise.eight();
    var count = list.reduce (function(previous, current){
        if (current in previous) {
            previous[current] +=1;
        }
        else{
            previous [current] =1;
        }
        return (previous);
    },{});
    
    fs.writeFileSync('wordcount.js', JSON.stringify(count));
    return count;  
   


    

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
