var exercise = {};

exercise.one = function(){
var courseArray=[];
var abc=['a','b','c','d','e','f','g'];
//add course 1-24 

    for (var i=1; i<19;i++)
    {courseArray.push("http://student.mit.edu/catalog/m"+i+"a.html");}


//add special programs list to the array
    courseArray.push('http://student.mit.edu/catalog/mCCa.html');
    courseArray.push('http://student.mit.edu/catalog/mCSBa.html');
    courseArray.push('http://student.mit.edu/catalog/mECa.html');
    courseArray.push('http://student.mit.edu/catalog/mEMa.html');
    courseArray.push('http://student.mit.edu/catalog/mESa.html');
    courseArray.push('http://student.mit.edu/catalog/mHSTa.html');
    courseArray.push('http://student.mit.edu/catalog/mIDSa.html');
    courseArray.push('http://student.mit.edu/catalog/mMASa.html');
    courseArray.push('http://student.mit.edu/catalog/mSCMa.html');
    courseArray.push('http://student.mit.edu/catalog/mASa.html');
    courseArray.push('http://student.mit.edu/catalog/mMSa.html');
    courseArray.push('http://student.mit.edu/catalog/mNSa.html');
    courseArray.push('http://student.mit.edu/catalog/mSTSa.html');
    courseArray.push('http://student.mit.edu/catalog/mSWEa.html');
    courseArray.push('http://student.mit.edu/catalog/mSPa.html');
    
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
return courseArray;
;
};
// console.log(exercise.one());
//define a variable that stores the output dat for exercise.one


// console.log(url);
//require all the npms
var fs = require('fs');
var request=require('sync-request');
var minify= require('html-minifier').minify;
var cheerio=require('cheerio');

var url=exercise.one();
exercise.two = function(){

//     var fetch = require('node-fetch');
//     var fs = require('fs');
    
//     const writeFile = (path, data, opts = 'utf8') =>
//         new Promise((res, rej) => {
//             fs.writeFile(path, data, opts, (err) => {
//                 if (err) rej(err)
//                 else res()
//         })
//     })

//     var makeRequest = async function (url,counter) {
//         var res = await fetch(url);
//         var counter_1=counter+1;
//         await writeFile('./catalog/' +  counter_1 + '.html', await res.text());
//         return 'done - ' + counter;        
//     };  
//     console.log(url);
  //  
    // url.forEach(function(url,i){
    //     makeRequest(url,i).then((result) =>{
    //     console.log(result);    
    //     });    
   
    // })

   //synchronize
   
   url.forEach(function(url,index){
       var res=request('GET', url);
       var filename='./catalog/'+index+'.html';
       fs.writeFileSync(filename,res.getBody().toString());
    });

    };
 
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
exercise.two();

    
exercise.three = function(){   
    
//put all the html files locations in the file
var fs = require('fs');
    var file=[];
    for (var i=1; i<20;i++)
    {file.push('./catalog/'+ i +'.html');}
    file.forEach(function(file, index){
        var data=fs.readFileSync(file);
        console.log('adding'+file+'to the txt');
        fs.appendFileSync('./catalog/catalog.txt', data)});
    };

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

exercise.three();
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

    var data=fs.readFileSync('./catalog/catalog.txt');
    var scrub=minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS: true, 
        minifyCSS: true
    });
// what does /'/g mean
    var cleaned=scrub.replace(/'/g,'')
    fs.writeFileSync('./catalog/clean.txt', cleaned);
};

exercise.four();
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
     var dataclean=fs.readFileSync('./catalog/clean.txt');
     //use cheerio to allow to put out the H3 text
     var $=cheerio.load(dataclean);
     var course=[];
     $('h3').each(function(i, element){
         //get the text between h3
         course.push($(element).text());
    
        }); 
        return course;
       
};
exercise.four();
var course=exercise.five();
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
    var dataclean=fs.readFileSync('./catalog/clean.txt');
    //use cheerio to allow to put out the H3 text
    var $=cheerio.load(dataclean);
    var titles=[];
    $('h3').each(function(i, element){
        //get the text between h3
        titles.push($(element).text());
       });  
    return titles;
};
exercise.five();
var titles=exercise.six();
// console.log(titles);

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
    var titles=exercise.six();
    var words=titles.map(function(title){
        return title.toLowerCase().match(/([a-z])+/g);   
    });
    return words;
};
exercise.six();
var words=exercise.seven();
console.log(words);

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
var words=exercise.seven();
var wordsFlat=words.reduce(function(previous, current){
    return previous.concat(current);
}, []);
return wordsFlat;
console.log(wordsFlat);
};
exercise.eight();
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
    var wordsFlat=exercise.eight();
    
    var scores=wordsFlat.reduce(function(previous, current){
        if (current in previous){
            previous[current] += 1;
        }
        else {previous[current]=1;}
        return previous;
    }, {});
console.log(scores);
return scores;
};
exercise.nine();
var scores=exercise.nine();
module.exports = scores;
