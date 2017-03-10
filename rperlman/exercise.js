var request = require('request');
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

    // Obtained list of URLS by manually clicking on course catalog links from website
    var urls= [
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

    urls.forEach(function(url,i){
        // COMMENTED OUT TO PREVENT REMAKING catalog.txt FILE OVER AND OVER
        // var page = request.get(url);
        // page.then(function(body){
        //     var filename = 'catalog/data' + i + '.txt';
        //   });

        // var page = request.get(url, function(err, response, body) {
        //     var filename = 'catalog/data' + i + '.txt';
        //     exercise.save(filename, body);
        // });
    });

    return urls;
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
    // for each file in /catalog folder, read the file
    // get filenames in catalog folder
    var fs = require('fs');
    var files = fs.readdirSync('./catalog');
    var content = '';
    for (var i=0; i<files.length; i++) {
        var f = files[i];
        var body = fs.readFileSync('./catalog/'+ f, 'UTF8');
        var body = fs.readFileSync('./catalog/' + files[i], 'UTF8');
        if (i < 1000000) {
            content += body;
        }
    }
    fs.writeFileSync('./catalog/catalog.txt', content);
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

    /* WHAT I TRIED USING BUT IT KEPT FAILING
    var content = fs.readFileSync('./catalog/catalog.txt', 'UTF8');
    var minify = require('html-minifier').minify;
    var minifiedText = minify(content, {collapseWhitespace:true});
    fs.writeFileSync('./catalog/scrubbedcontent.txt', minifiedText);
    return minifiedText; */
    
    // suggested from piazza to replace whitespace to pass the test
    var fs = require('fs');
    var body = fs.readFileSync('./catalog/catalog.txt', 'UTF8');
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

    // use cheerio to get course titles
    var cheerio = require('cheerio');
    var body = fs.readFileSync('./catalog/catalog.txt', 'UTF8');
    var $ = cheerio.load(body);

    // make new array called courseTitles and add the titles, which are tagged with 'h3'
    var courseTitles = [];
    $('h3').each(function(i,element){
        courseTitles.push($(element).text());
    });
    return courseTitles;
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
    // use cheerio to get course titles
    var cheerio = require('cheerio');
    var body = fs.readFileSync('./catalog/catalog.txt', 'UTF8');
    var $ = cheerio.load(body);

    // make new array called courseTitles and add the titles, which are tagged with 'h3'
    var courseTitles = [];
    $('h3').each(function(i,element){
        courseTitles.push($(element).text());
    });
    return courseTitles;
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
    var courseTitles = exercise.six();
    
    // eliminate punctuation and numbers by only using map to select letters
    var words = courseTitles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    
    // create an array of common words and other junk that was present in the arrays
    var commonWords = ['and', 'at', 'the', 'in', 'j', 'to', 'is', 'of', 'for', 'or', 'hst', 'by', 's', 'i', 'b', 'ii',
    'on', 'd','t', 'm', 'th', 'tht', 'thu', 'ur', 'urg', 'iii', 'u', 'nmr', 'via', 'uap', 'uar', 'uat',
    'urs', 'cmos', 'mthg', 'st', 'e', 'iv', 'it', 'p', 'q', 'g', 'un', 'k', 'v', 'vi', 'h', 'ec', 're',
    'em', 'esg', 'es','scm', 'ms', 'sts', 'sp', 'xl', 'ns', 'cms', 'ce', 'f', 'els', 'dv', 'jr', 'ind'];

    words = words.map(function(wordList) {

        // wordList = ['an', 'engineering']

        var newArray = [];
        
        // use filter to eliminate the words contained in commonWords
        newArray = wordList.filter(function(word) {
            if (commonWords.includes(word)) {
                return false;
            }
            else {
                return true;
            }
        })
        return newArray;

    })

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

    words = words.reduce(function(previous, current) {
        return previous.concat(current);
    }, []);

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

    //count the occurance of each word
    var result = words.reduce(function(previous,current){
        if (current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] = 1;
        }
        return previous;
    }, {});
    var fs = require('fs');
    //fs.writeFileSync('./data_for_bubbles.txt', result);
    console.log(result);
    return result;
};

// export the exercise
module.exports = exercise;
