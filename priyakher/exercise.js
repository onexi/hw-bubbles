var exercise = {};
module.exports = exercise;

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

    var urls =[];
    urls.push('http://student.mit.edu/catalog/m1a.html');
    urls.push('http://student.mit.edu/catalog/m2a.html');
    urls.push('http://student.mit.edu/catalog/m3a.html');
    urls.push('http://student.mit.edu/catalog/m4a.html');
    urls.push('http://student.mit.edu/catalog/m5a.html');
    urls.push('http://student.mit.edu/catalog/m6a.html');
    urls.push('http://student.mit.edu/catalog/m7a.html');
    urls.push('http://student.mit.edu/catalog/m8a.html');
    urls.push('http://student.mit.edu/catalog/m9a.html');
    urls.push('http://student.mit.edu/catalog/m10a.html');
    urls.push('http://student.mit.edu/catalog/m11a.html');
    urls.push('http://student.mit.edu/catalog/m12a.html');
    urls.push('http://student.mit.edu/catalog/m13a.html');
    urls.push('http://student.mit.edu/catalog/m14a.html');
    urls.push('http://student.mit.edu/catalog/m15a.html');
    urls.push('http://student.mit.edu/catalog/m16a.html');
    urls.push('http://student.mit.edu/catalog/m17a.html');
    urls.push('http://student.mit.edu/catalog/m18a.html');
    urls.push('http://student.mit.edu/catalog/m19a.html');
    urls.push('http://student.mit.edu/catalog/m20a.html');
    urls.push('http://student.mit.edu/catalog/m21a.html');
    urls.push('http://student.mit.edu/catalog/m21Aa.html');
    urls.push('http://student.mit.edu/catalog/mCMSa.html');
    urls.push('http://student.mit.edu/catalog/m21Wa.html');
    urls.push('http://student.mit.edu/catalog/m21Ha.html');
    urls.push('http://student.mit.edu/catalog/m21Ga.html');
    urls.push('http://student.mit.edu/catalog/m21La.html');
    urls.push('http://student.mit.edu/catalog/m21Ma.html');
    urls.push('http://student.mit.edu/catalog/mWGSa.html');
    urls.push('http://student.mit.edu/catalog/m22a.html');
    urls.push('http://student.mit.edu/catalog/m24a.html');
    urls.push('http://student.mit.edu/catalog/mCCa.html');
    urls.push('http://student.mit.edu/catalog/mCSBa.html');
    urls.push('http://student.mit.edu/catalog/m21a.html');
    
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

    var urls= exercise.one();

    
var fetch = require('node-fetch');
var fs = require('fs');

const writeFile = (path, data, opts = 'utf8') =>
    new Promise((res, rej) => {
        fs.writeFile(path, data, opts, (err) => {
            if (err) rej(err)
            else res()
    })
})

var makeRequest = async function (url,counter) {
    var res = await fetch(url);
    await writeFile('catalog/' + counter + '.html', await res.text());
    return 'done - ' + counter;        
};  

urls.forEach(function(url,i){
    makeRequest(url,i).then((result) =>{
        console.log(result);
    });    
})

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
var files= [];

var fs = require('fs');

for (var i=0; i<34;i++) {

    files.push('./catalog/' + i +'.html');
}



files.forEach(function(file,index){

    var data= fs.readFileSync(file);
    console.log(index);
    fs.appendFileSync('./catalog/cataog.txt',data);
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


    var fs= require("fs");
    var minify= require("html-minifier").minify;

var data= fs.readFileSync('./catalog/cataog.txt');
var scrubbed=minify(data.toString(),{

collapseWhitespace:true,
minifyJS:true,
minifyCSS:true

});

var clean=scrubbed.replace(/'/g,'');
fs.writeFileSync('./catalog/clean.txt',clean);
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

    var cheerio = require('cheerio');
    var fs=require('fs');
    var data = fs.readFileSync('./catalog/clean.txt');
    var $ = cheerio.load(data);
   var courses = [];
   $('title').each(function(i, course){
	courses.push($(course).text());
});
console.log(courses);

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

    var cheerio = require('cheerio');
    var fs=require('fs');
    var data = fs.readFileSync('./catalog/clean.txt');
    var $ = cheerio.load(data);
   var titles = [];
   $('h3').each(function(i, title){
	titles.push($(title).text());
});
console.log(titles);

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


    var titles = exercise.six();
    var words = titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });
console.log(words[0]);
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


    var words=exercise.seven();

    
    var wordList= words.reduce(function(previous, current){

         return previous.concat(current)

    },[]);

    return wordList;
          



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
     var list = exercise.eight();

     var fs=require("fs");

     var freq= list.reduce(function(previous,current){

        if ( current in previous ){
            
            previous[current]+=1;

        }
        else

        {

        previous[current]=1;

        }
        return previous;


     },{});


    var scores= JSON.stringify(freq, null, 2);
    scores= 'var scores =' + scores;

    fs.writeFileSync('./catalogSample/catalogSample/scores.js', scores, 'utf-8');
return freq;
};



