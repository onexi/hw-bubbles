const cheerio = require('cheerio');
var fs = require('fs-extra');
var minify = require('html-minifier').minify;
var request = require('sync-request');
var zpad = require('zpad');

var exercise = {};

exercise.course_regex = /(\d\.\S+) (.+)/;
exercise.catalog_file = 'catalog.txt';
exercise.catalog_clean_file = 'clean.txt';
exercise.catalog_path = './catalog';
exercise.error_handeler = function(error){
  // A client-side or network error occurred. Handle it accordingly.
  console.error('An error occurred:', error.message);
}

/**
 * Provides an array of URL's from the MIT course catalog
 *
 * @return {array} a list of URL's from the MIT catalog
 */
exercise.one = function(){
  return ["http://student.mit.edu/catalog/m1a.html",
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
  "http://student.mit.edu/catalog/m18a.html",
  "http://student.mit.edu/catalog/m18b.html",
  "http://student.mit.edu/catalog/m20a.html",
  "http://student.mit.edu/catalog/m22a.html",
  "http://student.mit.edu/catalog/m22b.html",
  "http://student.mit.edu/catalog/m22c.html"]
};

/**
 * Downloads provided catalog of url's and writes the responses to a provided directory.
 *
 * @param {urls=} an array of url's to issues HTTP GET requests towards, defaults to `exercise.one()`
 * @param {directory=} a path of where to store the downloaded files.
 * @return {void}
 */
exercise.two = function(urls = exercise.one(), directory = exercise.catalog_path){
  // Create directory for catalog if it doesn't exist
  // fs.createWriteStream will not work unless all directories exist first.
  fs.emptyDirSync(directory);

  // Download each catalog file
  urls.forEach((url,index)=>{
    try{
        let contents = request("GET", url);
        fs.writeFileSync(`${directory}/${zpad(index)}.html`, contents.getBody().toString());
    }catch(err){
        exercise.error_handeler(err);
    }
  });
};

/**
 * Concatenates an entire directory to a large catalog file.
 *
 * @param {catalog=} a filename of where to store the catalog file
 * @param {directory=} a path of where to find the downloaded files.
 * @return {string} a string of the entire contents written to the catalog
 */
exercise.three = function(catalog = exercise.catalog_file, directory = exercise.catalog_path){
  if (!fs.existsSync(directory)) {
    throw new Error(`${directory} doesn't exist, no files to catalog.`);
  }

  // If an existing catalog exists, clear it's contents to start a fresh compilation.
  let catalog_path = `${directory}/${catalog}`;
  if (fs.existsSync(catalog_path)) {
    fs.truncateSync(catalog_path);
  }

  let contents = [];

  // Append each found file to the catalog file.
  fs.readdirSync(directory).forEach(file => {
    if (file !== catalog){
      try {
        contents.push(fs.readFileSync(`${directory}/${file}`, 'utf8'));
      } catch (err) {
        exercise.error_handeler(err);
      }
    }
  });

  contents = contents.join('\n');

  fs.writeFileSync(catalog_path, contents);

  return contents;
};

/**
 * Cleans and minifies the provided catalog HTML file.
 *
 * @param {clean=} a filename of where to store the cleaned catalog file
 * @param {catalog=} a filename of where to find the catalog file
 * @param {directory=} a path of where to find the downloaded files.
 * @return {string} a string of the entire contents written to the catalog
 */
exercise.four = function(clean = exercise.catalog_clean_file, catalog = exercise.catalog_file, directory = exercise.catalog_path){
  // Early exit if no existing catalog exists
  let catalog_path = `${directory}/${catalog}`;
  if (!fs.existsSync(catalog_path)) {
    throw new Error(`${catalog_path} doesn't exist, no file to clean up.`);
  }

  try {
    let catalog_contents = fs.readFileSync(`${directory}/${catalog}`, 'utf8');

    var cleaned_contents = minify(catalog_contents, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      // preserveLineBreaks: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeEmptyElements: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true
    });
  } catch (err) {
    exercise.error_handeler(err);
  }

  fs.writeFileSync(`${directory}/${clean}`, cleaned_contents);

  return cleaned_contents;
};

/**
 * Parses the h3 tags for course titles
 *
 * @param {clean=} a filename of where to find the cleaned catalog file
 * @param {directory=} a path of where to find the downloaded files.
 * @return {array} a array of strings of the h3 title tags from the cleaned file
 */
exercise.five = function(clean = exercise.catalog_clean_file, directory = exercise.catalog_path){
  // Early exit if no existing catalog exists
  let catalog_path = `${directory}/${clean}`;
  if (!fs.existsSync(catalog_path)) {
    throw new Error(`${catalog_path} doesn't exist, no file to clean up.`);
  }

  let courses = [];

  try {
    let catalog_contents = fs.readFileSync(`${directory}/${clean}`, 'utf8');
    var $ = cheerio.load(catalog_contents);
    $('h3').each(function(i,element){
      courses.push($(element).text());
    });
  } catch (err) {
    exercise.error_handeler(err);
  }

  return courses;
};

/**
 * Generate list of course titles
 *
 * @param {titles=} an array of raw course titles
 * @param {regex=} a regular expression to parse out titles
 * @return {array} a array of strings of course titles
 */
exercise.six = function(titles = exercise.five(), regex = exercise.course_regex){
  return titles.map(function (title){
    let matches = title.match(regex);
    if (matches){
      let title = matches[2];
      title = title.replace('(New)', '');
      return title;
    } else{
      return null;
    }
  });
};

/**
 * Filter out common words
 *
 * @param {titles=} an array of course titles
 * @return {array} a array of strings of course titles
 */
exercise.seven = function(titles = exercise.six()){
  return titles.map(function (title){
    if (title == null){return null;}
    return title
      .toLowerCase()
      .split(" ")
      .filter(word => {
        let is_common = ["to","of","in","for","on","with","at","by","from","up","about","into","over","after", "and", "i", "ii"].includes(word);
        let has_number = (/\d/.test(word));
        let has_parenthesis = word.indexOf('(') > 0;
        let pass = !(is_common || has_number || has_parenthesis);
        return pass;
      })
      .join(" ");
  });
};

/**
 * Generate bag of words
 *
 * @param {titles=} an array of course titles
 * @return {array} a array of strings of course titles
 */
exercise.eight = function(titles = exercise.seven()){
  return titles.reduce(function (bag, title){
    if (title == null){return bag;}
    return bag.concat(title.split(" "));
  }, []);
};

/**
 * Generate bag of words
 *
 * @param {titles=} an array of course titles
 * @return {array} a array of strings of course titles
 */
exercise.nine = function(words = exercise.eight()){
  return words.reduce(function (bag, word){
    if (word in bag){
      bag[word] = bag[word] + 1;
    }else{
      bag[word] = 1;
    }
    return bag;
  }, {});
};


module.exports = exercise;
