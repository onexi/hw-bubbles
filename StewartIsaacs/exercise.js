var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fs = require('fs');
var exercise = {};

exercise.experiment = function(){
    // Try to extract the urls from the homepage!
    var url = 'http://student.mit.edu/catalog/index.cgi';
    fileName = './experiment/mainpage.html';
    savePageHtml(url,fileName);


    // Save the homepage as an html
    function savePageHtml(url,filename){
        var res = request('GET',url);
        fs.writeFileSync(filename,res.getBody().toString());
    };
    
    // User cheerio to parse html for the urls
    function extractUrls (hmtlFileName){
        var data = fs.readFileSync(hmtlFileName);
        var $ = cheerio.load(data);
        var urls = [];
        $('A').each(function(i,element){
            urls.push($(element).attr());
        });
        return urls; 
    };

    var homeUrls = extractUrls('./experiment/mainpage.html');

      // Filter out the bogus ones that don't start with m
    function filterUrls (uglyUrls){
        var filteredUrls = uglyUrls.map(function(object){
            var stringified = object.href.toString();
            if (stringified.charAt(0) === 'm' && stringified.includes('.html')
            && stringified !== undefined){
                return object.href; 
            };
            
        });
        return filteredUrls;
    }
    var departmenturls = filterUrls(homeUrls);
    var finalUrls = [];
    departmenturls.forEach(function(element){
        urlname =  'http://student.mit.edu/catalog/' + element;
        if (urlname != 'http://student.mit.edu/catalog/undefined'){
             fileName = './experiment/' + element;
             savePageHtml(urlname,fileName);
             finalUrls.push(urlname);
        }
     }); 
    
    /*
    //Go into each department and grab the urls from that page
    var allurls = [];
    departmenturls.forEach(function(element){
       urlname =  'http://student.mit.edu/catalog/' + element;
       if (urlname != 'http://student.mit.edu/catalog/undefined'){
            fileName = './experiment/' + element;
            savePageHtml(urlname,fileName);
            var innerUrls = extractUrls(fileName);
            console.log(innerUrls)
       }
    }); 

*/
    return finalUrls;
   
};

