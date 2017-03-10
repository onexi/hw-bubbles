var exercise = {};
var url = {};
//var courselist = [];
var titles = [];
var filtered = [];
var keywords = [];
var freqMap = {};

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

    url = ['http://student.mit.edu/catalog/m1a.html', 'http://student.mit.edu/catalog/m1b.html', 'http://student.mit.edu/catalog/m1c.html', 
    'http://student.mit.edu/catalog/m2a.html', 'http://student.mit.edu/catalog/m2b.html', 'http://student.mit.edu/catalog/m2c.html',
    'http://student.mit.edu/catalog/m3a.html', 'http://student.mit.edu/catalog/m3b.html',
    'http://student.mit.edu/catalog/m4a.html', 'http://student.mit.edu/catalog/m4b.html','http://student.mit.edu/catalog/m4c.html','http://student.mit.edu/catalog/m4d.html', 'http://student.mit.edu/catalog/m4e.html','http://student.mit.edu/catalog/m4f.html','http://student.mit.edu/catalog/m4g.html',
    'http://student.mit.edu/catalog/m5a.html', 'http://student.mit.edu/catalog/m5b.html',
    'http://student.mit.edu/catalog/m6a.html', 'http://student.mit.edu/catalog/m6b.html', 'http://student.mit.edu/catalog/m6c.html', 
    'http://student.mit.edu/catalog/m7a.html', 
    'http://student.mit.edu/catalog/m8a.html', 'http://student.mit.edu/catalog/m8b.html',
    'http://student.mit.edu/catalog/m9a.html', 'http://student.mit.edu/catalog/m9b.html',
    'http://student.mit.edu/catalog/m10a.html', 'http://student.mit.edu/catalog/m10b.html',
    'http://student.mit.edu/catalog/m11a.html', 'http://student.mit.edu/catalog/m11b.html', 'http://student.mit.edu/catalog/m11c.html',
    'http://student.mit.edu/catalog/m12a.html', 'http://student.mit.edu/catalog/m12b.html', 'http://student.mit.edu/catalog/m12c.html',
    'http://student.mit.edu/catalog/m14a.html', 'http://student.mit.edu/catalog/m14b.html',
    'http://student.mit.edu/catalog/m15a.html', 'http://student.mit.edu/catalog/m15b.html','http://student.mit.edu/catalog/m15c.html',
    'http://student.mit.edu/catalog/m16a.html', 'http://student.mit.edu/catalog/m16b.html',
    'http://student.mit.edu/catalog/m17a.html', 'http://student.mit.edu/catalog/m17b.html',
    'http://student.mit.edu/catalog/m18a.html', 'http://student.mit.edu/catalog/m18b.html',
    'http://student.mit.edu/catalog/m20a.html', 
    'http://student.mit.edu/catalog/m21a.html', 
    'http://student.mit.edu/catalog/m21Aa.html', 
    'http://student.mit.edu/catalog/mCMSa.html', 
    'http://student.mit.edu/catalog/m21Wa.html', 'http://student.mit.edu/catalog/m21Wb.html',
    'http://student.mit.edu/catalog/m21Ga.html', 'http://student.mit.edu/catalog/m21Gb.html', 'http://student.mit.edu/catalog/m21Gc.html', 'http://student.mit.edu/catalog/m21Gd.html', 'http://student.mit.edu/catalog/m21Ge.html', 'http://student.mit.edu/catalog/m21Gf.html', 'http://student.mit.edu/catalog/m21Gg.html', 'http://student.mit.edu/catalog/m21Gh.html', 'http://student.mit.edu/catalog/m21Gq.html', 'http://student.mit.edu/catalog/m21Gr.html', 'http://student.mit.edu/catalog/m21Gs.html',
    'http://student.mit.edu/catalog/m21Ha.html', 'http://student.mit.edu/catalog/m21Hb.html',
    'http://student.mit.edu/catalog/m21La.html', 
    'http://student.mit.edu/catalog/m21Ma.html', 'http://student.mit.edu/catalog/m21Mb.html',
    'http://student.mit.edu/catalog/mWGSa.html', 
    'http://student.mit.edu/catalog/m22a.html', 'http://student.mit.edu/catalog/m22b.html', 'http://student.mit.edu/catalog/m22c.html',
    'http://student.mit.edu/catalog/mCCa.html', 
    'http://student.mit.edu/catalog/mCSBa.html', 
    'http://student.mit.edu/catalog/mECa.html', 
    'http://student.mit.edu/catalog/mEMa.html', 
    'http://student.mit.edu/catalog/mESa.html', 
    'http://student.mit.edu/catalog/mHSTa.html', 'http://student.mit.edu/catalog/mHSTb.html',
    'http://student.mit.edu/catalog/mIDSa.html', 
    'http://student.mit.edu/catalog/mMASa.html', 
    'http://student.mit.edu/catalog/mSCMa.html', 
    'http://student.mit.edu/catalog/mASa.html', 
    'http://student.mit.edu/catalog/mMSa.html', 
    'http://student.mit.edu/catalog/mNSa.html', 
    'http://student.mit.edu/catalog/mSTSa.html', 'http://student.mit.edu/catalog/m20b.html',
    'http://student.mit.edu/catalog/mSWEa.html',
    'http://student.mit.edu/catalog/mSPa.html', 
    ];
    return url;
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
/*
    var request = require('shelljs/global');
    function download (item, counter, array){
        exec('cd catalog && curl -O ' + item);
    }
    url.forEach(download);
 
*/
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

