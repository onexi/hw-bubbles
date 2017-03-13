var exercise = {};
var fs=require('fs');
var shelljs=require('shelljs');
var cheerio = require('cheerio');

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
    var output=[
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
 return output;
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
    
    // var urlList=exercise.one();
    // urlList.forEach(function(url,i,entireList){
		
	// 	shelljs.exec('curl '+url+'  > catalog/courseCatalog'+i+'.html');
		
	// });  
    // Done!
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
    // shelljs.exec(" > catalog/catalog.txt ");
    // var urlList=exercise.one();
    // urlList.forEach(function(url,i,entireList){
    //     shelljs.exec("curl "+ url +" >> catalog/catalog.txt");
    // });

    // DONE!

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
    var output = "";
    output=fs.readFileSync('./catalog/catalog.txt',"UTF8");
    output=output.replace(/\r\n/g," ");
    output=output.replace(/\n/g," ");
    fs.writeFileSync('./catalog/catalog.txt',output);
    return output;

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
    var str = fs.readFileSync('./catalog/catalog.txt', encoding='utf8'); 
    var output = str.match(/<h3>(.*?)<I>/g);

    return output;   
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
    var output=[];
    var str = fs.readFileSync('./catalog/catalog.txt'); 
    var $ = cheerio.load(str);
    $("h3").each(function(i,elmt){
        output.push($(elmt).text());
    });
    return output;
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
    var isCommon=['i', 'ii','j', 'to', 'a', 'an', 'and','of' , 'in', 'the',  'for'];
    var titles=exercise.six();
    var output=titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    output=output.map(function(arg){
        return arg.filter(function(filtee){
            if (isCommon.includes(filtee)){
                return false;
            }
            else {
                return true;
            }
        });
    });
    return output;
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
    // ----------------------------------------------
    var raw=exercise.seven();
    var output=raw.reduce(function(elmt1,elmt2){
        return elmt1+elmt2;
    },[]);

    return output;
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
    counts = {};
    for (var i = 0; i < words.length; i++) {
         if (typeof counts[words[i]] == 'undefined') {
             counts[words[i]] = 1;
         } else {
             counts[words[i]] += 1;
         };
     };
     console.log(counts);
     return counts;
};


module.exports = exercise;
