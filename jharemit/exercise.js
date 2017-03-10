var exercise = {};

exercise.one = function () {

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

    var urls = ['http://student.mit.edu/catalog/m1a.html',
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
                'http://student.mit.edu/catalog/m21Wa.html',
        'http://student.mit.edu/catalog/m21Wb.html',
                'http://student.mit.edu/catalog/m21Ha.html',
                'http://student.mit.edu/catalog/m21Hb.html',
                'http://student.mit.edu/catalog/m21La.html',
                'http://student.mit.edu/catalog/m21Ma.html',
                'http://student.mit.edu/catalog/m21Mb.html',
                'http://student.mit.edu/catalog/mWGSa.html',
        'http://student.mit.edu/catalog/m22a.html',
        'http://student.mit.edu/catalog/m22b.html',
        'http://student.mit.edu/catalog/m22c.html',
        'http://student.mit.edu/catalog/m24b.html',
        'http://student.mit.edu/catalog/m24a.html',
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
        'http://student.mit.edu/catalog/mSPa.html']
    return (urls);
};

exercise.two = function () {
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

    var urls = exercise.one()    //defines the array of URLs

    var fs = require('fs'); //file system package (part of java / nodejs maybe?)
    var request = require('request');

    exercise.get = function (url) {

        return new Promise(function (resolve, reject) {

            function callback(error, response, body) {
                if (!error) {
                    resolve(body);
                }
                else {
                    reject(error);
                }
            }
            request(url, callback);
        });
    };

    exercise.save = function (data, filename) { // saves the file to a local directory

        return new Promise(function (resolve, reject) {

            // write listings to file
            fs.writeFile(filename, data, function (err) {
                if (err) {
                    reject(error);
                }
                resolve(console.log('The ' + filename + ' was saved!'));
            });

        });

    };
    urls.forEach(function (url, i) {
        var page = exercise.get(url);
        page.then(function (body) {
            //console.log(body);
            var filename = 'catalog/data' + i + '.txt'; //defines the file name
            return exercise.save(body, filename); //calls the exercise to save to a directory
        })
        // .then(function(msg){  //can return another message for resolving the promise
        //     console.log(msg);  
        //})
    });

};

exercise.three = function () {
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
    var concat = require('concat-files');

    var allFiles = [];
    for (var i = 0; i <= 88; i++) { //creates an array of all the filed that need to be concated
        allFiles.push('./catalog/data' + i + '.txt')
    }
    concat(allFiles, './catalog/catalog.txt') //adds all the files into one file
};

exercise.four = function () {

    var fs = require('fs');
    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');

    body = body.replace(/\n/g, '');
    body = body.replace(/\r/g, '');
    fs.writeFileSync('./catalog/catalog.txt', body);

    return body;

};

exercise.five = function () {
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

    var fs = require('fs');

    //reading our giant concatenated file
    var body = exercise.four();

    //adds all titles and courses to an array of courses
    var expression = /<h3>(.*?)<br><I>/g;  //<h3> = starts with the header, (.*?) = everything in between the bolds, <\/b> closes the search
    var matches = body.match(expression);

    fs.writeFileSync('./catalog/titlesandcourses.txt', matches);
    return matches;
};

exercise.six = function () {
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
    var fs = require('fs');

    //reading our giant concatenated file
    var body = fs.readFileSync('./catalog/catalog.txt');

    //parsing the file using cheerio!
    var $ = cheerio.load(body);

    //adds all titles and courses to an array of courses
    var courses = [];
    $('h3').each(function (i, element) {
        var title = $(element).text();
        courses.push(title);
    });
    fs.writeFileSync('./catalog/titles.txt', courses)
    return courses;
};

exercise.seven = function () {
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
    var fs = require('fs');
    var words = titles.map(function (title) {
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    // var common = 'the, on, to, a, with, in, and, of, for,\n'
    //      + 'I, &, II, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, :, ., can\n'
    //      + 'new, through, (,),sts, upop, ';
    var common = 'and';
    for (var i=words.length-1; i>=0; i--) {
        if (words[i] === 'and') {
            words.splice(i, 1);
        }   
    }
    fs.writeFileSync('./catalog/words.txt',words)
    return words;
};
    exercise.eight = function () {
        // -----------------------------------------------
        //   YOUR CODE
        //
        //  Make an array of words from the titles.
        //
        //  Return array of words.
        //
        //  See homework guide document for more info.
        // -----------------------------------------------
    
        //what i'd like to do is concatenate my array of words into one giant array
    };

    exercise.nine = function () {
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
