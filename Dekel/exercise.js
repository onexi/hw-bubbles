var exercise = {};
var cheerio = require('cheerio');//
var fs = require('fs');//libraryfilesystem(partofnode)
var request = require('request');//
var htmlminify = require('html-minify');
var urls = [];
var source = 'http://student.mit.edu/catalog/';



exercise.one = function (url) {
    //-----------------------------------------------
    //YOURCODE
    //
    //Returntheaddressofallthehtmlpagesin
    //theMITcoursecatalog-stringarray.
    //Forexample,thefirstpageforCourse1is:
    //http://student.mit.edu/catalog/m1a.html
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------
    var array = ['m1a.html', 'm2a.html', 'm3a.html', 'm4a.html', 'm5a.html', 'm6a.html', 'm7a.html', 'm8a.html', 'm9a.html', 'm10a.html', 'm11a.html', 'm12a.html', 'm14a.html', 'm15a.html', 'm16a.html', 'm17a.html', 'm18a.html', 'm20a.html', 'm21a.html', 'm21Aa.html', 'mCMSa.html', 'm21Wa.html', 'm21Ga.html', 'm21Ha.html', 'm21La.html', 'm21Ma.html', 'mWGSa.html', 'm22a.html', 'm24a.html', 'mCCa.html', 'mCSBa.html', 'mECa.html', 'mEMa.html', 'mESa.html', 'mHSTa.html', 'mIDSa.html', 'mMASa.html', 'mSCMa.html', 'mASa.html', 'mMSa.html', 'mNSa.html', 'mSTSa.html', 'mSWEa.html', 'mSPa.html'];    // console.log('<<array printout>> ' + array);

    var page = exercise.get(url);
    page.then(function (body) {
        var $ = cheerio.load(body);
        $('li a').each(function (i) {
            var temp = $(this).attr('href');
            urls.push(temp);
        });
        // console.log('<<urls printout>> ' + urls);

    });
    if (urls.length == 0) { return array; } else { return urls; };

};
exercise.get = function (url) {
    return p = new Promise(function (resolve, reject) {
        function callback(error, response, body) {
            if (!error) {
                resolve(body);
            }
            else { reject(error); };
        };
        request(url, callback);
    });
};
exercise.two = function (url) {
    //EX2---------------------------------------------
    //YOURCODE
    //
    //Downloadeverycoursecatalogpage.
    //
    //YoucanusetheNPMpackage"request".
    //OrcurlwiththeNPMpackageshelljs.
    //
    //Saveeverypageto"your_folder/catalog"
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------
    site_array = exercise.one(url);
    //console.log("<<site array>>" + site_array);
    //console.log("<<type of site_array>>" + typeof site_array);

    site_array.forEach(function (url, i) {
        var target = source + url;
        var page = exercise.get(target);
        page.then(function (body) {
            var filename = 'catalog/' + url;
            return exercise.save(body, filename);
        }).then(function (msg) {
        });
    });
};
exercise.save = function (data, filename) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filename, data, function (err) {
            if (err) { console.log('<<error 2>>'); reject(error); }
            resolve('The ' + filename + ' was saved succesfully!')
        });
    });
};
exercise.getFiles = function (location) {
    return new Promise(function (resolve, reject) {

        //code to read a file 
        fs.readdir(location, function (error, files) {
            if (error) { console.log('<<getfiles error>>'); reject(error); }
            resolve(files);
        });
    });
};

exercise.read = function (filename, i) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (error, data) {
            if (!error) {
                resolve(data)
            }
            else { reject(error); };
        });
    });
};

exercise.three = function () {
    //-----------------------------------------------
    //YOUR CODE
    //
    //Combine all files in to one,
    //saveto"your_folder/catalog/catalog.txt"
    //
    //YoucanusethefilesystemAPI,
    //https://nodejs.org/api/fs.html
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------
    //Read from files
    var combinedBody = [];
    var arr = exercise.getFiles('Catalog/');
    //console.log('<<check arr>> ' + arr);
    arr.then(function (files) {
        files.forEach(function (file, i) {
            //console.log('<<File>> ' + file);
            var body = exercise.read('catalog/' + file, i);
            //console.log('<<body>> ' + body);
            body.then(function (struct) {
                //   console.log(i);
                if (i > 0) {
                    combinedBody += String(struct);
                }
                else {
                    combinedBody = String(struct);
                };

            }).
                then(function () {
                    var filename = 'catalog/catalog.txt';
                    return exercise.save(combinedBody, filename);
                }).then(function (msg) { });
        });
    });



};


exercise.four = function () {
    //-----------------------------------------------
    //YOURCODE
    //
    //Removelinebreaksandwhitespaces
    //fromthefile.Returnastringof
    //scrubbedHTML.Inotherwords,HTMLwithout
    //linebreaksorwhitespaces.
    //
    //YoucanusetheNPMpackage"html-minifier".
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------

    var text = exercise.read('catalog/catalog.txt');
    text.then(function (body) {
        var result = htmlminify(body, { collapseWhitespace: true }); //does not recognize html-minifier
        return result
    });
};

exercise.five = function () {
    //-----------------------------------------------
    //YOURCODE
    //
    //LoadyourscrubbedHTMLintotheDOM.
    //UsetheDOMstructuretogetallthecourses.
    //
    //Returnanarrayofcourses.
    //
    //YoucanusetheNPMpackage"cheerio".
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------

    var $ = cheerio.load(exercise.five);
    var courses = [];

    $('h2').each(function (i, title) {
        courses.push($(title).text());
    });
    return courses;
};

exercise.six = function () {
    //-----------------------------------------------
    //YOURCODE
    //
    //Returnanarrayofcoursetitles.
    //
    //YoucanusetheNPMpackagecheerio.
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------
    var courses = exercise.five();
    var titles = [];

    $('h3').each(function (i, title) {
        titles.push($(title).text());
    });
    return titles;
};


exercise.seven = function () {
    //-----------------------------------------------
    //YOURCODE
    //
    //Filteroutpunctuation,numbers,
    //andcommonwordslike"and","the","a",etc.
    //
    //Returncleanarray.
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------
    var titles = exercise.six();
    var words = titles.map(function (title) {
        var junkwords = ['and','of', 'the', 'in', 'on', 'at', 'to', 'a', 'is'];
        var results = titles.toLowerCase().match(/([a-z]+)/g);
        var re = new RegExp('\\b(' + junkwords.join('|') + ')\\b', 'g');
        results = (titles || '').replace(re, '').replace(/[ ]{2,}/, ' ');
        return results;
    });
};


exercise.eight = function () {
    //-----------------------------------------------
    //YOURCODE
    //
    //Makeanarrayofwordsfromthetitles.
    //
    //Returnarrayofwords.
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------

var words = exercise.seven();
var wordsFlat = words.reduce(function (previous, current) {
    return previous.concat(current);
});

};
exercise.nine = function () {
    //-----------------------------------------------
    //YOURCODE
    //
    //Countthewordfrequency.
    //
    //Returnawordcountarray.
    //
    //Seehomeworkguidedocumentformoreinfo.
    //-----------------------------------------------

    
};


module.exports = exercise;//sharingtheexcerciseobjects;
