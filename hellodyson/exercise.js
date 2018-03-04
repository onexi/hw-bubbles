var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fs = require('fs');

var exercise = {};

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
    //console.log('--------------Q1----------------')
    var urls = []
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
    //urls.push('http://student.mit.edu/catalog/m13a.html');
    urls.push('http://student.mit.edu/catalog/m14a.html');
    urls.push('http://student.mit.edu/catalog/m15a.html');
    urls.push('http://student.mit.edu/catalog/m16a.html');
    urls.push('http://student.mit.edu/catalog/m17a.html');
    urls.push('http://student.mit.edu/catalog/m18a.html');
    //urls.push('http://student.mit.edu/catalog/m19a.html');
    urls.push('http://student.mit.edu/catalog/m20a.html');
    urls.push('http://student.mit.edu/catalog/m21a.html');
    // subsets of 21a
    urls.push('http://student.mit.edu/catalog/m21Aa.html');
    urls.push('http://student.mit.edu/catalog/mCMSa.html');
    urls.push('http://student.mit.edu/catalog/m21Wa.html');
    urls.push('http://student.mit.edu/catalog/m21Ga.html');
    urls.push('http://student.mit.edu/catalog/m21Ha.html');
    urls.push('http://student.mit.edu/catalog/m21La.html');
    urls.push('http://student.mit.edu/catalog/m21Ma.html');
    urls.push('http://student.mit.edu/catalog/mWGSa.html');

    urls.push('http://student.mit.edu/catalog/m22a.html');

    urls.push('http://student.mit.edu/catalog/m24a.html');

    urls.push('http://student.mit.edu/catalog/mCCa.html');
    urls.push('http://student.mit.edu/catalog/mCSBa.html');
    urls.push('http://student.mit.edu/catalog/mECa.html');
    urls.push('http://student.mit.edu/catalog/mEMa.html');
    urls.push('http://student.mit.edu/catalog/mESa.html');
    urls.push('http://student.mit.edu/catalog/mHSTa.html');
    urls.push('http://student.mit.edu/catalog/mIDSa.html');
    urls.push('http://student.mit.edu/catalog/mMASa.html');
    urls.push('http://student.mit.edu/catalog/mSCMa.html');
    urls.push('http://student.mit.edu/catalog/mASa.html');
    urls.push('http://student.mit.edu/catalog/mMSa.html');
    urls.push('http://student.mit.edu/catalog/mNSa.html');
    urls.push('http://student.mit.edu/catalog/mSTSa.html');
    urls.push('http://student.mit.edu/catalog/mSWEa.html');
    urls.push('http://student.mit.edu/catalog/mSPa.html');

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
   var urls = exercise.one();

   urls.forEach(function(url,index){
       var res = request('GET', url);
       var filename = './catalog/' + index + '.html';
       fs.writeFileSync(filename, res.getBody().toString());
   });
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
    var files = [];
    for (var i = 0; i < 46; i++){ // we have 46 files
        files.push('./catalog' + i + '.html');
    }
    files.forEach(function(file, index){
        var data = fs.readFileSync(file);
        console.log('adding' + file + 'to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt', data);
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
    var data = fs.readFileSync('./catalog/catalog.txt');

    var scrubbed = minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    });

    var clean = scrubbed.replace(/'/g, '');
    fs.writeFileSync('./catalog/clean.txt', clean);
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
    var data = fs.readFileSync('./catalog/clean.txt');
    var $ = cheerio.load(data);
    var courses = [];

    $('h3').each(function(i,element){
        courses.push($(element).text());
    });
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
    var $ = cheerio.load(data);
    var titles = [];

    $('h3').each(function(i,element){
        titles.push($(element).text());
    });
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
    var words = exercise.seven();
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

    var scores = wordsFlat.reduce(function(previou,current){
        if (current in previou){
            previous[current] += 1;
        }else{
            previous[current] = 1;
        }
        return previous;
    },{});

    return scores;
};


module.exports = exercise;
