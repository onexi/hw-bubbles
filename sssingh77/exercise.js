var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fs = require('fs');
var exercise = {};
// // var cheerio = require('cheerio');
// // var data = require('filename stored on computer')
// // loading data above

// // var $ = cheerio.load(data);

// //var matches = [];

// // $('h3').each(function(i,element)
// // {
//     // matches.push($(element).text()); // push everything in h3 tag 
// // });

// var $ = cheerio.load(data);
// var data = require('');
// var titles = [];
// $('h3').each(function(i,title){
//     titles.push($(title).text());
// });
// console.log(titles);

// var words = titles.map(function(title){
//     return title.toLowerCase().match(/([a-z]+)/g);// exclude numbers but includes words 
// });

// // flatten 2D words array using reduce
// var wordsFlat = words.reduce(function(previous, current){
//     return previous.concat(current);
// },[]);

// console.log(wordsFlat);


// // from ex 2: var expression = /<b> 
// // var matchs = data.match(expression);
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
    addresses = ['http://student.mit.edu/catalog/m1a.html', 'http://student.mit.edu/catalog/m2a.html',
                'http://student.mit.edu/catalog/m3a.html','http://student.mit.edu/catalog/m4a.html',
                'http://student.mit.edu/catalog/m5a.html','http://student.mit.edu/catalog/m6a.html',
                'http://student.mit.edu/catalog/m7a.html','http://student.mit.edu/catalog/m8a.html',
                'http://student.mit.edu/catalog/m9a.html','http://student.mit.edu/catalog/m10a.html',
                'http://student.mit.edu/catalog/m11a.html','http://student.mit.edu/catalog/m12a.html',
                'http://student.mit.edu/catalog/m13a.html','http://student.mit.edu/catalog/m14a.html',
                'http://student.mit.edu/catalog/m15a.html','http://student.mit.edu/catalog/m16a.html',
                'http://student.mit.edu/catalog/m16a.html','http://student.mit.edu/catalog/m17a.html',
                'http://student.mit.edu/catalog/m18a.html',
                'http://student.mit.edu/catalog/m20a.html','http://student.mit.edu/catalog/m21a.html',
                'http://student.mit.edu/catalog/m22a.html',
                'http://student.mit.edu/catalog/m24a.html'
        
    ];
    
    return addresses;

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
    var urls = exercise.one();

    urls.forEach(function(url,i){
        var res = request('GET',url);
        var filename = "./catalogSample/" + i + ".html";
        // console.log(filename);
        fs.writeFileSync(filename, res.getBody().toString());
        });    
    
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
    var files = [];
    for (var i = 0; i<22; i++)
    {
        files.push("./catalogSample/"+ i + ".html");
    }
    // console.log(files);
    files.forEach(function(file, index)
{
    var data = fs.readFileSync(file);
    // console.log('adding' + file + 'to catalog.txt');
    fs.appendFileSync('./catalogSample/catalog.txt',data);
});
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
    var data = fs.readFileSync('./catalogSample/catalog.txt');

    var scrubbed = minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    
    });
    var clean = scrubbed.replace(/'/g,'');

    fs.writeFileSync('./catalogSample/clean.txt',clean);
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
    var data = fs.readFileSync('./catalogSample/clean.txt');
    var $ = cheerio.load(data);
    var courses = [];
    $('h3').each(function(i, element){
        courses.push($(element).text());
    });
    return courses;
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
    var data = fs.readFileSync('./catalogSample/clean.txt');
    var $ = cheerio.load(data);
    var titles = [];
    $('h3').each(function(i, element){
        titles.push($(element).text());
    });
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
    var temp = titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g)});
    
    
    
    return temp;

    };
    // var temp_2 = temp_1.match(/(!and/g);
        // var temp_2 = temp_1.replace(/ and /g,'');
       // var temp_3 = temp_2.replace(/ or /g,'');
       // var temp_4 = temp_3.replace(/ a /g,'');
       // var temp_5 = temp_4.replace(/or/g,'');
      //  var temp_6 = temp_5.replace(/ are /g,'');
       // var temp_3 = temp_2.match(/a/g); // exclude numbers but includes words


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
    var words_temp = exercise.seven();
    // console.log(words_temp);
    var wordsFlat = words_temp.reduce(function(previous, current){
        return previous.concat(current);
        },[]);
    var words = wordsFlat.filter(function(word){
        //console.log(word)
        return ((word !== 'is') || (word !== 'are') || (word !== 'and') || (word !== 'a') || (word !== 'the')|| (word !== 'of')
     || (word !== 'for') || (word !== 'new')|| (word !== 'be')|| (word !== 'or')|| (word !== 'an'));
        });
return words;
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
    var wordsFlat = exercise.eight();
    console.log(wordsFlat);
    var scores = wordsFlat.reduce(function(previous, current){ // starting return var as an object
        if(current in previous)
        {
            previous[current] += 1;
        }
        else
        {
            previous[current] = 1;
        }
        return previous;
    },{});
    // console.log(scores);
    var scores_JS = "var scores = " + JSON.stringify(scores);
    console.log(scores_JS);
    fs.writeFileSync('catalogSample/catalog_data.js', scores_JS);

    return scores_JS;
};

module.exports = exercise;
