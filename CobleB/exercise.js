var cheerio = require('cheerio');
var fs = require('fs');
var exercise = {};
//var handle = cheerio.load(courseList);

exercise.one = function(){
  
    var courses = ['http://student.mit.edu/catalog/m1a.html',
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

    return courses;

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
};

exercise.two = function(){

    var getCourses = exercise.one();

    require('shelljs/global');
    
    function download(item, index, array){
        exec('curl '+getCourses[index]+' > catalog/Page'+index+'.html');
    }

//getCourses.forEach(download);

return getCourses;
    
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
};

exercise.three = function(){

    var docs = fs.readdirSync('./catalog');

    fs.writeFileSync('./catalog/catalog.txt', '');

    var content = ''

    docs.forEach(function(course, counter) {
        if (course != 'catalog.txt') {
            var body = fs.readFileSync('./catalog/'+course, 'utf8');
            content += body;
        }
    });

    fs.writeFileSync('./catalog/catalog.txt', content);

    // docs.forEach(function(course, counter){
    //     if(course != 'catalog.txt'){
    //         var body = fs.readFileSync('./catalog/'+course, 'utf8');
    //         fs.appendFileSync('./catalog/catalog.txt',body);
    //     }
        
    // });

    return docs;

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

    var body = fs.readFileSync('./catalog/catalog.txt','utf8');

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
    var courses = fs.readFileSync('./catalog/catalog.txt','utf8');
    var $ = cheerio.load(courses);
    var matches = [];

    $('h3').each(function(i,element){
        matches.push($(element).text());
    });

    return matches;
};

exercise.six = function(){

    var courses = fs.readFileSync('./catalog/catalog.txt','utf8');
    var $ = cheerio.load(courses);
    var matches = [];

    $('h3').each(function(i,element){
        matches.push($(element).text());
    });

    return matches;
};

    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return an array of course titles.
    //
    //  You can use the NPM package cheerio.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------


exercise.seven = function(){
  
   /*
    split array by spaces
    array: 'remove'

    
    titles = titles.map(function(title){
    title = titles.split(" ");
    return title;
})

var titles = [
    '1.00 Eng Computation and Data and Science',
    '6.867 Machine Learning in Computers'
];
*/
var matches = exercise.six();
//console.log(matches);
var commonWords = ['and', 'in', 'the','to','for','a', 'on','j','b','i','ii','of'];

var titles1 = matches.map(function(title){
    return title.toLowerCase().match(/([a-z]+)/g);
})


var titles = titles1.map(function(title1) {

   // var splitArray = title.split('');
//console.log(titles1);
    var filteredArray = title1.filter(function(word) {
        if (commonWords.includes(word)){
            return false;
        }else{
            return true;
        }
    });

    return filteredArray;
});
//console.log(titles);
return titles;





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
};

exercise.eight = function(){

    var data = exercise.seven();
 
    var wordsFlat = data.reduce(function(previous, current) {
        return previous.concat(current);
    }, []);
 
 return wordsFlat;
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
    var wordCount = exercise.eight();
    var wordSum = {};
    

    for(i=0;i<wordCount.length;i++){

        var word = wordCount[i];
            if(word in wordSum)
            {
                wordSum[word]+=1;
            }else{
                wordSum[word]=1;
            }
        }
        //console.log(wordSum);
        return wordSum;
    }
    // var counted = wordCount.forEach(function(element, index, array){
    //     if(!wordSum.contains(element)){
    //         wordSum.element = 1;
    //     }else{
    //         wordSum.element+=1;
    //     }
    //     console.log(counted);




module.exports = exercise;
