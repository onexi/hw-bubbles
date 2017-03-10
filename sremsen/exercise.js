var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

var exercise = {};

    var courses = [
    'http://student.mit.edu/catalog/m1a.html',
    'http://student.mit.edu/catalog/m1b.html',
    'http://student.mit.edu/catalog/m1c.html',
    'http://student.mit.edu/catalog/m2a.html',
    'http://student.mit.edu/catalog/m2b.html',
    'http://student.mit.edu/catalog/m2c.html',
    'http://student.mit.edu/catalog/m3a.html',
    'http://student.mit.edu/catalog/m3b.html',
    'http://student.mit.edu/catalog/m3c.html',
    'http://student.mit.edu/catalog/m4a.html',
    'http://student.mit.edu/catalog/m4b.html',
    'http://student.mit.edu/catalog/m4c.html',
    'http://student.mit.edu/catalog/m5a.html',
    'http://student.mit.edu/catalog/m5b.html',
    'http://student.mit.edu/catalog/m5c.html',
    'http://student.mit.edu/catalog/m6a.html',
    'http://student.mit.edu/catalog/m6b.html',
    'http://student.mit.edu/catalog/m6c.html',
    'http://student.mit.edu/catalog/m7a.html',
    'http://student.mit.edu/catalog/m7b.html',
    'http://student.mit.edu/catalog/m7c.html',
    'http://student.mit.edu/catalog/m8a.html',
    'http://student.mit.edu/catalog/m8b.html',
    'http://student.mit.edu/catalog/m8c.html',
    'http://student.mit.edu/catalog/m9a.html',
    'http://student.mit.edu/catalog/m9b.html',
    'http://student.mit.edu/catalog/m9c.html',
    'http://student.mit.edu/catalog/m10a.html',
    'http://student.mit.edu/catalog/m10b.html',
    'http://student.mit.edu/catalog/m10c.html',
    'http://student.mit.edu/catalog/m11a.html',
    'http://student.mit.edu/catalog/m11b.html',
    'http://student.mit.edu/catalog/m11c.html',
    'http://student.mit.edu/catalog/m12a.html',
    'http://student.mit.edu/catalog/m12b.html',
    'http://student.mit.edu/catalog/m12c.html',
    'http://student.mit.edu/catalog/m14a.html',
    'http://student.mit.edu/catalog/m14b.html',
    'http://student.mit.edu/catalog/m14c.html',
    'http://student.mit.edu/catalog/m15a.html',
    'http://student.mit.edu/catalog/m15b.html',
    'http://student.mit.edu/catalog/m15c.html',
    'http://student.mit.edu/catalog/m16a.html',
    'http://student.mit.edu/catalog/m16b.html',
    'http://student.mit.edu/catalog/m16c.html',
    'http://student.mit.edu/catalog/m17a.html',
    'http://student.mit.edu/catalog/m17b.html',
    'http://student.mit.edu/catalog/m17c.html',
    'http://student.mit.edu/catalog/m18a.html',
    'http://student.mit.edu/catalog/m18b.html',
    'http://student.mit.edu/catalog/m18c.html',
    'http://student.mit.edu/catalog/m20a.html',
    'http://student.mit.edu/catalog/m20b.html',
    'http://student.mit.edu/catalog/m20c.html',
    'http://student.mit.edu/catalog/m21a.html',
    'http://student.mit.edu/catalog/m21b.html',
    'http://student.mit.edu/catalog/m21c.html',
    'http://student.mit.edu/catalog/m21Aa.html',
    'http://student.mit.edu/catalog/m21Ab.html',
    'http://student.mit.edu/catalog/m21Ac.html',
    'http://student.mit.edu/catalog/mCMSa.html',
    'http://student.mit.edu/catalog/mCMSb.html',
    'http://student.mit.edu/catalog/mCMSc.html',
    'http://student.mit.edu/catalog/m21Wa.html',
    'http://student.mit.edu/catalog/m21Wb.html',
    'http://student.mit.edu/catalog/m21Wc.html',
    'http://student.mit.edu/catalog/m21Ga.html',
    'http://student.mit.edu/catalog/m21Gb.html',
    'http://student.mit.edu/catalog/m21Gc.html',
    'http://student.mit.edu/catalog/m21Ha.html',
    'http://student.mit.edu/catalog/m21Hb.html',
    'http://student.mit.edu/catalog/m21Hc.html',
    'http://student.mit.edu/catalog/m21La.html',
    'http://student.mit.edu/catalog/m21Lb.html',
    'http://student.mit.edu/catalog/m21Lc.html',
    'http://student.mit.edu/catalog/m21Ma.html',
    'http://student.mit.edu/catalog/m21Mb.html',
    'http://student.mit.edu/catalog/m21Mc.html',
    'http://student.mit.edu/catalog/mWGSa.html',
    'http://student.mit.edu/catalog/mWGSb.html',
    'http://student.mit.edu/catalog/mWGSc.html',
    'http://student.mit.edu/catalog/m22a.html',
    'http://student.mit.edu/catalog/m22b.html',
    'http://student.mit.edu/catalog/m22c.html',
    'http://student.mit.edu/catalog/m24a.html',
    'http://student.mit.edu/catalog/m24b.html',
    'http://student.mit.edu/catalog/m24c.html',
    'http://student.mit.edu/catalog/mCCa.html',
    'http://student.mit.edu/catalog/mCSBa.html',
    'http://student.mit.edu/catalog/mECa.html',
    'http://student.mit.edu/catalog/mECb.html',
    'http://student.mit.edu/catalog/mEMa.html',
    'http://student.mit.edu/catalog/mESa.html',
    'http://student.mit.edu/catalog/mHSTa.html',
    'http://student.mit.edu/catalog/mHSTb.html',
    'http://student.mit.edu/catalog/mIDSa.html',
    'http://student.mit.edu/catalog/mMASa.html',
    'http://student.mit.edu/catalog/mSCMa.html',
    'http://student.mit.edu/catalog/mASa.html',
    'http://student.mit.edu/catalog/mMSa.html',
    'http://student.mit.edu/catalog/mNSa.html',
    'http://student.mit.edu/catalog/mSTSa.html',
    'http://student.mit.edu/catalog/mSTSb.html',
    'http://student.mit.edu/catalog/mSWEa.html',
    'http://student.mit.edu/catalog/mSPa.html',
    'http://student.mit.edu/catalog/mSPb.html',
    ];

