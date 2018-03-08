var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fs = require('fs');

var exercise = {};

// Store the length of the urls
var catalog_length = 0;

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

    // Initialize the array for the catalog urls
    var catalog_urls = [];

    // Add all of the catalog urls to the array
    catalog_urls.push('http://student.mit.edu/catalog/m1a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m1b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m1c.html');
    catalog_urls.push('http://student.mit.edu/catalog/m2a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m2b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m2c.html');
    catalog_urls.push('http://student.mit.edu/catalog/m3a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m3b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4c.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4d.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4e.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4e.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4f.html');
    catalog_urls.push('http://student.mit.edu/catalog/m4g.html');
    catalog_urls.push('http://student.mit.edu/catalog/m5a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m5b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m6a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m6b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m6c.html');
    catalog_urls.push('http://student.mit.edu/catalog/m7a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m8a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m8b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m9a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m9b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m10a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m10b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m11a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m11b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m11c.html');
    catalog_urls.push('http://student.mit.edu/catalog/m12a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m12b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m12c.html');
    catalog_urls.push('http://student.mit.edu/catalog/m14a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m14b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m15a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m15c.html');
    catalog_urls.push('http://student.mit.edu/catalog/m16a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m16b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m18a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m18b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m20a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m22a.html');
    catalog_urls.push('http://student.mit.edu/catalog/m22b.html');
    catalog_urls.push('http://student.mit.edu/catalog/m22c.html');

    // Store the catalog length
    catalog_length = catalog_urls.length;

    // Return the populated array
    return catalog_urls;
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

    // Get the catalog urls from exercise one
    var catalog_urls = exercise.one();

    // Iterate over the catalog urls and write to a file
    catalog_urls.forEach(function(url, index){
        // Grab the output response from the url
        var resp = request('GET', url);

        // Create the file name for the write
        var file_name = './catalog/' + index + '.html';

        // Synchronously write the string converted output to a file
        fs.writeFileSync(file_name, resp.getBody().toString());
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

    var file_names = [];

    for (var i = 0; i < catalog_length; i++) {
        file_names.push('./catalog/' + i + '.html');
    }

    file_names.forEach(function(file, index) {
        var file_data = fs.readFileSync(file);
        console.log('adding ' + file + ' to catalog.txt');
        fs.appendFileSync('./catalog/catalog.txt',file_data);
    })
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

    var file_data = fs.readFileSync('./catalog/catalog.txt');

    var file_data_scrubbed = minify(file_data.toString(), {
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
    });

    var file_data_clean = file_data_scrubbed.replace(/'/g, '');
    fs.writeFileSync('./catalog/clean.txt', file_data_clean);
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

    var file_data = fs.readFileSync('./catalog/clean.txt');

    var $ = cheerio.load(file_data);

    var courses = [];

    $('h3').each(function(i, element) { 
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
    var file_data = fs.readFileSync('./catalog/clean.txt');

    var $ = cheerio.load(file_data);

    var titles = [];

    $('h3').each(function(i, element) { 
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

    var words = titles.map(function(title){
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

    var words = exercise.seven();

    var words_flat = words.reduce(function(prev, curr){
        return prev.concat(curr);
    },[]);

    return words_flat;
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

    var words_flat = exercise.eight();

    var word_freq = words_flat.reduce(function(prev, curr) {
        if (curr in prev) {
            prev[curr] += 1;
        } else {
            prev[curr] = 1;
        }
        return prev;
    },{});

    console.log(word_freq);
    return word_freq;
};


module.exports = exercise;