var fs = require ('fs');
var request = require('shelljs/global');

function AppendFiles (File, AppendFile) {

    var p = new Promise (function (resolve, reject){  
        fs.readFile(AppendFile, (err, data) => {
            if (err) reject (err);
            else { 
                resolve (data);
            }
        });
    })   

    p.then (function (data){
        fs.appendFile(File, data, (err) => {
            if (err) throw err;
        });
    })

};

function Merge (item, counter, array){
    var Filename = item.substring(31);
    var appendFile = './catalog/'+Filename;
    AppendFiles (file, appendFile);
};

var file = './catalog/catalog.txt';
url.forEach(Merge);

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
    var fs = require ('fs');
    //  var minify = require('html-minifier').minify;
    var catFile = './catalog/catalog.txt';
    
        var text = fs.readFileSync(catFile, encoding='utf8');
/*
        var min = minify(str, {
            removeEmptyElements: true,
            removeTagWhitespace: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true
        });
*/

        var min = text.replace(/\s+/g, " ");
        //  var min = text.replace(/\r\n/g, "");
        fs.writeFile(catFile, min, function(err) {
            if(!err) 
            {console.log("Q4-3: File saved successfully! "); 
        }
    });
    return min; 
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

    var fs = require ('fs');
    var catFile = './catalog/catalog.txt';
    var text = fs.readFileSync(catFile, encoding='utf8'); 
    var matches = [];

    var expression = /<h3>(.*?)<I>/g;
    matches = text.match(expression);
   // console.log('matches: '+matches[1]);

    return matches;   
 
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
    var fs = require ('fs');
    var catFile = './catalog/catalog.txt';

    var text = fs.readFileSync(catFile, encoding='utf8');
    var $ = cheerio.load(text);
    $('h3').each(function(i, element){
        titles[i] = $(this).text();
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

    var filter = titles.map(function(item) {
        var fil = item.replace(/and | a |the |of |at |in |on |the |The |for |in | I | II| III|, |[J]|[0-9]|\.|\[|\]|\-|\:/g, "");
       var fil2 = fil.split('.'|'[]').join("");
       // console.log('Q6: filtered:    ' + fil2);
        return (fil);
    });

    filtered = filter;
return filter;
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


    function lowerC(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    }

    var WordsArray = filtered.map(lowerC);

   //console.log('Q8: Words Array : '+WordsArray[2]);


    function flatten (item, counter, array){
        keywords.push(item);
    };

    WordsArray.reduce(function(prev, curr){
        curr.forEach(flatten);   
    }, []);

  // console.log('Q8: keywords : '+keywords[7]);
   
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
    // --------------
    var freqMap = {};
    var fs = require('fs');


    keywords.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    //console.log('Q9 freqMap: ' +freqMap['systems'] );


    var str = 'var scores ='+ JSON.stringify(freqMap)+';';

   // console.log('Q9 Str: ' +str );

    fs.writeFile('./freqMap.js', str, function(err) {
            if(!err) {
            }
        });

};

module.exports = exercise;
