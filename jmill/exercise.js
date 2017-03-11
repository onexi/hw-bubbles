var exercise = {};
    
var request = require('request');
var fs = require('fs');
//var minify = require('html-minifier').minify;
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

    //JM added:

    startPages = [
        "m1",
        "m2",
        "m3",
        "m4",
        "m5",
        "m6",
        "m7",
        "m8",
        "m9",
        "m10",
        "m11",
        "m12",
        "m14",
        "m15",
        "m16",
        "m17",
        "m18",
        "m20",
        "m21",
        "m21A",
        "mCMS",
        "m21W",
        "m21G",
        "m21H",
        "m21L",
        "M21M",
        "mWGS",
        "m22",
        "m24",
        "mCC",
        "mCSB",
        "mEC",
        "mEM",
        "mES",
        "mHST",
        "mIDS",
        "mMAS",
        "mSCM",
        "mAS",
        "mMS",
        "mNS",
        "mSTS",
        "mSWE",
        "mSP"
    ];

    // make array full of permedPages (some pages will be invalid)
    var permedPages = [];
    startPages.forEach(function(element) {
        exercise.suffixMaker(element).forEach(function(permedPage){
            permedPages.push(permedPage);
        });
    });

    // make full URL
    var fullURLs = [];
    var urlBase = 'http://student.mit.edu/catalog/';
    var urlEnding = '.html';

    permedPages.forEach(function(element) {    
        fullURLs.push(urlBase + element + urlEnding);
    });

    return fullURLs;
};


exercise.suffixMaker = function(base){
    //JM added:
    permutations = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i'
        ];
    builtPageNames = [];
    permutations.forEach(function(element) {
        var pageName = base + element; 
        builtPageNames.push(pageName);
    });
    return builtPageNames;
};


exercise.returnAfterSlash = function(url){
    // JM added
    // return just stuff coming after the last '/'
    //  given:  http://student.mit.edu/catalog/m12i.html,
    //  return: m12i.html
    return url.slice(url.lastIndexOf('/')+1, url.length);
};

// //alt with requests
// exercise.downloadURLRequest = function(url){
//     // JM added
//     // fetch each URL and save the page locally
//     var pageBody = "";
//     function callback(error, response, body){
//         if(!error){
//             pageBody = body;
//         };
//     };
//     request(url, callback);

//     saveDir = "catalog"
//     destFile = exercise.returnAfterSlash(url)
//     relativePath = saveDir+'/'+destFile;

//     // save the file
//     return exercise.save(pageBody, relativePath);
// };

//alt with requests based on example
exercise.downloadURLRequests = function(url){
    // JM added
    // set up destination
    var saveDir = "catalog";
    var destFile = exercise.returnAfterSlash(url);
    var relativePath = saveDir+'/'+destFile;

    // fetch each URL and save the page locally
    var page = exercise.get(url);

    //filter out some stuff
    // var $ = cheerio.load(page);
    // var titles = [];
    // $('h3').each(function(i, title){
    //     titles.push($(title).text());
    // });

    //

    page.then(function(body){
        return exercise.save(body, relativePath);
    }).
    then(function(msg){
        //console.log(msg);
    });
};

exercise.get = function(url){
    return new Promise(function(resolve, reject){
        function callback(error, response, body){
            if(!error && (response.statusCode != '404')){
                resolve(body);
            } else {
                reject(error);
            }
        }
        request(url, callback);
    });
};


exercise.save = function(data, filename){
    return new Promise(function(resolve, reject){
        // write listings to file
        fs.writeFile(filename, data, function(err) {
            if(err) {
                reject(error);
            }
            resolve('The ' + filename + ' was saved');
        })
    })
};

// //original with shelljs and curl
// exercise.downloadURL = function(url){
//     // JM added
//     // fetch each URL and save the page locally
//     saveDir = "catalog"
//     destFile = exercise.returnAfterSlash(url)
//     curlURL = "curl " + url + " -o " + saveDir + destFile;

//     var isValid = function(urlToCheck){
//         //see if server returns a 404 error
//         if (shell.exec('curl -i -s ' + urlToCheck).stdout.indexOf("404 Not Found") == '-1'){
//             return true;
//         } else {return false};
//     };

//     //see if page gives 404
//     if (isValid(url)){
//         shell.exec(curlURL);
//     };
    
