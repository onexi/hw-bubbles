var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var minify = require('html-minifier').minify;

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

    var res = ['http://student.mit.edu/catalog/m1a.html',
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
        'http://student.mit.edu/catalog/mSPa.html'];
    return res;

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
    
    
    //////Scrape list!
    pList = exercise.one();

    //saving Promice
    var save = function (fileName, data) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(fileName, data, function (err) {
                if (err) reject(err);
                else resolve(fileName);
            })
        });
    }

    //getter Promise
    var get = function (url) {
        return new Promise(function (resolve, reject) {
            function cbf(err, resp, body) {
                if (err) reject(err);
                else resolve(body);
            };
            request(url, cbf)
        });
    };

    //save it!
    pList.forEach(function (el, i) {
        get(el).then(function (value) {
            var path = el.split('/');
            var fileName = './catalog/' + path[path.length - 1];
            return save(fileName, value);
        }).then(function (value) {
            // console.log(value + ' has been successfully written.');
        }).catch(function (reason) {
            console.log('has been rejected because :: ' + reason);
        });
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

    ///////////Make One Big file
    files = fs.readdirSync('./catalog').filter(function (el) {
        return /.html/.test(el);
    });

    var batchReader = function (files) {
        return files.reduce(function (p, c) {
            return p + fs.readFileSync('./catalog/' + c, 'utf8')
        }, '')
    };

    fs.writeFileSync('./catalog/catalog.txt', batchReader(files), 'utf8');






};

exercise.four = function () {
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

    //////////minify using minify
    // var s = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    // var minified = minify(s, { collapseWhitespace: true, preserveLineBreaks: false, minifyJS: true });
    // fs.writeFileSync('./catalog/catalog.txt', minified, 'utf8');
    // return minified;


    /////////minify usnig replace!
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

    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    cio = cheerio.load(body);

    var list = []
    cio('P + h3').each(function (i, el) {
        list.push(cio(this).text());
    });
    return list;
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

    //read htm file
    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    cio = cheerio.load(body);

    //fimd H3 Tags , and get their title from html
    var titleList = []
    cio('P + h3').each(function (i, el) {
        titleList.push(cio(this).text());
    });

    return titleList;
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
    
    
    //read stop words
    var stopWords = fs.readFileSync('stopWords.txt', 'utf8').replace(/\s/g,'').split(',');
    //read htm file
    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    cio = cheerio.load(body);

    //fimd H3 Tags, make title list
    var titles = []
    cio('P + h3').each(function (i, el) {
        titles.push(cio(this).text());
    });

    //clean and tokenize sentence
    var titlesCleaned = titles.map(function (el, i) {
        return el.toLowerCase().replace(/[^a-z\s]/g,'').replace(/^[a-z]\s/g, '').match(/[a-z]+/g);
        // .replace(/[^a-z\s]/g,'')
        // .replace(/^[a-z]\s/g, '')
        // .replace(/\s\s+/g, ' ').replace(/^\s/, '');
    });

    //remove stopwords
    var titlesFiltered = titlesCleaned.map(function(el) {
        var title = el.filter( function(word){
            if (stopWords.includes(word)) return false;
            else return true;
        })
        return title;
    });
    // console.log(words) match(/[a-z]+/g);
    // console.log(titlesFiltered);

    return titlesFiltered;



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
    //read stop words
    var stopWords = fs.readFileSync('stopWords.txt', 'utf8').replace(/\s/g,'').split(',');
    //read htm file
    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    cio = cheerio.load(body);

    //fimd H3 Tags, make title list
    var titles = []
    cio('P + h3').each(function (i, el) {
        titles.push(cio(this).text());
    });

    //clean and tokenize sentence
    var titlesCleaned = titles.map(function (el, i) {
        return el.toLowerCase().replace(/[^a-z\s]/g,'').replace(/^[a-z]\s/g, '').match(/[a-z]+/g);
        // .replace(/[^a-z\s]/g,'')
        // .replace(/^[a-z]\s/g, '')
        // .replace(/\s\s+/g, ' ').replace(/^\s/, '');
    });

    //remove stopwords
    var titlesFiltered = titlesCleaned.map(function(el) {
        var title = el.filter( function(word){
            if (stopWords.includes(word)) return false;
            else return true;
        })
        return title;
    });

    //flatten arrays
    var wordBag = titlesFiltered.reduce(function(p, c){
        return p.concat(c);
    },[]);

    console.log(wordBag);
    return wordBag;
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

    //read stop words
    var stopWords = fs.readFileSync('stopWords.txt', 'utf8').replace(/\s/g,'').split(',');
    //read htm file
    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');
    cio = cheerio.load(body);

    //fimd H3 Tags, make title list
    var titles = []
    cio('P + h3').each(function (i, el) {
        titles.push(cio(this).text());
    });

    //clean and tokenize sentence
    var titlesCleaned = titles.map(function (el, i) {
        return el.toLowerCase().replace(/[^a-z\s]/g,'').replace(/^[a-z]\s/g, '').match(/[a-z]+/g);
        // .replace(/[^a-z\s]/g,'')
        // .replace(/^[a-z]\s/g, '')
        // .replace(/\s\s+/g, ' ').replace(/^\s/, '');
    });

    //remove stopwords
    var titlesFiltered = titlesCleaned.map(function(el) {
        var title = el.filter( function(word){
            if (stopWords.includes(word)) return false;
            else return true;
        })
        return title;
    });

    //flatten arrays
    var wordBag = titlesFiltered.reduce(function(p, c){
        return p.concat(c);
    },[]);

    //make dictionary
    var wordDic = {}

    wordBag.forEach(function(el,i){
        if (wordDic[el]) wordDic[el]++ ;
        else wordDic[el] = 1;
    });
    
    fs.writeFileSync('catalog/ncCatData.json', JSON.stringify(wordDic), 'utf8');

    return wordBag;
    
};


module.exports = exercise;
