var cheerio = require('cheerio');
var request = require('request');
var fetch = require('node-fetch');
var fs = require('fs');
var minify = require('html-minifier').minify;

var exercise = {};
exercise.urls = [];

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
    var url = 'http://student.mit.edu/catalog/index.cgi';
    var makeRequest = async function (url) {
        var response = await fetch(url);
        var catalog = await response.text();
        return catalog;
    };  
    
    var receiveURLS = function(catalog){
        var $ = cheerio.load(catalog);

        $('ul li a').each(function(i,element){
            exercise.urls.push('http://student.mit.edu/catalog/'+ $(element).attr('href'));
        }); 
        //console.log(exercise.urls);
        return exercise.urls;
    };

    return new Promise((res)=>{ 
        res(makeRequest(url).then((catalog)=>{receiveURLS(catalog)}));
    });
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

    const writeFile = (path, data, opts = 'utf8') =>
    new Promise((res, rej) => {
        fs.writeFile(path, data, opts, (err) => {
            if (err) rej(err)
            else res()
        })
    });

    var makeRequest = async function (url,counter) {
        var res = await fetch(url);
        await writeFile(url.replace('http://student.mit.edu/', ''), await res.text()); // ('/catalog', html result)
        return 'done - ' + counter;        
    };  

    async function download() {
        await exercise.one();

        exercise.urls.forEach(function(url,i){
            makeRequest(url,i).then((result) =>{
                console.log(result);
            });    
        })
    }
    download();
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

    // create a cat txt doc using fs
    // read and copy catalog indiv course files into cattxt
        
    // read file
    // append file : create a cat txt and copy catalog indiv course files into it


    function combineFiles(err, data){
        fs.appendFile('catalog/catalog.txt', data, (err) => {
            if (err) throw err;
            console.log('The data was appended to file!');
        });   
    }
    
    async function read() {
        await exercise.one();  

        exercise.urls.forEach(function(url,i){
           fs.readFile(url.replace('http://student.mit.edu/', ''), combineFiles);
        })
    }

    //fs.unlink('catalog/catalog.txt', (err) => {if (err) throw err;});  // delete first so theres no aggrgation
    read();

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
    
    /*var result = minify('<p title="blah" id="moo">foo</p>', {
        removeAttributeQuotes: true
      });
    result;*/
    
    var catalog = fs.readFileSync('catalog/catalog.txt');
    var data = minify(catalog, {collapseWhitespace: true, minifyJS:true, minifyCSS:true});
    //console.log(data);
    return data;
    
    // html-minifier catalog.txt --collapse-whitespace --minify-js --minify-css -o catalog_clean.txt
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
    var data = fs.readFileSync('catalog/catalog_clean.txt');
    var $ = cheerio.load(data);

    var courses = [];
    $('h1').each(function(i, course){
        courses.push($(course).text());
    });
    //console.log(courses);
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
    
    var data = fs.readFileSync('catalog/catalog_clean.txt');
    var $ = cheerio.load(data);

    var titles = [];
    $('h3').each(function(i, title){
        titles.push($(title).text());
    });
    //console.log(titles);
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
    
    //var exp = /[\d\W]|(?<!\s)and(?!\s)|(?<!\s)the(?!\s)|(?<!\s)\a(?!\s)/g; // numbers, punctuation 
    var exp = /[\d?.,\/#!$%\^&\*;:{}=\-_`~()]|(?!\s)and(?!\s)|(?!\s)the(?!\s)|(?!\s)in(?!\s)|(?!\s)a(?!\s)/g;
    //var exp = /\sin|\sfor|\sof|\sto|\sand|\sthe|\sa|\[J\]|[\d?.,\/#!$%\^&\*;:{}=\-_`~()]/gi;

    var clean_titles = titles.map((title)=>{ return title.replace(exp, '');});
    
    return clean_titles;
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
    
    var clean_titles = exercise.seven();

    //array of array of words 
    var words = clean_titles.map(function(title){ 
        return title.toLowerCase().match(/([a-z]+)/g);		
    });

    //array of words
    var wordsFlat = words.reduce(function(previous, current){
        return previous.concat(current);
    },[]);

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

    var wordsFlat = exercise.eight();

    var scores = wordsFlat.reduce(function(previous,current){
        if(current in previous){
            previous[current] = +1;
        }
        else{
            previous[current] = 1;
        }
        return previous;
    },{});
    console.log(scores);
};


module.exports = exercise;
