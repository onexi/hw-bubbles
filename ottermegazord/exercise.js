var exercise = {};
var fs = require('fs');
var minify = require('html-minifier').minify;
var request = require('request');
var cheerio = require('cheerio');

var exercise = {};
var directory = '/Users/idaly666/Desktop/onexi/hw-bubbles/ottermegazord/catalog/';

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


    var sites= [
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

    //console.log(sites);
    return sites;
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

    var fs = require('fs');

    var sites = exercise.one();

    var redundant = 'http://student.mit.edu/catalog/';

    // console.log(sites[1].replace(redundant, ''));

    var request = require('request');


    sites.forEach(function(url){
        request(url, function (error, response, body) {
            //console.log('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            var extension = url.replace(redundant, '');
            var destination = "/Users/idaly666/Desktop/onexi/hw-bubbles/ottermegazord/catalog/" + extension;
            //console.log(destination);

            fs.writeFile(destination, body, function(err) {

                if(err) {
                    //return console.log(extension);
                }


            });
        });
    });

};

exercise.three = function(){
    // // -----------------------------------------------
    // //   YOUR CODE
    // //
    // //  Combine all files into one,
    // //  save to "your_folder/catalog/catalog.txt"
    // //
    // //  You can use the file system API,
    // //  https://nodejs.org/api/fs.html
    // //
    // //  See homework guide document for more info.
    // // -----------------------------------------------

    var sites = exercise.one();

    function pages(url){

        var redundant = 'http://student.mit.edu/catalog/';
        var extension = url.replace(redundant, '');
        return extension;

    }

    var list = sites.map(pages);
    var compiled = 0;

    list.forEach(compiler);

    function compiler(url){
        var address = directory + url;
        var text = fs.readFileSync(address,'utf8');
        compiled += text;
    }

    // console.log(compiled);

    var extension = 'catalog.txt';

    var destination = directory + extension;

    fs.writeFile(destination, compiled, function(err) {

        if(err) {
            //return console.log(extension);
        }


    });



};

exercise.four = function(){
    // // -----------------------------------------------
    // //   YOUR CODE
    // //
    // //  Remove line breaks and whitespaces
    // //  from the file. Return a string of
    // //  scrubbed HTML. In other words, HTML without
    // //  line breaks or whitespaces.
    // //
    // //  You can use the NPM package "html-minifier".
    // //
    // //  See homework guide document for more info.
    // // -----------------------------------------------

    var address = '/Users/idaly666/Desktop/onexi/hw-bubbles/ottermegazord/catalog/catalog.txt';
    var input = fs.readFileSync(address, 'utf8');
    var output = input.replace(/\r/g, '');
    output = output.replace(/\n/g, '');
    fs.writeFileSync(address, output);
    //console.log(output);
    return output;
};

exercise.five = function(){
    // // -----------------------------------------------
    // //   YOUR CODE
    // //
    // //  Load your scrubbed HTML into the DOM.
    // //  Use the DOM structure to get all the courses.
    // //
    // //  Return an array of courses.
    // //
    // //  You can use the NPM package "cheerio".
    // //
    // //  See homework guide document for more info.
    // // -----------------------------------------------
    //
    //
    var address = '/Users/idaly666/Desktop/onexi/hw-bubbles/ottermegazord/catalog/catalog.txt';
    var body = fs.readFileSync(address, 'UTF8');
    var $ = cheerio.load(body);

    var courseTitles = [];
    $('h3').each(function(i,element){
        courseTitles.push($(element).text());
    });

    console.log(courseTitles);
    return courseTitles;

};

exercise.six = function(){
    // // -----------------------------------------------
    // //   YOUR CODE
    // //
    // //  Return an array of course titles.
    // //
    // //  You can use the NPM package cheerio.
    // //
    // //  See homework guide document for more info.
    // // -----------------------------------------------
    var address = '/Users/idaly666/Desktop/onexi/hw-bubbles/ottermegazord/catalog/catalog.txt';
    var body = fs.readFileSync(address, 'UTF8');
    var $ = cheerio.load(body);

    var courseTitles = [];
    $('h3').each(function(i,element){
        courseTitles.push($(element).text());
    });

    // console.log(courseTitles);
    return courseTitles;
};

exercise.seven = function(){
    // // -----------------------------------------------
    // //   YOUR CODE
    // //
    // //  Filter out punctuation, numbers,
    // //  and common words like "and", "the", "a", etc.
    // //
    // //  Return clean array.
    // //
    // //  See homework guide document for more info.
    // // -----------------------------------------------
    var courseTitles = exercise.six();
    var words = courseTitles.map(puncRemover);


    function puncRemover(title){
        var cleaned = title.toLowerCase().match(/([a-z]+)/g);
        return cleaned;
    }

    // console.log(courseTitles.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));

    function removeCommonWords(words, common) {
        common.forEach(function(obj) {
            var word = obj.word;
            while (words.indexOf(word) !== -1) {
                words.splice(words.indexOf(word), 1);
            }
        });
        return words;
    };

    words = removeCommonWords(words, common);

    console.log(words);
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
};


module.exports = exercise;