exercise.one = function(){

    console.log('Running exercise 1');

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
    /*
    var urls = [];
urls.push('http://student.mit.edu/catalog/m1a.html');
urls.push('http://student.mit.edu/catalog/m1b.html');
urls.push('http://student.mit.edu/catalog/m1c.html');
urls.push('http://student.mit.edu/catalog/m2a.html');
urls.push('http://student.mit.edu/catalog/m2b.html');
urls.push('http://student.mit.edu/catalog/m2c.html');
urls.push('http://student.mit.edu/catalog/m3a.html');
urls.push('http://student.mit.edu/catalog/m3b.html');
urls.push('http://student.mit.edu/catalog/m4a.html');
urls.push('http://student.mit.edu/catalog/m4b.html');
urls.push('http://student.mit.edu/catalog/m4c.html');
urls.push('http://student.mit.edu/catalog/m4d.html');
urls.push('http://student.mit.edu/catalog/m4e.html');
urls.push('http://student.mit.edu/catalog/m4f.html');
urls.push('http://student.mit.edu/catalog/m4g.html');
urls.push('http://student.mit.edu/catalog/m5a.html');
urls.push('http://student.mit.edu/catalog/m5b.html');
urls.push('http://student.mit.edu/catalog/m6a.html');
urls.push('http://student.mit.edu/catalog/m6b.html');
urls.push('http://student.mit.edu/catalog/m6c.html');
urls.push('http://student.mit.edu/catalog/m7a.html');
urls.push('http://student.mit.edu/catalog/m8a.html');
urls.push('http://student.mit.edu/catalog/m8b.html');
urls.push('http://student.mit.edu/catalog/m9a.html');
urls.push('http://student.mit.edu/catalog/m9b.html');
urls.push('http://student.mit.edu/catalog/m10a.html');
urls.push('http://student.mit.edu/catalog/m10b.html');
urls.push('http://student.mit.edu/catalog/m11a.html');
urls.push('http://student.mit.edu/catalog/m11b.html');
urls.push('http://student.mit.edu/catalog/m11c.html');
urls.push('http://student.mit.edu/catalog/m12a.html');
urls.push('http://student.mit.edu/catalog/m12b.html');
urls.push('http://student.mit.edu/catalog/m12c.html');
urls.push('http://student.mit.edu/catalog/m14a.html');
urls.push('http://student.mit.edu/catalog/m14b.html');
urls.push('http://student.mit.edu/catalog/m15a.html');
urls.push('http://student.mit.edu/catalog/m15b.html');
urls.push('http://student.mit.edu/catalog/m15c.html');
urls.push('http://student.mit.edu/catalog/m16a.html');
urls.push('http://student.mit.edu/catalog/m16b.html');
urls.push('http://student.mit.edu/catalog/m18a.html');
urls.push('http://student.mit.edu/catalog/m18b.html');
urls.push('http://student.mit.edu/catalog/m20a.html');
urls.push('http://student.mit.edu/catalog/m22a.html');
urls.push('http://student.mit.edu/catalog/m22b.html');
urls.push('http://student.mit.edu/catalog/m22c.html');

//return urls; 
*/

return exercise.experiment(); 

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

    console.log('Running exercise 2');

    var urls = exercise.one();
    var numFiles = 0;

    urls.forEach((url,index)=>{
        var res = request('GET',url);
        var filename = './catalog/' + index + '.html';
        fs.writeFileSync(filename,res.getBody().toString());
        numFiles+=1;
    } );

    return numFiles;

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

    console.log('Running exercise 3');

    //Put files into one array
    var allFileNames = []
    var numFiles = exercise.two();

    for (var i =0; i<numFiles; i++){
        allFileNames.push('./catalog/' + i + '.html')
    }

    // Make a BLANK catalog.txt file to avoid massive files
    var data = '';
    fs.writeFileSync('./catalog/catalog.txt',data);

    allFileNames.forEach((file,index) => {
        var data = fs.readFileSync(file);
        //console.log('Adding ' + file + ' to the catalog string');
        fs.appendFileSync('./catalog/catalog.txt',data);
    })
    console.log('Done creating catalog.txt!');
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

    console.log('Running exercise 4');

    var longText = fs.readFileSync('./catalog/catalog.txt');
    var minifiedText = minify(longText.toString(),{
        minifyJS : true,
        minifyCSS : true,
        collapseWhitespace : true,
    });
    var cleanText = minifiedText.replace(/'/g,'');
    fs.writeFileSync('./catalog/clean.txt',cleanText);

    console.log('Done making cleaned text!');
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
    console.log('running exercise 5');
   var data = fs.readFileSync('./catalog/clean.txt');
    console.log('read the file!');
    var $ = cheerio.load(data);
    var courses = [];

    
    $('h3').each(function(i,element){
        courses.push($(element).text());
    });
    console.log('Course titles placed into array!');
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
    var data = fs.readFileSync('./catalog/clean.txt');
     console.log('read the file!');
     var $ = cheerio.load(data);
     var titles = [];
 
     
     $('h3').each(function(i,element){
         titles.push($(element).text());
     });
     console.log('Course titles placed into array!');
     return titles;

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
    var cleanWordArray = courses.map(function(courses){
        var courseWordArray = courses.toLowerCase().match(/([a-z]+)/g);
         // Filter out single letter words like a
         var filteredWords = courseWordArray.filter(word => word.length > 1 );
         // Why do I still get things like a and b? 
         // Filter out common words like 'in'
         var filteredWords = courseWordArray.filter( word =>
             word != 'in' && word != 'and' && word != 'of' && word != 'the'
         && word != 'to');
        return filteredWords;
    });
    return cleanWordArray;

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
    var words = exercise.seven();
    var wordsflat = words.reduce(function(previous,current){
        return previous.concat(current)
    },[])
    return wordsflat; 

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
    var wordsflat = exercise.eight();
    var scores = wordsflat.reduce(function(previous,current){
            if(current in previous){
                previous[current] += 1;
            }
            else{
                previous[current] = 1;
            }
            return previous;
        },{});
        var dataFile = 'var scores = '+ JSON.stringify(scores) ;
        //console.log(dataFile)
        var filename = './catalog_scores.js';
        fs.writeFileSync(filename,dataFile);
        return scores; 
    
};


module.exports = exercise;
