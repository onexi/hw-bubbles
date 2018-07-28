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


    var courseArray=['http://student.mit.edu/catalog/m1a.html',
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
    'http://student.mit.edu/catalog/mSPa.html']; //goes to 21gs

    //console.log(courseArray);
    return courseArray;
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

    //npm init creates package.json ->holds configuration for the application. Placeholder in this case
    //npm install request --save
    var importmod = require('./importmod.js');
    var request = require('request'); //request is an npm package
    var fs=require('fs');


    //var url='http://www.mit.edu/index.html';//static

// var urls = [
//     'http://student.mit.edu/catalog/m1a.html',
//     'http://student.mit.edu/catalog/m1b.html',
//     'http://student.mit.edu/catalog/m1c.html'
// ];

var urls=exercise.one();

urls.forEach(function(url,i){

	var page = importmod.get(url);
	page.then(function(body){
		//console.log(body);
		var filename = 'catalog/data' + i + '.txt';
		return importmod.save(body,filename);
	}).
	then(function(msg){
		//console.log(msg);
	});

});

    //get webpage
//     var pageReturn = new Promise(function(resolve,reject){

//         function callback(error, response, body){
//         request(url,callback);
//             if(!error){
//                 resolve(body);
//                 console.log(body);
//                 //fs.writeFile('testfile.txt',body,)        
//             }else{
//                 //console.log(error); //its borked
//                 reject(error);
//             }
//         }
    
// pageReturn.then(function(msg){
//     console.log(msg);
//  });

//     });



//function

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

    var fs=require('fs');
    var bigtext;
    // if (fs.exists('catalog/catalog.txt')){
        
    // };
    var filelist=fs.readdirSync('catalog');
    //console.log(filelist);
    var textarray=filelist.map(function(item){
        if (item!=='catalog.txt'){return fs.readFileSync('catalog/'+item,'utf8');}
    });
    //console.log(textarray);
    //fs.appendFile('catalog/catalog.txt','dummydata',function(err){});
//fs.readFile('catalog/data0.txt')
    var textstring=textarray.join('');
    fs.writeFileSync('catalog/catalog.txt',textstring);
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
var fs=require('fs');
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


var expression=/<h3>(.*?)<I>/g;
data=exercise.four();
var matches=data.match(expression);
//console.log(matches);
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

var data=exercise.four();
var $ = cheerio.load(data);
var titles = [];
$('h3').each(function(i, title){
	titles.push($(title).text());
});
//console.log(titles);
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
    var words = titles.map(function (title) {
        return title.toLowerCase().match(/([a-z]+)/g);
    });

    // var cleaner = words.filter(function (item) {
    //     var xnay = ['a', 'i', 'an,', 'and', 'j', 'the', 'of', 'to', 'for']
    //     var filt=xnay.reduce(function (total, subitem) {
    //         if (total == false || item === subitem) {
    //             total = false;
    //         }
    //         return total;
    //     }, true)
    //     return filt;
    // })
    //console.log(cleaner);
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
var input=exercise.seven()
//var flattened=input.concat();

var flattened=[].concat.apply([],input);

    var cleaner = flattened.filter(function (item) {
        var xnay = ['a', 'i', 'an,', 'and', 'j', 'the', 'of', 'to', 'for','in','s','d','was']
        var filt=xnay.reduce(function (total, subitem) {
            if (total == false || item === subitem) {
                total = false;
            }
            return total;
        }, true)
        return filt;
    })
    //console.log(cleaner);
//console.log(flattened);
return cleaner;
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

var fs=require('fs');
var inputlist=exercise.eight();
var wordarr={};

for(var i=0;i<inputlist.length;i++){
wordarr[inputlist[i]]=(wordarr[inputlist[i]]||0)+1;
}

console.log(wordarr);
var wordstring=JSON.stringify(wordarr);
wordstring='scores='+wordstring;
fs.writeFileSync('catalogGraphing/catalog_data.js',wordstring);
return wordarr;
};


module.exports = exercise;
