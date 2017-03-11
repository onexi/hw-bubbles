var exercise = {};

require('shelljs/global');


exercise.one = function(){

    addresses = [
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
        "http://student.mit.edu/catalog/m16a.html",
        "http://student.mit.edu/catalog/m16b.html",
        "http://student.mit.edu/catalog/m16c.html",
        "http://student.mit.edu/catalog/m17a.html",
        "http://student.mit.edu/catalog/m17b.html",
        "http://student.mit.edu/catalog/m18a.html",
        "http://student.mit.edu/catalog/m18b.html",
        "http://student.mit.edu/catalog/m20a.html",
        "http://student.mit.edu/catalog/m21a.html",
        "http://student.mit.edu/catalog/m21Aa.html",
        "http://student.mit.edu/catalog/mCMSa.html",
        "http://student.mit.edu/catalog/m21Ga.html",
        "http://student.mit.edu/catalog/m21Gb.html",
        "http://student.mit.edu/catalog/m21Gc.html",
        "http://student.mit.edu/catalog/m21Gd.html",
        "http://student.mit.edu/catalog/m21Ge.html",
        "http://student.mit.edu/catalog/m21Gf.html",
        "http://student.mit.edu/catalog/m21Gg.html",
        "http://student.mit.edu/catalog/m21Gh.html",
        "http://student.mit.edu/catalog/m21Gi.html",
        "http://student.mit.edu/catalog/mCMSj.html",
        "http://student.mit.edu/catalog/m21Gk.html",
        "http://student.mit.edu/catalog/m21Gl.html",
        "http://student.mit.edu/catalog/m21Gm.html",
        "http://student.mit.edu/catalog/m21Gn.html",
        "http://student.mit.edu/catalog/m21Go.html",
        "http://student.mit.edu/catalog/m21Gp.html",
        "http://student.mit.edu/catalog/m21Gq.html",
        "http://student.mit.edu/catalog/m21Gr.html",
        "http://student.mit.edu/catalog/m21Gs.html",
        "http://student.mit.edu/catalog/m21Ha.html",
        "http://student.mit.edu/catalog/m21Hb.html",
        "http://student.mit.edu/catalog/m21La.html",
        "http://student.mit.edu/catalog/m21Ma.html",
        "http://student.mit.edu/catalog/m21Mb.html",
        "http://student.mit.edu/catalog/mWGSa.html",
        "http://student.mit.edu/catalog/m22a.html",
        "http://student.mit.edu/catalog/m22b.html",
        "http://student.mit.edu/catalog/m22c.html",
        "http://student.mit.edu/catalog/m24a.html",
        "http://student.mit.edu/catalog/m24b.html",
        "http://student.mit.edu/catalog/mCCa.html",
        "http://student.mit.edu/catalog/mCCb.html",
        "http://student.mit.edu/catalog/mCSBa.html",
        "http://student.mit.edu/catalog/mECa.html",
        "http://student.mit.edu/catalog/mEMa.html",
        "http://student.mit.edu/catalog/mESa.html",
        "http://student.mit.edu/catalog/mHSTa.html",
        "http://student.mit.edu/catalog/mHSTb.html",
        "http://student.mit.edu/catalog/mIDSa.html",
        "http://student.mit.edu/catalog/mMASa.html",
        "http://student.mit.edu/catalog/mSCMa.html",
        "http://student.mit.edu/catalog/mASa.html",
        "http://student.mit.edu/catalog/mMSa.html",
        "http://student.mit.edu/catalog/mNSa.html",
        "http://student.mit.edu/catalog/mSTSa.html",
        "http://student.mit.edu/catalog/mSTSb.html",
        "http://student.mit.edu/catalog/mSWEa.html",
        "http://student.mit.edu/catalog/mSPa.html"
    ];

    return addresses;

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

    require('shelljs/global');

    var website = '';

    var courses = addresses;
    
        for(var i = 0; i<courses.length; i++)
    {
        //website = 'curl '+courses[i]+' > catalog\output'+i+'.txt';
        website = 'curl '+courses[i]+' --create-dirs -o /Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output'+[i]+'.txt';
        exec(website);
    }
    
    
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
    // ----------------------------------------------
    
    var concat = require('concat-files');
 
    concat([
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output0.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output1.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output2.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output3.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output4.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output5.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output6.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output7.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output8.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output9.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output10.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output11.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output12.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output13.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output14.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output15.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output16.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output17.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output18.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output19.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output20.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output21.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output22.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output23.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output24.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output25.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output26.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output27.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output28.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output29.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output30.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output31.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output32.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output33.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output34.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output35.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output36.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output37.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output38.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output39.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output40.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output41.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output42.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output43.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output44.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output45.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output46.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output47.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output48.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output49.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output50.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output51.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output52.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output53.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output54.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output55.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output56.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output57.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output58.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output59.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output60.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output61.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output62.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output63.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output64.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output65.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output66.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output67.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output68.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output69.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output70.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output71.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output72.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output73.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output74.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output75.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output76.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output77.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output78.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output79.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output80.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output81.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output82.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output83.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output84.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output85.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output86.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output87.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output88.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output89.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output90.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output91.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output92.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output93.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output94.txt',
        '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/output95.txt',
      ], '/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/catalog.txt', function(err) {
        if (err) throw err
        //console.log('done');
    });
    //}

};

