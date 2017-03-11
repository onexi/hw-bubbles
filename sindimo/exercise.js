var exercise = {};

//Author: Mohamad Sindi
//Course: MIT - Engineering Computation and Data Science

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

    //This is an array of 80+ pages from the MIT catalog website
    var all_urls = ["http://student.mit.edu/catalog/m10a.html","http://student.mit.edu/catalog/m10b.html","http://student.mit.edu/catalog/m11a.html","http://student.mit.edu/catalog/m11b.html","http://student.mit.edu/catalog/m11c.html","http://student.mit.edu/catalog/m12a.html","http://student.mit.edu/catalog/m12b.html","http://student.mit.edu/catalog/m12c.html","http://student.mit.edu/catalog/m14a.html","http://student.mit.edu/catalog/m14b.html","http://student.mit.edu/catalog/m15a.html","http://student.mit.edu/catalog/m15b.html","http://student.mit.edu/catalog/m15c.html","http://student.mit.edu/catalog/m16a.html","http://student.mit.edu/catalog/m16b.html","http://student.mit.edu/catalog/m17a.html","http://student.mit.edu/catalog/m17b.html","http://student.mit.edu/catalog/m18a.html","http://student.mit.edu/catalog/m18b.html","http://student.mit.edu/catalog/m1a.html","http://student.mit.edu/catalog/m1b.html","http://student.mit.edu/catalog/m1c.html","http://student.mit.edu/catalog/m20a.html","http://student.mit.edu/catalog/m21a.html","http://student.mit.edu/catalog/m21Aa.html","http://student.mit.edu/catalog/m21Ga.html","http://student.mit.edu/catalog/m21Gc.html","http://student.mit.edu/catalog/m21Gd.html","http://student.mit.edu/catalog/m21Ge.html","http://student.mit.edu/catalog/m21Gf.html","http://student.mit.edu/catalog/m21Gg.html","http://student.mit.edu/catalog/m21Gh.html","http://student.mit.edu/catalog/m21Gq.html","http://student.mit.edu/catalog/m21Gr.html","http://student.mit.edu/catalog/m21Gs.html","http://student.mit.edu/catalog/m21Ha.html","http://student.mit.edu/catalog/m21Hb.html","http://student.mit.edu/catalog/m21La.html","http://student.mit.edu/catalog/m21Ma.html","http://student.mit.edu/catalog/m21Mb.html","http://student.mit.edu/catalog/m21Wa.html","http://student.mit.edu/catalog/m21Wb.html","http://student.mit.edu/catalog/m22a.html","http://student.mit.edu/catalog/m22b.html","http://student.mit.edu/catalog/m22c.html","http://student.mit.edu/catalog/m24a.html","http://student.mit.edu/catalog/m24b.html","http://student.mit.edu/catalog/m2a.html","http://student.mit.edu/catalog/m2b.html","http://student.mit.edu/catalog/m2c.html","http://student.mit.edu/catalog/m3a.html","http://student.mit.edu/catalog/m3b.html","http://student.mit.edu/catalog/m4a.html","http://student.mit.edu/catalog/m4b.html","http://student.mit.edu/catalog/m4c.html","http://student.mit.edu/catalog/m4d.html","http://student.mit.edu/catalog/m4e.html","http://student.mit.edu/catalog/m4f.html","http://student.mit.edu/catalog/m4g.html","http://student.mit.edu/catalog/m5a.html","http://student.mit.edu/catalog/m5b.html","http://student.mit.edu/catalog/m6a.html","http://student.mit.edu/catalog/m6b.html","http://student.mit.edu/catalog/m6c.html","http://student.mit.edu/catalog/m7a.html","http://student.mit.edu/catalog/m8a.html","http://student.mit.edu/catalog/m8b.html","http://student.mit.edu/catalog/m9a.html","http://student.mit.edu/catalog/m9b.html","http://student.mit.edu/catalog/mASa.html","http://student.mit.edu/catalog/mCCa.html","http://student.mit.edu/catalog/mCMSa.html","http://student.mit.edu/catalog/mCSBa.html","http://student.mit.edu/catalog/mECa.html","http://student.mit.edu/catalog/mECb.html","http://student.mit.edu/catalog/mEMa.html","http://student.mit.edu/catalog/mESa.html","http://student.mit.edu/catalog/mHSTa.html","http://student.mit.edu/catalog/mHSTb.html","http://student.mit.edu/catalog/mIDSa.html","http://student.mit.edu/catalog/mMASa.html","http://student.mit.edu/catalog/mMSa.html","http://student.mit.edu/catalog/mNSa.html","http://student.mit.edu/catalog/mSCMa.html","http://student.mit.edu/catalog/mSPa.html","http://student.mit.edu/catalog/mSPb.html","http://student.mit.edu/catalog/mSTSa.html","http://student.mit.edu/catalog/mSTSb.html","http://student.mit.edu/catalog/mSWEa.html","http://student.mit.edu/catalog/mWGSa.html"];

    return all_urls;

}; //closes exercise.one



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

    var shell = require('shelljs');
    var fs = require('fs');

    //Get list of URLs to Download
    var urls = exercise.one();

    var size = urls.length;

   //Create the catalog directory if it doesn't already exist
   var dir = 'catalog';

   if (!fs.existsSync(dir)) {
        //Create directory
        fs.mkdirSync(dir, 0755);
    }

    //Get a list of all files in the catalog folder just to make sure the folder has all html files needed
    var files_list = fs.readdirSync('./catalog');
    var number_of_files = files_list.length;

    //If catalog folder doesn't have all html files, then download them with curl
    if (number_of_files < 88){

        //Save all html files to the catalog folder using curl
        console.log('Downloading 80+ html files using curl, it may take a while...');

        for (var i=0; i<size; i++){

            //Chop off the first 31 characters of the URL to return the html part only (e.g. return m1a.html)
            var html_part = urls[i].substring(31);;

            //Construct a string for the curl command and run it in silent mode
            var curl_command = 'curl -s ' + urls[i]  + ' -o  ./catalog/' + html_part;

            //Run the curl command using shelljs
            shell.exec(curl_command);
        }

        console.log('Done downloading with curl!');

    } //closes if

 
}; //closes exercise.two





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

    var fs = require('fs');

    //Check if catalog.txt file exists, and if so then delete it
    if ( fs.existsSync('./catalog/catalog.txt') ){
        fs.unlinkSync('./catalog/catalog.txt'); 
     }
    
    //Get a list of all files in the catalog folder
    var files_list = fs.readdirSync('./catalog');
    var size = files_list.length;

    //Append all files into one file
    for (var i=0; i<size; i++){

      if (files_list[i] != 'catalog.txt' && files_list[i] != 'catalog_minified.txt' && files_list[i] != 'catalog_original.txt'){

        //Get the content of the current file
        var content = fs.readFileSync('./catalog/'+files_list[i], 'utf8');

        //Append it to the catalog.txt file
        fs.appendFileSync('./catalog/catalog.txt', content);

      }

    }


}; //closes exercise.three




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

    var fs = require('fs');
    
	var original_file = fs.readFileSync('./catalog/catalog.txt', 'utf8');


    //The 'html-minifier' package is slow with large files
    //and causes npm test to fail as it takes more than 2 seconds to complete which 
    //exceeds mocha's 2 second timeout set for testing
    //The below commented out code works fine, but it's slow
