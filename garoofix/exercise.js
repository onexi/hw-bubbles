// Packages
var request = require('sync-request');
var fs = require('fs');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var exercise = {};

exercise.one = function(){
    //  Return the address of all the html pages
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
    return urls;
};

exercise.two = function(){
    //  Download every course catalog page.
    //  Save every page to "your_folder/catalog"
    var urls = exercise.one();
    urls.forEach((url, index)=>{
    //     let pgName = url.substr(url.lastIndexOf('/')+1);
        var res = request('GET', url);
        fs.writeFileSync("./catalog/"+index+'.html', res.getBody().toString());
    });
};

exercise.three = function(){
    // Delete previous file if it exists
    // fs.exists('catalog/catalog.txt',function(exists){
    //     if(exists){
    //         fs.unlinkSync('catalog/catalog.txt', (err) => {
    //             if (err) throw err;
    //             console.log('catalog/catalog.txt was deleted');
    //         });
    //     }
    // });
    var files = [];
    for(var i = 0; i < 46; i++){
        files.push('./catalog/' + i + '.html');
    }

    files.forEach((file, i)=>{
        let data = fs.readFileSync('./catalog/' + i + '.html');
        console.log('+' + file);
        fs.appendFileSync("./catalog/catalog.txt", data);
    });

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
    var data = fs.readFileSync("catalog/catalog.txt");
    var scrubbed = minify(data.toString(), {
       collapseWhitespace: true,
       minifyJS: true,
       minifyCSS: true
    });

    var clean = scrubbed.replace(/'/g, '');
    fs.writeFileSync("catalog/clean.txt", clean);
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
    var courses = [];
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
    var titles = [];
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
    var wordsFlat = words.reduce(function(previous, current){
        return previous.concat(current);
    }, []);
    return wordsFlat;
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
    var result = {};
    wordsFlat.forEach((word)=>{
        if(word in result){
            result[word] += 1;
        }else{
            result[word] = 1;
        }
    });
    return result;
    // var scores = wordsFlat.reduce(function(previous, current){
    //      if(current in previous){
    //    if(previous.hasOwnProperty(current)){
    //        previous[current] += 1;
    //    }else{
    //        previous[current] = 1;
    //    }
    // },{});

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
