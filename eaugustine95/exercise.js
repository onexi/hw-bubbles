var request = require ('sync-request');
var minify = require('html-minify');
var cheerio =require('cheerio');
var fs = require('fs')
var exercise = {};

exercise.one = function(){
    var website_names =[];
    website_names.push('http://student.mit.edu/catalog/m1a.html')
    website_names.push('http://student.mit.edu/catalog/m1b.html  ')
    website_names.push('http://student.mit.edu/catalog/m1c.html ')
    website_names.push('http://student.mit.edu/catalog/m2a.html')
    website_names.push('http://student.mit.edu/catalog/m2b.html ')
    website_names.push('http://student.mit.edu/catalog/m2c.html')
    website_names.push('http://student.mit.edu/catalog/m3a.html  ')
    website_names.push('http://student.mit.edu/catalog/m3b.html')
    website_names.push('http://student.mit.edu/catalog/m4a.html')
    website_names.push('http://student.mit.edu/catalog/m4b.html ')
    website_names.push('http://student.mit.edu/catalog/m4c.html')
    website_names.push('http://student.mit.edu/catalog/m4d.html')
    website_names.push('http://student.mit.edu/catalog/m4e.html ')
    website_names.push('http://student.mit.edu/catalog/m4f.html ')
    website_names.push('http://student.mit.edu/catalog/m4g.html ')
    website_names.push('http://student.mit.edu/catalog/m5a.html ')
    website_names.push('http://student.mit.edu/catalog/m5b.html ')
    website_names.push('http://student.mit.edu/catalog/m6a.html')
    website_names.push('http://student.mit.edu/catalog/m6b.html  ')
    website_names.push('http://student.mit.edu/catalog/m6c.html ')
    website_names.push('http://student.mit.edu/catalog/m7a.html')
    website_names.push('http://student.mit.edu/catalog/m8a.html  ')
    website_names.push('http://student.mit.edu/catalog/m8b.html')
    website_names.push('http://student.mit.edu/catalog/m8c.html')
    website_names.push('http://student.mit.edu/catalog/m9a.html ')
    website_names.push('http://student.mit.edu/catalog/m9b.html ')
    website_names.push('http://student.mit.edu/catalog/m10a.html')
    website_names.push('http://student.mit.edu/catalog/m10b.html ')
    website_names.push('http://student.mit.edu/catalog/m10c.html')
    website_names.push('http://student.mit.edu/catalog/m11a.html ')
    website_names.push('http://student.mit.edu/catalog/m11b.html ')
    website_names.push('http://student.mit.edu/catalog/m11c.html')
    website_names.push('http://student.mit.edu/catalog/m12a.html ')
    website_names.push('http://student.mit.edu/catalog/m12b.html')
    website_names.push('http://student.mit.edu/catalog/m12c.html')
    website_names.push('http://student.mit.edu/catalog/m14a.html ')
    website_names.push('http://student.mit.edu/catalog/m14b.html')
    website_names.push('http://student.mit.edu/catalog/m15a.html ')
    website_names.push('http://student.mit.edu/catalog/m15b.html ')
    website_names.push('http://student.mit.edu/catalog/m15c.html')
    website_names.push('http://student.mit.edu/catalog/m16a.html')
    website_names.push('http://student.mit.edu/catalog/m16b.html ')
    website_names.push('http://student.mit.edu/catalog/m18a.html ')
    website_names.push('http://student.mit.edu/catalog/m18b.html ')
    website_names.push('http://student.mit.edu/catalog/m20a.html ')
    website_names.push('http://student.mit.edu/catalog/m22a.html ')
    website_names.push('http://student.mit.edu/catalog/m22b.html')
    website_names.push('http://student.mit.edu/catalog/m22c.html')
    return website_names

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
};

exercise.two = function(){
    var website_names=exercie.one();
    website_names.forEach(function(website_name,index){
        var res = reuest('GET',url);
        var filename='./catalog/' + index + '.html';
        fs.writeFileSync(filename, res.getBody().toString());





   });
   
   
   
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
    var files=[]
    for (var i=0; i<46; i++){
        files.push('./catalog/' + i + '.html');
    }
    files.forEach(function(file,index){
        var data=fs.readFileSync(file);
        console.log('adding' + file + 'to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt', data)


    })
    
    
    
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
    var data=fs.readFileSync('./catalog/catalog.txt');
    var scrubbed=minify(data.toString(), {
        collapseWhitespace: true,
        minifyJS : true,
        minifyCSS : true
    });
    
    
    
    
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
   var data = fs.readFileSync('./catalog/clean.txt');

   var $ = cheerio.load(data);
   var courses =[];
   $('h3').each(function(i,element){
       courses.push($(element).text());
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
    var data = fs.readFileSync('./catalog/clean.txt');

    var $ = cheerio.load(data);
    var titles =[];
    $('h3').each(function(i,element){
        titles.push($(element).text());
    });
    return titles;
    
    
    
    
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
    var titles = exercise.six();
    var words = titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    return words;
    
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
    var words = exercise.seven();
    var wordsFlat = words.reduce(function(previous,current){
        return previous.concat(current);
    },[]);
    return wordsFlat
    
    
    
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
    var wordsFlat = exercise.eight();
    var scores = wordsFlat.reduce(function(previous,current){
        if(current in previous){
            previous[current]+=1;
        }
        else{
            previous[current]=1;
        }
        return previous;
    },{});
   
   return scores;
   
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
