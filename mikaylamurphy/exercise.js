var exercise = {};
require('http');

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
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var url = 'http://student.mit.edu/catalog/index.cgi';

	var xhReq = new XMLHttpRequest();
	xhReq.open('GET', url, false);
	xhReq.send(null);
    response = xhReq.responseText;

    var patt = /<A HREF="(.*?)"/g;
    var arr  = [];
    while(match=patt.exec(response)){
        arr.push(match[1]);
    }

    arr2 = [];
    var name;
    arr = arr.forEach(function(entry){
        entry_split = entry.split('/');
        name = entry_split[0].slice(0,-6)
        arr2.push('http://student.mit.edu/catalog/'+entry)
        arr2.push('http://student.mit.edu/catalog/'+name+'b.html')
        arr2.push('http://student.mit.edu/catalog/'+name+'c.html')

    })
    return arr2.slice(6)

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

    var fs = require('fs');
    var request = require('shelljs/global');
   // var exec = require('exec');

    var counter = 0;
    var arr2 = exercise.one()

    arr2.forEach(function(url){
        counter += 1;
        var str_url = String(url).split('/')
        var name = str_url[str_url.length - 1]
        //exec('curl ' + String(url) + ' > ./catalog/' + name);
        //exec('curl ' + String(url) + ' >> ./catalog/catalog.txt');

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
    
    //Done in exercise.two for efficiency's sake.

    //var fs = require('fs');
    //var concat = require('concat');  

    ///var files = fs.readdirSync('catalog')
    ///concat(files, 'catalog/catalog.txt')

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
    //var minify = require('html-minifier').minify;
    var fs = require('fs');

    var text = fs.readFileSync('./catalog/catalog.txt')
    text = String(text)

    ///text = text.replace(/(\r\n|\n|\r)/g,"");
    text = text.replace(/\r\n/g,'');
    text = text.replace(/\n/g,'');
    
    //exec('curl ' + String(text) + ' > ./catalog/catalog.txt');

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
    var cheerio = require('cheerio');
    var fs = require('fs');

    var data = fs.readFileSync('./catalog/catalog.txt')
    data = String(data)
    //var data = exercise.four();
    $ = cheerio.load(data);

    var patt = /<a name=(.*?)<!--end-->/g;
    var arr  = [];
    while(match=patt.exec(data)){
        arr.push(match[1]);
    }
    return arr;

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
    var fs = require('fs');

    var data = fs.readFileSync('./catalog/catalog.txt')
    data = String(data)
    //var data = exercise.four();
    $ = cheerio.load(data);
    var matches = [];

    $('h3').each(function(i, element){
	matches.push($(element).text());
});
    return matches;

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
    var ans = [];
    var update_titles = titles.map(function(entry){
        var entry = entry.split();
        var arr = [];
        entry = entry.forEach(function(entry2){
            var entry2 = entry2.toLowerCase();
            var entry2 = entry2.match(/([a-z]+)/g);
            entry2.forEach(function(word){
                return word
            });
            entry2 = String(entry2);
            var stopwords = /(\b(the|and|a|in|to|of|j|mas|sts|i|m|sp|g|h|l|ms|mas|ids|hst|ec|esd|csb|cc|s|epw|for|from|on|ur|urg|d|at|as|e)\b\s*)/gi

            entry2 = entry2.replace(stopwords, "")
            arr.push(entry2);
        });

        ans.push(arr);
    });
    return ans;
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
    var arrays = exercise.seven();
    var ans = [];
    arrays.forEach(function(word){
        word = word[0].split(',')
        word.forEach(function(wor){
            if (wor != ''){
                ans.push(wor);
            }
            
        })
    });
    return ans;

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
