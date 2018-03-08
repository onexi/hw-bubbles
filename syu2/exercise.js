//synchronous  : wait, then move forward
//asynchronous : don't wait, really fast but messy and ugly

var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fs = require('fs');

var exercise = {};

exercise.one = function(){
    // var anchors = document.getElementsByTagName('a');
    // var hrefs = [];
    // for(var i = 0; i < anchors.length; i++){
    //     if(){
    //         hrefs.push(anchors[i].href)
    //     };
    // };

    console.log('---Question 01---')

    var urls = [];
    urls.push('http://student.mit.edu/catalog/m1a.html');
    urls.push('http://student.mit.edu/catalog/m2a.html');
    urls.push('http://student.mit.edu/catalog/m3a.html');
    urls.push('http://student.mit.edu/catalog/m4a.html');
    urls.push('http://student.mit.edu/catalog/m5a.html');
    urls.push('http://student.mit.edu/catalog/m6a.html');
    urls.push('http://student.mit.edu/catalog/m7a.html');
    urls.push('http://student.mit.edu/catalog/m8a.html');
    urls.push('http://student.mit.edu/catalog/m9a.html');
    urls.push('http://student.mit.edu/catalog/m10a.html');
    urls.push('http://student.mit.edu/catalog/m11a.html');
    urls.push('http://student.mit.edu/catalog/m12a.html');
    urls.push('http://student.mit.edu/catalog/m13a.html');
    urls.push('http://student.mit.edu/catalog/m14a.html');
    urls.push('http://student.mit.edu/catalog/m15a.html');
    urls.push('http://student.mit.edu/catalog/m16a.html');
    urls.push('http://student.mit.edu/catalog/m17a.html');
    urls.push('http://student.mit.edu/catalog/m18a.html');
    urls.push('http://student.mit.edu/catalog/m20a.html');
    urls.push('http://student.mit.edu/catalog/m21Aa.html');
    urls.push('http://student.mit.edu/catalog/mCMSa.html');
    urls.push('http://student.mit.edu/catalog/m21Wa.html');
    urls.push('http://student.mit.edu/catalog/m21Ga.html');
    urls.push('http://student.mit.edu/catalog/m21Ha.html');
    urls.push('http://student.mit.edu/catalog/m21La.html');
    urls.push('http://student.mit.edu/catalog/m21Ma.html');
    urls.push('http://student.mit.edu/catalog/mWGSa.html');
    urls.push('http://student.mit.edu/catalog/m22a.html');
    urls.push('http://student.mit.edu/catalog/m24a.html');
    urls.push('http://student.mit.edu/catalog/mCCa.html');
    urls.push('http://student.mit.edu/catalog/mCSBa.html');
    urls.push('http://student.mit.edu/catalog/mECa.html');
    urls.push('http://student.mit.edu/catalog/mEMa.html');
    urls.push('http://student.mit.edu/catalog/mESa.html');
    urls.push('http://student.mit.edu/catalog/mHSTa.html');
    urls.push('http://student.mit.edu/catalog/mIDSa.html');
    urls.push('http://student.mit.edu/catalog/mMASa.html');
    urls.push('http://student.mit.edu/catalog/mSCMa.html');
    urls.push('http://student.mit.edu/catalog/mASa.html');
    urls.push('http://student.mit.edu/catalog/mMSa.html');
    urls.push('http://student.mit.edu/catalog/mNSa.html');
    urls.push('http://student.mit.edu/catalog/mSTSa.html');
    urls.push('http://student.mit.edu/catalog/mSWEa.html');
    urls.push('http://student.mit.edu/catalog/mSPa.html');

    return urls;
};

exercise.two = function(){

    console.log('---Question 02---')

    var urls = exercise.one();

    urls.forEach(function(url,index){
        var res= request('GET', url);
        var filename = './catalog/' + index + '.html';
        fs.writeFileSync(filename, res.getBody().toString());
    });

};

exercise.three = function(){

    console.log('---Question 03---')

    var files = [];
    for (var i = 0; i < 44; i++){
        files.push('./catalog/' + i + '.html');
    };

    files.forEach(function(file,index){
        var data = fs.readFileSync(file);
        console.log('adding' + file + ' to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt', data);
    });

};

exercise.four = function(){

    console.log('---Question 04---')

    var data = fs.readFileSync('./catalog/catalog.txt');

    var scrubbed = minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    });

    var clean = scrubbed.replace(/'/g,'');
    fs.writeFileSync('./catalog/clean.txt', clean);

};

exercise.five = function(){

    console.log('---Question 05---')

    var data = fs.readFileSync('./catalog/clean.txt');

    var $ = cheerio.load(data);

    var courses = [];

    $('h3').each(function(i,element){
        courses.push($(element).text());
    });

    return courses;

};

exercise.six = function(){

    console.log('---Question 06---')

    var data = fs.readFileSync('./catalog/clean.txt');

    var $ = cheerio.load(data);

    var titles = [];

    $('h3').each(function(i,element){
        titles.push($(element).text());
    });

    return titles;

};

exercise.seven = function(){

    console.log('---Question 07---')

    var titles = exercise.six();

    var words = titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });

    return words;

};

exercise.eight = function(){

    console.log('---Question 08---')

    var words = exercise.seven();
    var wordsFlat = words.reduce(function(previous,current){
        return previous.concat(current);
    },[]);
    return wordsFlat;

};

exercise.nine = function(){

    var wordsFlat = exercise.eight();

    var scores = wordsFlat.reduce(function(previous,current){
        if(current in previous){
            previous[current] += 1;
        }
        else{
            previous[current] = 1
        }
        return previous;
    },{});

    console.log(scores);
    return scores;

};


module.exports = exercise;
