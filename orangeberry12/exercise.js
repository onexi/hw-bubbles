var request = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
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
    //all the course links are in the <ul> element

    // get all the normal numbers first
    var suffixes = []
    for (var i = 1; i < 25; i++){
        if(i!==23 && i!==19){
            suffixes.push('m'+i+'a.html');
        };
    };
    
    var otherSuffixes = ['m21Aa.html','mCMSa.html','m21Wa.html',
    'm21Ga.html','m21Ha.html','m21La.html','m21Ma.html','mWGSa.html',
    'mCCa.html','mCSBa.html','mECa.html', 'mEMa.html', 'mESa.html','mHSTa.html',
    'mIDSa.html','mMASa.html','mSCMa.html','mASa.html','mMSa.html','mNSa.html',
    'mSTSa.html','mSWEa.html','mSPa.html',];

    var allSuffixes = suffixes.concat(otherSuffixes);

    var completeLinks = []
    var url = 'http://student.mit.edu/catalog/'

    allSuffixes.forEach((element, index, array)=>{
        let address = url + element;
        completeLinks.push(address);
    });
    //console.log(completeLinks.length);
    return completeLinks;
};
//exercise.one()


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
    //var fetch = require('node-fetch');
    var fs = require('fs');

    //get urls from part 1
    var urls = exercise.one();
    /*
    const writeFile = (path, data, opts = 'utf8') =>
    new Promise((res, rej) => {
        fs.writeFile(path, data, opts, (err) => {
            if (err) rej(err)
            else res()
        })
    })

    var makeRequest = async function (url,counter) {
        var res = await fetch(url);
        await writeFile('./catalog/' + counter + '.html', await res.text());
        return 'done - ' + counter;        
    };  
    
    urls.forEach(function(url,i){
        makeRequest(url,i).then((result) =>{
            console.log(result);
        });    
    })
    */
   urls.forEach(function(url,counter){
       var res = request('GET',url);
       var filename = './catalog/' + counter  + '.html';
       fs.writeFileSync(filename,res.getBody().toString());
   })

};
//exercise.two();

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

    //var fs = require('fs');

    //get all the files in the catalog directory
    //exclude catalog.txt if it has already been made
    var catalogDirectory = './catalog/';
    var files = fs.readdirSync(catalogDirectory,'utf8');
    var filePaths = [];
    /*
    files.forEach((file,index,array)=>{
        if (file!== 'catalog.txt'){
            filePaths.push(catalogDirectory+file);
        }   
    });
    */

    files.forEach((file)=>{
        var fLength = file.length;
        //console.log(file);
        if (Number(file[fLength-6])>=0){
            console.log('we want this file: ' + file);
            filePaths.push(catalogDirectory+file);
        }
    });
    
    
    //write the content of each file to <content>
    var fileContent = '';
    filePaths.forEach((path, index, array) =>{
        var currentContent = fs.readFileSync(path,'utf8');
        //console.log(currentContent);
        fileContent+=currentContent;
    });

    
    //write <content> to a file called "catalog.txt"
    var fileName = './catalog/catalog.txt'
    fs.writeFileSync(fileName, fileContent, (err) => {
       if (err) throw err;
       console.log('Saved the catalog file!');
    });
    
};
//exercise.three();

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
    //var fs = require('fs');
    
    var filePath = './catalog/catalog.txt';
    var oldFileContents = fs.readFileSync(filePath,'utf8');
    //console.log(oldFileContents);
    
    var newFileContents = minify(oldFileContents,{
        collapseWhitespace: true
    });
    
    fs.writeFileSync(filePath, newFileContents, (err) => {
        if (err) throw err;
        console.log('Saved the catalog file!');
     });
     
    //console.log(newFileContents);

};
//exercise.four();

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
    //var cheerio = require('cheerio');
    //var fs = require('fs');

    var filePath = './catalog/catalog.txt';
    var myPage = fs.readFileSync(filePath,'utf8');
    // load dom
    const $ = cheerio.load(myPage);
    var allCourses = []
    
    $('h3').each((i,element) => {
        allCourses[i]=$(element).text();
    });
    //console.log(allCourses);
    return allCourses;
    

};
//exercise.five();

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

    var allTitles = exercise.five();
    console.log(allTitles);
    return allTitles;
};
//exercise.six();

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
    //var fs = require('fs');

    //first filter out non-letters
    var allTitles = exercise.six();
    console.log(allTitles);
    // 3 letter words to keep art, law, war lab sex oil air zen era age fan
    var keepWords = ['art','law','war','sex','lab','oil','air','zen','era','age','fan','toy'];

    //function to filter out useless words
    var deleteWords = function(element, index, array){
        var newEntry = ''
        //if an entry is 3 long, delete it unless it is 'art'
        //console.log('the word is: ' + element);
        eLength = element.length;
        if (eLength > 3){
            //if element has new end
            if (element.substring(eLength-3,eLength)==='new'){
                var baseWord = element.substring(0,eLength-3);
                //console.log("the base word is: " + baseWord);
                if (baseWord.length >= 3){
                    newEntry = baseWord;
                }
            }
            //if element has j at end
            else if (element[eLength-1]!=='j' && element !== 'that'){
                newEntry = element;
            } 
            else{
                newEntry = element;
            }
        }
        else if (eLength ===3 && keepWords.includes(element)){
            newEntry = element;
        }
        //console.log(newEntry);
        array[index] = newEntry;
        
    };

    var cleanedTitles = allTitles.map((title) => {
        //gets all letters and spaces 
        var currentTitle = title.toLowerCase().match(/[a-z +]/g) 
        //reduces match result to one array
        var reducedTitle = currentTitle.reduce((accumulator,currentVal)=>{
            return accumulator + currentVal;
        });

        var splitTitle = reducedTitle.split(' ');
        splitTitle.forEach(deleteWords);

        console.log(splitTitle);

        var cleanerArray = splitTitle.reduce((accumulator,currentVal) => {
            if (accumulator === '' || currentVal === ''){
                return accumulator + currentVal;
            }
            else{
                return accumulator + ' ' + currentVal;
            }
        });

        return cleanerArray;
    });
    
    
    var fileName = './catalog/test.txt'
    fs.writeFile(fileName, cleanedTitles, (err) => {
       if (err) throw err;
       console.log('Saved the catalog file!');
    });
    

    //console.log(cleanedTitles);

    return cleanedTitles
};

//exercise.seven();

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
    var allTitles = exercise.seven();
    console.log(allTitles);

    var combinedList = allTitles.reduce((accumulator,currentVal)=>{
        if (currentVal === '' || accumulator === ''){
            return accumulator + currentVal;
        }
        else{
            return accumulator + ' ' + currentVal;
        }   
    });

    var masterList = combinedList.split(' ');

    //console.log(masterList);

    return masterList;

};
//exercise.eight();

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

    wordScore = {};

    var allWords = exercise.eight();

    allWords.forEach((word,i,arr) =>{
        if (wordScore[word]!= undefined){
            wordScore[word]+=1;
        }
        else{
            wordScore[word]=1;
        }
    });

    console.log(wordScore);
    return wordScore;

};
//exercise.nine();


module.exports = exercise;
