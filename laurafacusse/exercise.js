var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheeriio = require('cheerio')
var fs = require('fs');

var exercise = {};

exercise.one = function(){


    console.log('--- Question 01 ---');

    var urls = [];
    urls.push('http://student.mit.edu/catalog/m1a.html');
    urls.push('http://student.mit.edu/catalog/m1b.html');
    urls.push('http://student.mit.edu/catalog/m1c.html');
    urls.push('http://student.mit.edu/catalog/m2a.html');
    urls.push('http://student.mit.edu/catalog/m2b.html');
    urls.push('http://student.mit.edu/catalog/m2c.html');
    urls.push('http://student.mit.edu/catalog/m3a.html');
    urls.push('http://student.mit.edu/catalog/m3b.html');
    urls.push('http://student.mit.edu/catalog/m4a.html');
    urls.push('http://student.mit.edu/catalog/m4b.html');
    urls.push('http://student.mit.edu/catalog/m4c.html');
    urls.push('http://student.mit.edu/catalog/m4d.html');
    urls.push('http://student.mit.edu/catalog/m4e.html');
    urls.push('http://student.mit.edu/catalog/m4f.html');
    urls.push('http://student.mit.edu/catalog/m4g.html');
    urls.push('http://student.mit.edu/catalog/m5a.html');
    urls.push('http://student.mit.edu/catalog/m5b.html');
    urls.push('http://student.mit.edu/catalog/m6a.html');
    urls.push('http://student.mit.edu/catalog/m6b.html');
    urls.push('http://student.mit.edu/catalog/m6c.html');
    urls.push('http://student.mit.edu/catalog/m7a.html');
    urls.push('http://student.mit.edu/catalog/m8a.html');
    urls.push('http://student.mit.edu/catalog/m8b.html');
    urls.push('http://student.mit.edu/catalog/m9a.html');
    urls.push('http://student.mit.edu/catalog/m9b.html');
    urls.push('http://student.mit.edu/catalog/m10a.html');
    urls.push('http://student.mit.edu/catalog/m10b.html');
    urls.push('http://student.mit.edu/catalog/m11a.html');
    urls.push('http://student.mit.edu/catalog/m11b.html');
    urls.push('http://student.mit.edu/catalog/m11c.html');
    urls.push('http://student.mit.edu/catalog/m12a.html');
    urls.push('http://student.mit.edu/catalog/m12b.html');
    urls.push('http://student.mit.edu/catalog/m12c.html');
    urls.push('http://student.mit.edu/catalog/m14a.html');
    urls.push('http://student.mit.edu/catalog/m14b.html');
    urls.push('http://student.mit.edu/catalog/m15a.html');
    urls.push('http://student.mit.edu/catalog/m15b.html');
    urls.push('http://student.mit.edu/catalog/m15c.html');
    urls.push('http://student.mit.edu/catalog/m16a.html');
    urls.push('http://student.mit.edu/catalog/m16b.html');
    urls.push('http://student.mit.edu/catalog/m17a.html');
    urls.push('http://student.mit.edu/catalog/m17b.html');
    urls.push('http://student.mit.edu/catalog/m18a.html');
    urls.push('http://student.mit.edu/catalog/m18b.html');
    urls.push('http://student.mit.edu/catalog/m20a.html');
    urls.push('http://student.mit.edu/catalog/m21a.html');
    urls.push('http://student.mit.edu/catalog/m21Aa.html');
    urls.push('http://student.mit.edu/catalog/mCMSa.html');
    urls.push('http://student.mit.edu/catalog/m21Wa.html');
    urls.push('http://student.mit.edu/catalog/m21Wb.html');
    urls.push('http://student.mit.edu/catalog/m21Ga.html');
    urls.push('http://student.mit.edu/catalog/m21Gb.html');
    urls.push('http://student.mit.edu/catalog/m21Gc.html');
    urls.push('http://student.mit.edu/catalog/m21Gd.html');
    urls.push('http://student.mit.edu/catalog/m21Ge.html');
    urls.push('http://student.mit.edu/catalog/m21Gf.html');
    urls.push('http://student.mit.edu/catalog/m21Gg.html');
    urls.push('http://student.mit.edu/catalog/m21Gh.html');
    urls.push('http://student.mit.edu/catalog/m21Gq.html');
    urls.push('http://student.mit.edu/catalog/m21Gr.html');
    urls.push('http://student.mit.edu/catalog/m21Gs.html');
    urls.push('http://student.mit.edu/catalog/m21Ha.html');
    urls.push('http://student.mit.edu/catalog/m21Hb.html');
    urls.push('http://student.mit.edu/catalog/m21La.html');
    urls.push('http://student.mit.edu/catalog/m21Ma.html');
    urls.push('http://student.mit.edu/catalog/m21Mb.html');
    urls.push('http://student.mit.edu/catalog/mWGSa.html');
    urls.push('http://student.mit.edu/catalog/m22a.html');
    urls.push('http://student.mit.edu/catalog/m22b.html');
    urls.push('http://student.mit.edu/catalog/m24a.html');
    urls.push('http://student.mit.edu/catalog/m24b.html');
    urls.push('http://student.mit.edu/catalog/mCCa.html');
    urls.push('http://student.mit.edu/catalog/mCSBa.html');
    urls.push('http://student.mit.edu/catalog/mECa.html');
    urls.push('http://student.mit.edu/catalog/mEMa.html');
    urls.push('http://student.mit.edu/catalog/mESa.html');
    urls.push('http://student.mit.edu/catalog/mHSTa.html');
    urls.push('http://student.mit.edu/catalog/mHSTb.html');
    urls.push('http://student.mit.edu/catalog/mIDSa.html');
    urls.push('http://student.mit.edu/catalog/mMASa.html');
    urls.push('http://student.mit.edu/catalog/mSCMa.html');
    urls.push('http://student.mit.edu/catalog/mASa.html');
    urls.push('http://student.mit.edu/catalog/mMSa.html');
    urls.push('http://student.mit.edu/catalog/mNSa.html');
    urls.push('http://student.mit.edu/catalog/mSTSa.html');
    urls.push('http://student.mit.edu/catalog/mSTSb.html');
    urls.push('http://student.mit.edu/catalog/mSWEa.html');
    urls.push('http://student.mit.edu/catalog/mSPa.html');
    return urls;

};

