var shell = require('shelljs');
var fs = require('fs');
var cheerio = require('cheerio');

var exercise = {};
var URLs = [
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
    'http://student.mit.edu/catalog/mCMSa.html',
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
    'http://student.mit.edu/catalog/mSPa.html',
];

exercise.one = function(){

    return URLs;
};

exercise.two = function(){

    URLs.forEach(function(url, i) {
        var filename = 'm'+i+'.html';
        var command = 'curl '+url+' > '+filename;
    });

    return URLs;
}; 


exercise.three = function(){

    fs.writeFileSync('./catalog/catalog.txt', '');
    var folder = fs.readdirSync('./catalog');
    folder.shift();
    var files = folder.forEach(function(file){
        var page = fs.readFileSync('./catalog/'+file);
        var finalPage = fs.appendFileSync('./catalog/catalog.txt', page);
    });
};

exercise.four = function(){

    var path = './catalog/catalog.txt';
    var content = fs.readFileSync(path, "utf-8");

    content = content.replace(/\n/g, '');
    content = content.replace(/\r/g, '');

    fs.writeFileSync(path, content);

};

exercise.five = function(){

    var filename = './catalog/catalog.txt';
    var data = fs.readFileSync(filename);

    var $ = cheerio.load(data);

    var courses = [];

    $('h3').each(function(i,element){
        courses.push($(element).text());
    });

    return courses;
};

exercise.six = function(){

    var courses = exercise.five();
    return courses;
};

exercise.seven = function(){

    var courses = exercise.six();

    var words = courses.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });

    var CommonWords = ['a', 'an', 'and', 'the', 'of' , 'in', 'for', 'j', 'to', 'i', 'ii'];

    words = words.map(function(word) {
        return word.filter(function(w) {
            if (CommonWords.includes(w)) {
                return false;
            }
            else {
                return true;
            }
        });
    });

    return words;
};

exercise.eight = function(){

    var words = exercise.seven();

    var wordsFlat = words.reduce(function(previous, current) {
        return previous.concat(current);
    }, []);

    return wordsFlat;
};

exercise.nine = function(){

    var wordsFlat = exercise.eight();

    var wordCount = wordsFlat.reduce(function(prev, curr) {
        if (curr in prev) {
            prev[curr] += 1;
        }
        else{
            prev[curr] = 1;
        }

        return prev;
    }, {});
    return wordCount;
};

module.exports = exercise;
