var exercise = require('./exercise.js');
var request = require('shelljs/global');

//defining global variables
exercise.one = function(){

    var courses = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'm11', 'm12', 'm14', 'm15', 'm16', 'm17', 'm18', 'm20', 'm21', 'm21A', 'mCMS', 'm21W', 'm21G', 'm21H', 'm21L', 'm21M', 'mWGS', 'm22', 'm24', 'mCC', 'mCSB', 'mEC', 'mEM', 'mES', 'mHST', 'mIDS', 'mMAS', 'mSCM', 'mAS','mMS', 'mNS', 'mSTS', 'mSWE', 'mSP']
    var course_options =['a.html', 'b.html', 'c.html', 'd.html', 'e.html', 'd.html', 'd.html' ]
    var part_urls=[];
    
    for (var i=0; i<courses.length; i++){
        for (var j=0; j<course_options.length; j++){
            part_urls.push(courses[i]+course_options[j]);
        }
    }

    var urls_2 = part_urls.map(function(element){
        return 'http://student.mit.edu/catalog/'+element;
    });

    return urls_2;

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
    var urls = exercise.one();
    var shell = require('shelljs/global');

    var valid_urls = urls.filter(function(url){
        if (exec('curl -i -s ' + url).stdout.indexOf("404 Not Found") == '-1'){
        return true;} else {
            return false};
    })
    var filenames=[];
    for (var u=0; u<valid_urls.length; u++){
        exec('curl '+valid_urls[u]+'> catalog/'+u+'_output.txt');
    }

    for (var m=0; m<valid_urls.length; m++){
        filenames.push(m+'_output.txt');
    }

    return filenames;
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

var fs = require('fs');
fs.writeFile("./catalog/catalog.txt", "");
var filenames=exercise.two();
//var filenames=['69_output.txt', '0_output.txt', '1_output.txt', '23_output.txt' ]
filenames.forEach(function(element){
    function getFileContent(srcPath, callback) { 
        fs.readFile('./catalog/'+element, 'utf8', function (err, data) {
            if (err) throw err;
            callback(data);
        });
    }
    function copyFileContent(savPath, srcPath) { 
        getFileContent('./catalog/'+element, function(data) {
            fs.writeFile ('./catalog/catalog.txt', data, function(err) {
                if (err) throw err;
                console.log('complete');
            });
        });
    }
    
});
};


//
  //      var content = fs.readFileSync('./catalog/'+element, function (err, data) {
//            if (err) throw err;
  //      });

    //    fs.appendFileSync('./catalog/catalog.txt', content, function (err) { if (err) throw err;
 //       });

    
//    var fs = require('fs');
 //   fs.writeFile("./catalog/catalog.txt", "");
   // var filenames=exercise.two();
//    filenames.forEach(function(element){
  //      var content = fs.readFile('./catalog/'+element, (err, data) => {
    //        if (err) throw err;
      //  });
//        fs.appendFile('./catalog/catalog.txt', content, (err) => {
 //           if (err) throw err;
  //          console.log("i have appended")
   //     });
  //  });

    //hadoop fs -text *_output.txt | hadoop fs -put - catalog.txt
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

exercise.four = function(){
    //return a string of HTML
    var reader = new FileReader();
    reader.onload = function(event) {
    var contents = event.target.result;
    console.log("File contents: " + contents);};
    
    reader.onerror = function(event) {
    console.error("File could not be read! Code " + event.target.error.code);
    };
    var input = reader.readAsText(catalog.txt);

    //scrub HTML
    var output = minify(input, { collapseWhitespace: true });

    return output
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
};

exercise.five = function(){
    var cheerio = require('cheerio');
    var courses = require('./catalog.txt');
    var exercise = {};
    var $ = cheerio.load(courses);

    return $
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
};

exercise.six = function(){
    exercise.getCourseTitles = function(){
    var CourseTitles = [];
    $('h3').each(function(i,element){
        CourseTitles.push($(element).text());
    });
    return CourseTitles;
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
};


module.exports = exercise;