//     //shell.exec('curl -i -s http://student.mit.edu/catalog/m12i.html').stdout.indexOf("404 Not Found");
//     return;
// };

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

    // JM added
    var fullURLs = exercise.one();
    fullURLs.forEach(exercise.downloadURLRequests);
    return fullURLs;
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

    //JM added
    // from https://www.youtube.com/watch?v=UxOpmMrZBto
    // ref https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
    //PICKUP HERE HERE HERE HERE


    function ReadAppend(file, appendFile){
        //console.log(file + ' ' + appendFile);

        var content;
        content = fs.readFileSync(appendFile);
        // fs.readFile(appendFile, function (err, data){
        //     if (err) throw err;
        //     //console.log('File was read');
        //     content = data;
        // });


        fs.appendFileSync(file, content);
        // fs.appendFileSync(file, content, function(err) {
        //     if (err) throw err;
        //     //console.log('The data to append was appended to file');
        // });    
    };

    //read dir to collect all filenames
    baseDir = "./catalog/";
    var dir = fs.readdirSync(baseDir);
    //get rid of the first filename, the hidden one with the dot.
    //!!This is Mac-only right NOW!!
    dir.shift();

    consolidationFile = "catalog.txt"
    // initialize empty catalog.txt
    fs.writeFile(baseDir+consolidationFile, '');

    dir.forEach(function(page){
        return ReadAppend(baseDir+consolidationFile, baseDir+page);
    });
    // dir.forEach(function(page){
    //     return ReadAppend(baseDir+consolidationFile, baseDir+page);
    // });

    return "done";
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
    
    //JM added below
    var consolidatedFilePath = "./catalog/catalog.txt";
    var consolidatedContent = fs.readFileSync(consolidatedFilePath, "utf-8"); 

    consolidatedContent = consolidatedContent.replace(/\n/g, '');
    consolidatedContent = consolidatedContent.replace(/\r/g, '');    

    fs.writeFileSync(consolidatedFilePath, consolidatedContent);
    
    //// (minifier doesn't work)
    // var result = minify(consolidatedContent, {
    //     collapseWhitespace: true,
    //     preserveLineBreaks: false,
    //     trimCustomFragments: true,
    //     removeEmptyAttributes: true
    // });

    return consolidatedContent;
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
    // JM added below    
    // load scrubbed HTML into DOM
    var content = exercise.four();

    // get courses
    var expression = /<h3>(.*?)<br><I>/g;
    var courses = content.match(expression);
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
    // JM added below    
    // load scrubbed HTML into DOM
    var $ = cheerio.load(exercise.four());

    // get titles
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
    // JM added below    
    // load scrubbed HTML into DOM
    var titles = exercise.six();
    titlesAsWords = exercise.getWords(titles);
    commonWords = [
        'and',
        'the',
        'for',
        'ii',
        'in',
        'of',
        'to',
        'a',
        'b',
        'i',
        'j',
        'l',
        's',
        ',',
        '.',
        ':'
    ];

    //
    var keepItClean = function(wordGroup){
        var cleanWords = wordGroup.filter(function(word){
            return (commonWords.indexOf(word) == -1);
        });
        return cleanWords;
    };
    
    // create empty array
    var titlesAsCleanWordGroups = [];

    titlesAsWords.forEach(function(wordGroup){
        result = keepItClean(wordGroup);
        titlesAsCleanWordGroups.push(result)
        return titlesAsCleanWordGroups;
    });
    return titlesAsCleanWordGroups;
    
};

exercise.getWords = function(titles){
    // return 'Error: getWords function not implemented';
    //JM added (based on parse/03_getWords):
    var words = titles.map(function(title){
        // normalize the data.
        return title.toLowerCase().match(/([a-z]+)/g);
    });
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
    // JM added below
    var titlesAsCleanWordGroups = exercise.seven();

    var flattenedWordArray = [];

    titlesAsCleanWordGroups.forEach(function(wordGroup){
        wordGroup.forEach(function(word){
            flattenedWordArray.push(word);
        });
    });
    return flattenedWordArray;
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
    // JM added below
    ///?????
    var flattenedWordArray = exercise.eight();

    var wordcount = [];
    flattenedWordArray.forEach(function(word){
        if (wordcount[word]){ 
            wordcount[word] += 1;
        } else {
            wordcount[word] = 1;
        };
        return wordcount;
    });
};


module.exports = exercise;
