var exercise = {};
var request = require('request');
var fs = require('fs');
var url = 'http://student.mit.edu/catalog/index.cgi';

exercise.one = function(){
   
    var url = 'http://student.mit.edu/catalog/index.cgi';
    var urls = [
        'http://student.mit.edu/catalog/m1a.html',
        'http://student.mit.edu/catalog/m1b.html',
        'http://student.mit.edu/catalog/m1c.html',
        'http://student.mit.edu/catalog/m2a.html',
        'http://student.mit.edu/catalog/m2b.html',
        'http://student.mit.edu/catalog/m2c.html',
        'http://student.mit.edu/catalog/m3a.html',
        'http://student.mit.edu/catalog/m3b.html',
        'http://student.mit.edu/catalog/m4a.html',
        'http://student.mit.edu/catalog/m4b.html',
        'http://student.mit.edu/catalog/m4c.html',
        'http://student.mit.edu/catalog/m4d.html',
        'http://student.mit.edu/catalog/m4e.html',
        'http://student.mit.edu/catalog/m4f.html',
        'http://student.mit.edu/catalog/m4g.html',
        'http://student.mit.edu/catalog/m5a.html',
        'http://student.mit.edu/catalog/m5b.html',
        'http://student.mit.edu/catalog/m6a.html',
        'http://student.mit.edu/catalog/m6b.html',
        'http://student.mit.edu/catalog/m6c.html',
        'http://student.mit.edu/catalog/m7a.html',
        'http://student.mit.edu/catalog/m8a.html',
        'http://student.mit.edu/catalog/m8b.html',
        'http://student.mit.edu/catalog/m9a.html',
        'http://student.mit.edu/catalog/m9b.html',
        'http://student.mit.edu/catalog/m10a.html',
        'http://student.mit.edu/catalog/m10b.html',
        'http://student.mit.edu/catalog/m11a.html',
        'http://student.mit.edu/catalog/m11b.html',
        'http://student.mit.edu/catalog/m11c.html',
        'http://student.mit.edu/catalog/m12a.html',
        'http://student.mit.edu/catalog/m12b.html',
        'http://student.mit.edu/catalog/m12c.html',
        'http://student.mit.edu/catalog/m14a.html',
        'http://student.mit.edu/catalog/m14b.html',
        'http://student.mit.edu/catalog/m15a.html',
        'http://student.mit.edu/catalog/m15b.html',
        'http://student.mit.edu/catalog/m15c.html',
        'http://student.mit.edu/catalog/m16a.html',
        'http://student.mit.edu/catalog/m16b.html',
        'http://student.mit.edu/catalog/m17a.html',
        'http://student.mit.edu/catalog/m17b.html',
        'http://student.mit.edu/catalog/m18a.html',
        'http://student.mit.edu/catalog/m18b.html',
        'http://student.mit.edu/catalog/m20a.html',
        'http://student.mit.edu/catalog/m21a.html',
        'http://student.mit.edu/catalog/m21Aa.html',  
        'http://student.mit.edu/catalog/mCMSa.html',
        'http://student.mit.edu/catalog/m21Wa.html',
        'http://student.mit.edu/catalog/m21Wb.html',
        'http://student.mit.edu/catalog/m21Ga.html',
        'http://student.mit.edu/catalog/m21Gb.html',
        'http://student.mit.edu/catalog/m21Gc.html',
        'http://student.mit.edu/catalog/m21Gd.html',
        'http://student.mit.edu/catalog/m21Ge.html',
        'http://student.mit.edu/catalog/m21Gf.html',
        'http://student.mit.edu/catalog/m21Gg.html',
        'http://student.mit.edu/catalog/m21Gh.html',
        'http://student.mit.edu/catalog/m21Gq.html',
        'http://student.mit.edu/catalog/m21Gr.html',
        'http://student.mit.edu/catalog/m21Gs.html',
        'http://student.mit.edu/catalog/m21Ha.html',
        'http://student.mit.edu/catalog/m21Hb.html',
        'http://student.mit.edu/catalog/m21La.html',
        'http://student.mit.edu/catalog/m21Ma.html',
        'http://student.mit.edu/catalog/m21Mb.html',
        'http://student.mit.edu/catalog/mWGSa.html',
        'http://student.mit.edu/catalog/m22a.html',  
        'http://student.mit.edu/catalog/m22b.html',
        'http://student.mit.edu/catalog/m22c.html',
        'http://student.mit.edu/catalog/m24a.html',
        'http://student.mit.edu/catalog/m24b.html',
        'http://student.mit.edu/catalog/mCCa.html',
        'http://student.mit.edu/catalog/mCSBa.html',
        'http://student.mit.edu/catalog/mECa.html',
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
        'http://student.mit.edu/catalog/mSPa.html'
    ];
    
    return urls;
};



    
exercise.two = function(){
    // -----------------------------------------------
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
    urls = exercise.one();
    var request = require('request');
    urls.forEach(function(url,i){
        // var page = request.get(url);
        // page.then(function(body){
        //     console.log(body);
        //     var filename = 'catalog/data' + i + '.txt';
        //   });

        var page = request.get(url, function(err, response, body) {
            var filename = 'catalog/data' + i + '.txt';
            exercise.save(filename, body);
        });
    });
};

exercise.save = function(filename, data) {

    return new Promise(function(resolve, reject) {

        fs.writeFile(filename, data, function(err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(true);
            }
        });

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
    var fs = require('fs');
    var allfiles = fs.readdirSync('./catalog');
    var combine = '';
    for (var i = 0; i<allfiles.length; i++){
        
        var body = fs.readFileSync('./catalog/' + allfiles[i]);
        combine = combine + body;
    }
    fs.writeFileSync('./catalog/catalog.txt', combine);
    console.log(combine);
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
    var fs = require('fs');
    
    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');
 
    body = body.replace(/\n/g, '');
    body = body.replace(/\r/g, '');
   
    fs.writeFileSync('./catalog/catalog.txt',body);
 
    return body;    
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
    var courses = require('./catalog/catalog.txt');
    var $ = cheerio.load(courses);


    var courseList = [];
    $('h3').each(function(i, element){
        courseList.push($(element).text());
    }); 
    return courseList;
    
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
    var core = exercise.five();

    var expression = /<h3>(.*?)<br><I>/g;
    var titles = core.match(expression);
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
    var titles = exercise.seven();
    var words = [];

    for (var i=0; i<titles.length; i++){
        if (words.includes(titles[i])){
            words = words;
        } else {
            words.push(titles[i]);
        }
    }
    return words;
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

    var words = exercise.eight();
    var titles = exercise.seven();

    var counter = function(element){
        var count = 0;
        for (var i=0; i<titles.length;i++){
            if (element === titles[i]){
                count += 1;
            }
        }
        return count;
    };

    var wordFrequency = [];
    for (var j =0; j<words.length; j++){
        wordFrequency.push([words[j], counter(words[j])]);
    }
    return wordFrequency;
};

module.exports = exercise;
