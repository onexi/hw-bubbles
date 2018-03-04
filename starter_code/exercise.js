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
  "http://student.mit.edu/catalog/m10c.html",
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