exercise.four = function(){


    var minify = require('html-minifier').minify;
    minify('/Users/mazer/dev/narrow-mango/HW04/hw-bubbles/smazer2/catalog/catalog.txt', {
    collapseWhitespace: true
});

var fs = require('fs');

var file = fs.readFileSync('catalog/catalog.txt', 'utf8');
file = file.replace(/\n/g, '');
file = file.replace(/\r/g,'');

fs.writeFileSync('./catalog/catalog.txt', file);

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

    var fs = require('fs');

    var file = fs.readFileSync('catalog/catalog.txt', 'utf8');
   
    var expression = /<h3>(.*?)<br><I>/g;;
    var matches = file.match(expression);

    return matches;
    
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

    var fs = require('fs');

    var file = fs.readFileSync('catalog/catalog.txt', 'utf8');

    var $ = cheerio.load(file);

    var titles = [];
    $('h3').each(function(i, title){
	titles.push($(title).text());
    });

    return titles;

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

    var courses = exercise.six();

    for(var i = 0; i<courses.length; i++)
    {
        courses[i] = courses[i].replace('.','');
        courses[i] = courses[i].replace(',','');
        courses[i] = courses[i].replace('!','');
        courses[i] = courses[i].replace('0','');
        courses[i] = courses[i].replace('1','');
        courses[i] = courses[i].replace('2','');
        courses[i] = courses[i].replace('3','');
        courses[i] = courses[i].replace('4','');
        courses[i] = courses[i].replace('5','');
        courses[i] = courses[i].replace('6','');
        courses[i] = courses[i].replace('7','');
        courses[i] = courses[i].replace('8','');
        courses[i] = courses[i].replace('9','');
        courses[i] = courses[i].replace('and','');
        courses[i] = courses[i].replace('a','');
        courses[i] = courses[i].replace('the','');
        courses[i] = courses[i].replace('in','');
        courses[i] = courses[i].replace('at','');
        courses[i] = courses[i].replace('of','');
        courses[i] = courses[i].replace('an','');
        courses[i] = courses[i].replace('is','');
    }

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

    return courses;
};

exercise.eight = function(){

    var courses = exercise.seven();
 
    var wordsFlat = courses.reduce(function(previous, current) {
        return previous.concat(current);
    }, []);
 
    return wordsFlat;
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

    var courseWords = exercise.eight();

    var wordCount = courseWords.reduce(function(prev, cur) {
        if(cur in prev)
        {
                prev[cur]+=1;
        }
        else
        {
                prev[cur]=1;
        }
    });
        // -----------------------------------------------
    //   YOUR CODE
    //
    //  Count the word frequency.
    //
    //  Return a word count array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    return wordCount;
};


module.exports = exercise;
