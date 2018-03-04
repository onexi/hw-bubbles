var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fetch = require('node-fetch');
var fs = require('fs');

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
    console.log('---- Question 1 ----');

    var urls = [];
    urls.push('http://student.mit.edu/catalog/m1a.html');
    urls.push('http://student.mit.edu/catalog/m1b.html');
    urls.push('http://student.mit.edu/catalog/m1c.html');
    urls.push('http://student.mit.edu/catalog/m2a.html');
    urls.push('http://student.mit.edu/catalog/m2b.html');
    urls.push('http://student.mit.edu/catalog/m2c.html');
    urls.push('http://student.mit.edu/catalog/m3a.html');
    urls.push('http://student.mit.edu/catalog/m3b.html');
    urls.push('http://student.mit.edu/catalog/m4a.html');
    urls.push('http://student.mit.edu/catalog/m4b.html');
    urls.push('http://student.mit.edu/catalog/m4c.html');
    urls.push('http://student.mit.edu/catalog/m4d.html');
    urls.push('http://student.mit.edu/catalog/m4e.html');
    urls.push('http://student.mit.edu/catalog/m4f.html');
    urls.push('http://student.mit.edu/catalog/m4g.html');
    urls.push('http://student.mit.edu/catalog/m5a.html');
    urls.push('http://student.mit.edu/catalog/m5b.html');
    urls.push('http://student.mit.edu/catalog/m6a.html');
    urls.push('http://student.mit.edu/catalog/m6b.html');
    urls.push('http://student.mit.edu/catalog/m6c.html');
    urls.push('http://student.mit.edu/catalog/m7a.html');
    urls.push('http://student.mit.edu/catalog/m8a.html');
    urls.push('http://student.mit.edu/catalog/m8b.html');
    urls.push('http://student.mit.edu/catalog/m9a.html');
    urls.push('http://student.mit.edu/catalog/m9b.html');
    urls.push('http://student.mit.edu/catalog/m10a.html');
    urls.push('http://student.mit.edu/catalog/m10b.html');
    urls.push('http://student.mit.edu/catalog/m11a.html');
    urls.push('http://student.mit.edu/catalog/m11b.html');
    urls.push('http://student.mit.edu/catalog/m11c.html');
    urls.push('http://student.mit.edu/catalog/m12a.html');
    urls.push('http://student.mit.edu/catalog/m12b.html');
    urls.push('http://student.mit.edu/catalog/m12c.html');
    urls.push('http://student.mit.edu/catalog/m14a.html');
    urls.push('http://student.mit.edu/catalog/m14b.html');
    urls.push('http://student.mit.edu/catalog/m15a.html');
    urls.push('http://student.mit.edu/catalog/m15b.html');
    urls.push('http://student.mit.edu/catalog/m15c.html');
    urls.push('http://student.mit.edu/catalog/m16a.html');
    urls.push('http://student.mit.edu/catalog/m16b.html');
    urls.push('http://student.mit.edu/catalog/m17a.html');
    urls.push('http://student.mit.edu/catalog/m17b.html');
    urls.push('http://student.mit.edu/catalog/m18a.html');
    urls.push('http://student.mit.edu/catalog/m18b.html');
    urls.push('http://student.mit.edu/catalog/m20a.html');
    urls.push('http://student.mit.edu/catalog/m21a.html');
    urls.push('http://student.mit.edu/catalog/m21Aa.html');
    urls.push('http://student.mit.edu/catalog/mCMSa.html');
    urls.push('http://student.mit.edu/catalog/m21Wa.html');
    urls.push('http://student.mit.edu/catalog/m21Ga.html');
    urls.push('http://student.mit.edu/catalog/m21Ha.html');
    urls.push('http://student.mit.edu/catalog/m21La.html');
    urls.push('http://student.mit.edu/catalog/m21Ma.html');
    urls.push('http://student.mit.edu/catalog/mWGSa.html');
    urls.push('http://student.mit.edu/catalog/m22a.html');
    urls.push('http://student.mit.edu/catalog/m22b.html');
    urls.push('http://student.mit.edu/catalog/m22c.html');
    urls.push('http://student.mit.edu/catalog/m24a.html');
    urls.push('http://student.mit.edu/catalog/m24b.html');
    urls.push('http://student.mit.edu/catalog/mCCa.html');
    urls.push('http://student.mit.edu/catalog/mCSBa.html');
    urls.push('http://student.mit.edu/catalog/mECa.html');
    urls.push('http://student.mit.edu/catalog/mEMa.html');
    urls.push('http://student.mit.edu/catalog/mHSTa.html');
    urls.push('http://student.mit.edu/catalog/mHSTb.html');
    urls.push('http://student.mit.edu/catalog/mIDSa.html');
    urls.push('http://student.mit.edu/catalog/mMASa.html');
    urls.push('http://student.mit.edu/catalog/mSCMa.html');
    urls.push('http://student.mit.edu/catalog/mASa.html');
    urls.push('http://student.mit.edu/catalog/mMSa.html');
    urls.push('http://student.mit.edu/catalog/mNSa.html');
    urls.push('http://student.mit.edu/catalog/mSTSa.html');
    urls.push('http://student.mit.edu/catalog/mSTSb.html');
    urls.push('http://student.mit.edu/catalog/mSWEa.html');
    urls.push('http://student.mit.edu/catalog/mSPa.html');

    return urls;
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
    console.log('---- Question 2 ----');
    var urls = exercise.one();
    
    const writeFile = (path, data, opts = 'utf8') =>
        new Promise((res, rej) => {
            fs.writeFile(path, data, opts, (err) => {
                if (err) rej(err)
                else res()
        })
    })
    
    var makeRequest = async function (url,counter) {
        var res = await fetch(url);
        await writeFile('catalog/' + counter + '.html', await res.text());
        return 'done - ' + counter;        
    };  
    
    urls.forEach(function(url,i){
        makeRequest(url,i).then((result) =>{
            console.log(result);
        });    
    })

    /* 
        urls.forEach(function(url,i){
            var res = request('GET', url);
            var filename = 'catalog/' + counter + '.html';
            fs.writeFileSync(filename, res.getBody().toString());
        });   
    
    */
}

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
    console.log('---- Question 3 ----');

    var readFiles = [];
    for(var i = 0; i <=74; i++){
        readFiles.push('./catalog/' + i + '.html');
    }
    readFiles.forEach(function(file, counter){
        var data = fs.readFileSync(file); 
        console.log('adding file - ' + file + ' - to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt', data); 
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
    console.log('---- Question 4 ----');
    var data = fs.readFileSync('./catalog/catalog.txt'); 

    var scrubbedHtml = minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    });

    fs.writeFileSync('./catalog/scrubbedHTML.txt', scrubbedHtml);
    console.log('adding file - scrubbedHTML.txt - to catalog.txt');

    var finalHtml = scrubbedHtml.replace(/'/g, '');
    fs.writeFileSync('./catalog/cleanHTML.txt', finalHtml);
    console.log('adding file - cleanHTML.txt - to catalog.txt');
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
    console.log('---- Question 5 ----');

    var data = fs.readFileSync('./catalog/cleanHTML.txt');
    var $ = cheerio.load(data);
    var courses = [];
    $('h3').each(function(i, course){
        courses.push($(course).text());
    });
    console.log('----  displaying courses ----');
    console.log(courses);
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
    console.log('---- Question 6 ----');

    var data = fs.readFileSync('./catalog/cleanHTML.txt');
    var $ = cheerio.load(data);
    var titles = [];
    $('h3').each(function(i, title){
        titles.push($(title).text());
    });
    console.log('---- displaying titles ----');
    console.log(titles);
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

    console.log('---- Question 7 ----');

    var titles = exercise.six();
    var words = titles.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });
    console.log('---- displaying words in each title ----');
    console.log(words);

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
    console.log('---- Question 8 ----');

    var words = exercise.seven();
    var wordsFlat = words.reduce(function(previous, current) {
        return previous.concat(current);
    }, []);
    console.log('---- displaying array of words ----');
    console.log(wordsFlat);

     
    /* Function to further clean and remove words like 'j', 'i', 'ii', etc. */
    function moreClean(element) {
        var comparison = element.toLowerCase() != 'j' 
                        && element.toLowerCase() != 'i' 
                        && element.toLowerCase() != 'ii';
          return comparison;  
    }
    
    var filtered = wordsFlat.filter(moreClean);
    //console.log(JSON.stringify(filtered));

    console.log(filtered);


    return filtered;
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
    console.log('---- Question 9 ----');

    var wordsFlat = exercise.eight();
    // count words - get word frequency using reduce
    
    var scores = wordsFlat.reduce(function(previous, current){
        if (current in previous){
            previous[current] += 1;
        }
        else {
            previous[current] = 1;
        }
    return previous;
    }, {}); // we are passing an object

    console.log('---- displaying word scores ----');
    console.log(scores);
    return scores;
};

exercise.ten = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //
    //  Writing the scores to the catalog-sample/catalog_data.js file 
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    console.log('---- Question 10 ----');
    var scores = exercise.nine();
    var data = "var scores = " + JSON.stringify(scores) + ";";
    //console.log(data);
    console.log('---- Writing scores to catalog_data.js file  ----');
    fs.writeFileSync('./catalogSample/catalog_data.js', data);
}

module.exports = exercise;