exercise.one = function(){

    return courses;
    
};

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


exercise.two = function(){

    // FROM HOMEWORK PREP - SET UP ALL THE FILES

    // exercise.get = function (url) {

    //     return new Promise(function(resolve, reject){

    //         function callback(error, response, body) {
    //             if(!error){
    //                 resolve(body);
    //             }
    //             else {
    //                 reject(error);
    //             }
    //             return null;
    //         }
            
    //         // use the url that is passed into the function
    //         request(url, callback);
    //     });
    // };
    
    // courses.forEach(function(url, i){

    //     // already have page
    //     var page = exercise.get(courses[i]);
    //     page.then(function(body){
    //         //console.log(body);
    //         var filename = 'catalog/page' + i + '.html';
    //         return exercise.save(body,filename);
    //     })
    //     .then(function(msg){
    //         console.log(msg);
    //     });

    // });

    // exercise.save = function(data, filename) {
    //     return new Promise(function(resolve, reject){
            
    //         // write listings to file
    //         fs.writeFile(filename, data, function(err) {
    //             if(err) {
    //                 reject(error);
    //             }
    //             resolve('The ' + filename + ' was saved!');
    //         });
    //     });
    // };

    return exercise.one();

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
    var content = '';
    var files = fs.readdirSync('./catalog');

    fs.writeFileSync('./catalog/catalog.txt', '');

    files.forEach(function(name, index) {
        if (name != 'catalog.txt' && name != '.DS_Store') {
            var body = fs.readFileSync('./catalog/'+name, 'utf8');
            if (body.indexOf('404 Not Found') == -1) { // 404 Not Found
                content += body;
                fs.appendFileSync('./catalog/catalog.txt', body);            
            }
        }
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

// WORKS
exercise.four = function(){

    var input = fs.readFileSync('./catalog/catalog.txt', 'utf8');

    input = input.replace(/\n/g, '');
    input = input.replace(/\r/g, '');

    fs.writeFileSync('./catalog/catalog.txt', input);

    return input;

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
    
    var courses = fs.readFileSync('./catalog/catalog.txt', 'utf8');

    var expression = /<h3>(.*?)<br><I>/g;
    var matches = courses.match(expression);
    //console.log(matches);
    return matches;
    
    
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
   
    // JUST COURSE TITLES

    var courses = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    var $ = cheerio.load(courses); 
    var matches = [];
    $('h3').each(function(i, element){
        matches.push($(element).text());
    });
    //console.log(matches);
    return matches;

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
    
    //CLEANTITLES

    var matches = exercise.six();

    var titles = matches.map(function(title){
    // regex - find all the words with letters not punctuation 
    //regex first //g then () inside
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    //console.log(titles);
    //return titles;

    // SCRUB THE TITLES OF ALL COMMON WORDS
    var commonWords = ['and', 'or', 'a', 'of', 'j', 'i', 'ii', 'in', 'the', 'for', 'b'];
    
    words = titles.map(function(word){
        return word.filter(function(w){
            if (commonWords.includes(w)) {
                return false;
            }
            else {
                return true;
            }
        });
    });

    //console.log(words);
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
    
    var titles = exercise.seven();
    
    //console.log('this is exercise 8!!!');

    var wordsFlat = titles.reduce(function(previous, current) {
            return previous.concat(current);
    }, []);
    //console.log(wordsFlat);
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

    var wordCount = wordsFlat.reduce(function(previous, current) {
        if (current in previous) {
            previous[current] += 1;
        }
        else{
            previous[current] = 1;      
        }

        return previous;
    }, {});
    
    console.log(wordCount);
    return wordCount;
    
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
