
var exercise = {};

exercise.one = function(){

    return [
        "http://student.mit.edu/catalog/m1a.html",
        "http://student.mit.edu/catalog/m1b.html",
        "http://student.mit.edu/catalog/m1c.html",  
        "http://student.mit.edu/catalog/m2a.html",
        "http://student.mit.edu/catalog/m2b.html",
        "http://student.mit.edu/catalog/m2c.html",
        "http://student.mit.edu/catalog/m3a.html",
        "http://student.mit.edu/catalog/m3b.html",
        "http://student.mit.edu/catalog/m4a.html",
        "http://student.mit.edu/catalog/m4b.html",
        "http://student.mit.edu/catalog/m4c.html",
        "http://student.mit.edu/catalog/m4d.html",
        "http://student.mit.edu/catalog/m4e.html",
        "http://student.mit.edu/catalog/m4f.html",
        "http://student.mit.edu/catalog/m4g.html",
        "http://student.mit.edu/catalog/m5a.html",
        "http://student.mit.edu/catalog/m5b.html",
        "http://student.mit.edu/catalog/m6a.html",
        "http://student.mit.edu/catalog/m6b.html",
        "http://student.mit.edu/catalog/m6c.html",
        "http://student.mit.edu/catalog/m7a.html",
        "http://student.mit.edu/catalog/m8a.html",
        "http://student.mit.edu/catalog/m8b.html",
        "http://student.mit.edu/catalog/m9a.html",
        "http://student.mit.edu/catalog/m9b.html",
        "http://student.mit.edu/catalog/m10a.html",
        "http://student.mit.edu/catalog/m10b.html",
        "http://student.mit.edu/catalog/m11a.html",
        "http://student.mit.edu/catalog/m11b.html",
        "http://student.mit.edu/catalog/m11c.html",
        "http://student.mit.edu/catalog/m12a.html",
        "http://student.mit.edu/catalog/m12b.html",
        "http://student.mit.edu/catalog/m12c.html",
        "http://student.mit.edu/catalog/m14a.html",
        "http://student.mit.edu/catalog/m14b.html",
        "http://student.mit.edu/catalog/m15a.html",
        "http://student.mit.edu/catalog/m15b.html",
        "http://student.mit.edu/catalog/m15c.html",
        "http://student.mit.edu/catalog/m16a.html",
        "http://student.mit.edu/catalog/m16b.html",
        "http://student.mit.edu/catalog/m17a.html",
        "http://student.mit.edu/catalog/m17b.html",
        "http://student.mit.edu/catalog/m18a.html",
        "http://student.mit.edu/catalog/m18b.html",
        "http://student.mit.edu/catalog/m20a.html",
        "http://student.mit.edu/catalog/m21a.html",
        "http://student.mit.edu/catalog/m22a.html",
        "http://student.mit.edu/catalog/m22b.html",
        "http://student.mit.edu/catalog/m22c.html",
        "http://student.mit.edu/catalog/m24a.html",
        "http://student.mit.edu/catalog/m24b.html"
    ];
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
   var request = require('request');
   var fs = require('file-system');
   fs.mkdir('catalog');
   exercise.one().forEach(function(arg, index){
       request(exercise.one()[index], function(error, response, body){
           var filename = exercise.one()[index].substring(exercise.one()[index].lastIndexOf('/')+1);
           fs.writeFile('catalog/'+filename, body)
       });
    });

 
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
    var file = './catalog/catalog.txt'

    function ReadAppend(file, appendFile){
        fs.readFile(appendFile, "utf8", function(err, data){
            if (err) throw err;     
            console.log('File was read.');
        
            fs.appendFile(file, data, (err) => {
                if (err) throw err;
                console.log('The file was appended.');
        });  
        }); 
    };

    exercise.one().forEach(function(arg, index){
        var appendFile = './catalog/'+exercise.one()[index].substring(exercise.one()[index].lastIndexOf('/')+1);
        ReadAppend(file, appendFile);
    });

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

    var minify = require('html-minifier').minify;
    var fs = require('fs');
    var file = './catalog/catalog.txt'
    var file2 = './catalog/catalog-minify.txt'

    //readFileSync
    fs.readFile(file, function(err, data) {
        if (err) return console.error(err);
        var result = minify(data.toString(), {
            minifyJS: true,
            minifyCSS: true, 
            collapseWhitespace: true,
        });
        
        fs.writeFile(file2, result, (err) => {
            if (err) throw err;
            console.log('The file was written.');
        });
    });

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
    var request = require('request');
    var fs = require('fs');

    // var file = './catalog/m1a.html'
    var file ='./catalog/catalog-minify.txt'
    // var file ='./catalog/catalog.txt'
    var courses = [];
    var data = fs.readFileSync(file);
    var $ = cheerio.load(data);
    $('h3').each(function(index, course){
        courses.push($(course).text());
    });
        
    console.log(courses);
    return courses;

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

    var cheerio = require('cheerio');
    var request = require('request');
    var fs = require('fs');

    // var file = './catalog/m1a.html'
    var file ='./catalog/catalog-minify.txt'
    // var file ='./catalog/catalog.txt'
    var courses = [];
    var data = fs.readFileSync(file);
    var $ = cheerio.load(data);
    $('h3').each(function(index, course){
        courses.push($(course).text());
    });
        
    console.log(courses);
    return courses;

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
    var list = exercise.six();
    // var list = ['1.00 Engineering Computation and Data Science\n', '1.035 Multiscale Characterization of Materials\n'];
    var newList = [] 
    var tempList = list.forEach(function(item, index){
        var tempList = item.toLowerCase().match(/([a-z]+)/g);
        // console.log(tempList);
        tempList = tempList.filter(function(word){
            return ((word !== 'is') && (word !== 'are') && (word !== 'and') && (word !== 'a') && (word !== 'the') && (word !== 'of')
            && (word !== 'for') && (word !== 'j') && (word !== 'i') && (word !== 'ii'));
            });
        // console.log(tempList);
        tempList = tempList.reduce(function(previous,current){
            return previous.concat(' '+current);
        });
        newList.push(tempList);
        });
        console.log(newList);
        return newList;



    // var wordFilter =['the', 'it', 'a', 'an', 'and','of', 'to', 'in', 'i', 'ii', 'j', 'b']; 
    // var trimCourses = [];
    // list.forEach(function(arg, index){
    //     var wordArr = list[index].toLowerCase().match(/([a-z]+)/g);
    //     // console.log(wordArr);
    //     wordArr.forEach(function(arg, index){
    //         if (wordArr[index] === wordFilter[0]
    //             ||wordArr[index] === wordFilter[1]
    //             ||wordArr[index] === wordFilter[2]
    //             ||wordArr[index] === wordFilter[3]
    //             ||wordArr[index] === wordFilter[4]
    //             ||wordArr[index] === wordFilter[5]
    //             ||wordArr[index] === wordFilter[6]
    //             ||wordArr[index] === wordFilter[7]
    //             ||wordArr[index] === wordFilter[8]
    //             ||wordArr[index] === wordFilter[9]
    //             ||wordArr[index] === wordFilter[10]
    //             ||wordArr[index] === wordFilter[11]){
    //                 wordArr[index] = "";
    //             } 
    //         });
    //         var words = wordArr.join(" ");
    //         // console.log(words);
    //         words = words.replace(/\s+/g,' ').trim();
    //         trimCourses.push(words);
    //     });
        
    //     console.log(trimCourses);
    //     return trimCourses;

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
    var list = exercise.seven();
    // var list = ['Engineering Computation and Data Science\n', 'Multiscale Characterization of Materials\n'];
    var wordArray = [];
    list.forEach(function(arg, index){
        wordArray = wordArray.concat(list[index].match(/\w+/g));
    });
    console.log(wordArray);
    return wordArray;
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
    var fs = require('fs');
    var list = exercise.eight();
    var scores = list.reduce(function(previous,current){
    
        if (current in previous) {
          previous[current] += 1;
        }
        else{
            previous[current] = 1;      
        }
        return previous;
    },{});

    // console.log(scores);
    scoresJs = "var scores = " + JSON.stringify(scores);
    fs.writeFileSync('catalog/catalog_data.js', scoresJs)

    return scores;


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