/*
    var minify = require('html-minifier').minify;
    var options = {collapseWhitespace: true,  preserveLineBreaks: false, minifyCSS: true, minifyJS: true };
    var minified_output = minify(original_file, options);
*/

    //Instead of using the slow 'html-minifier' package, we can just use 'replace' to remove spaces and line breaks
    //The native 'replace' was almost 30x faster than 'html-minifier' (128ms v.s. 3800ms) 
    var line_breaks_expression = /(\r\n|\n|\r)/g ;
    var white_spaces_expression = /\s\s+/g ;
	minified_output = original_file.replace(line_breaks_expression,'');
	minified_output = minified_output.replace(white_spaces_expression,' ');//replace with a single white space

    //Write minified file
    fs.writeFileSync('./catalog/catalog_minified.txt', minified_output);

    //Backup original file
    fs.writeFileSync('./catalog/catalog_original.txt', original_file);

    //Since the npm test expects the minified version to be stored in the same file catalog.txt, overwrite it with the mini version
    fs.writeFileSync('./catalog/catalog.txt', minified_output);

}; //closes exercise.four




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

    var fs = require('fs');

    var myHTMLpage = fs.readFileSync('./catalog/catalog.txt', 'utf8');  

    var courses_blocks = [];

    //Get entire course block for each course
    var expression = /<h3>(.*?)p>/g;

    var courses_blocks = myHTMLpage.match(expression);

    //console.log(courses_blocks[0]);

    return courses_blocks;


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

    var fs = require('fs');
    var cheerio = require('cheerio');  

    //Array to store all courses titles
    var courses_titles = [];

    //Load all scrubbed and minified HTML pages content
    var myHTMLpage = fs.readFileSync('./catalog/catalog.txt', 'utf8');  

    //Cheerio will create a DOM from the html data, it needs to be called $
    var $ = cheerio.load(myHTMLpage);

    //Now we can use the DOM to extract data from it

    //If we look at the html data, all course titles have a <p> followed by <h3>, so select those items
    var courses_list = $("p").next("h3");

    //Iterate through them
    courses_list.each(function(i, element){

        var course_title = element.children[0].data;

        courses_titles.push(course_title);

    });

    //Filter unique course titles
    var unique_course_titles = courses_titles.filter( getUnique );
   
    //Remove any undefined elements if any
    unique_course_titles = unique_course_titles.filter(function ( element ) {
            return element !== undefined;
            });

    return unique_course_titles;

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

    //Get unique course titles
    var course_titles = exercise.six();

    //An array to store cleaned titles
    var cleaned_course_titles = [];

    course_titles.forEach(function(title,i){

        //Turn everything to lower case
        title = title.toLowerCase();

        //First remove digits and none alphabetic characters including punctuation
        //Second remove common words
        //Third remove any left over stand alone letters 'e.g. j'
        //Fourth remove any extra spaces
        title = title.replace(/[^a-zA-Z ]/g,"");
        title = title.replace(/\b(?:the|and|then|them|there|that|a|an|it|are|this|is|to|of|for|from|in|on|ii|&)\b/ig, '');
        title = title.replace(/\b[a-z]\b/g,"");
        title = title.replace(/\s+/g, " ").trim();

        cleaned_course_titles.push(title);

    });


    return cleaned_course_titles;

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

    var cleaned_course_titles = exercise.seven();

    //Join all array elements in one big string and seperate them by a space
    var words_string = cleaned_course_titles.join(" ");

    //Convert the big string into an array of words, this is around 16k words
    var words_array = words_string.split(' ');

    //Only around 2k words of the 16k are unique
    //var unique_words = words_array.filter( getUnique );

    return words_array;

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

    var words_array = exercise.eight();

    var fs = require('fs');

    //This is called an associative array, it's basically an object
    //but it's in a sense an array with indices that are string words, not integers
    var words_count = {};

    var size = words_array.length;

    for (var i=0; i<size; i++){

        var word = words_array[i];

        //If an entry for this word exists, increment it by 1, otherwise initiate a new entry with 1
        if (words_count[word]) {
            words_count[word]++;
         } 
        else {
            words_count[word] = 1;
         }
        
    }


   //Save content of array to catalogSample/catalog_data.js file for plotting
   //We assume that catalogSample folder is in the same directory we are in, if it doesn't exist, create it
   if (!fs.existsSync('catalogSample')) {
        //Create directory
        fs.mkdirSync('catalogSample', 0755);
    }

   var myData = JSON.stringify(words_count);
   var final = 'var scores = ' + myData + ';'; //This is the format expected to be in the catalog_data.js file
   fs.writeFileSync('./catalogSample/catalog_data.js', final);
  
   //Top words were:
   //#1 engineering
   //#2 science
   //#3 Special

   return words_count;

};



//Helper function to return unique items in an array
function getUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


module.exports = exercise;


//I added these tests here for now to ease debugging
//var result = exercise.one();
//exercise.two();
//exercise.three();
//exercise.four();
//var courses_blocks = exercise.five();
//var course_titles = exercise.six();
//var cleaned_course_titles = exercise.seven();
//var words_array = exercise.eight();

//This will call functions 8 to 6 in a chain to accomplish the task
//var words_count_array = exercise.nine();

//console.log('Done!');