exercise.two = function(){


    console.log('--- Question 02 ---');
    var urls = exercise.one();

    urls.forEach(function(url,index){
        var res = request('GET', url);
        var filename = './catalog/' + index + '.html';
        fs.writeFileSync(filename, res.getBody().toString());
    });
};

exercise.three = function(){

console.log('--- Question 03 ---');

var files = []
for (var i = 0; i < 87; i++) {
    files.push('./catalog/' + '.html');  
}

files.forEach(function(file,index){
    var data = fs.readFileSync(file);
    console.log('adding' + file + 'to catalogt.txt');
    fs.appendFileSync('./catalog/catalog.txt', data);
});

};


exercise.four = function(){

    console.log('--- Question 04 ---');

    var data = fs.readFileSync('./catalog/catalog.txt');

    var scrubbed = minify(data.toString(), {
        collapseWhitespace: true,
        minifyJS : true,
        minifyCSS : true
    });

    var clean = scrubbed.replace(/'/g,'')
    fs.writeFileSync('./catalog/clean.txt', clean);

};


    exercise.five = function(){

        console.log('--- Question 05 ---');   

        var data = fs.readFileSync('./catalog/clean.txt');
        var $ = cheerio.load(data);
        var courses = [];

        $('h3').each(function(i,element){
            courses.push($(element).text());
        });

        return courses;

    };

    exercise.six = function(){

        console.log("--- Question 06 ---");

        var data = fs.readFileSync('./catalog/clean.txt');
        var $ = cheerio.load(data);
        var titles = [];

        $('h3').each(function(i,element){
            titles.push($(element).text());
        });

        return titles;
    };

    exercise.seven = function(){

        console.log('--- Question 07 ---');

        var titles = exercise.six();
        var words = titles.map(function(title){
            return title.toLowerCase().match(/([a-z]+)/g);
        });
        return words;
    };

    exercise.eight= function(){

        console.log('--- Question 08 ---');

        var words = exercise.seven();
        var wordsFlat = words.reduce(function(previous, current){
            return previous.concat(current);
        },[]);
        return wordsFlat;
    };

    exercise.nine = function(){

        console.log('--- Question 09 ---');

        var wordsFlat = exercise.eight();
        var scores = wordsFlat.reduce(function(previous,current){
           if(current in previous){
               previous[current] +=1;
           }
           else{
               previous[current]= 1;
           }
           return previous;
    },{});

    console.log(scores);
    return scores;

};

