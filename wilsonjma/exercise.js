var exercise = {};

exercise.one = function(){

};
       
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
exercise.two = function(){


    var request = require('request');
    var fs = require('fs');
    exercise.get = function(url){
        return new Promise(function(resolve, reject){
             function callback(error, response, body){
                 if(!error){
                     resolve(body);
        
                 }
                 else{
                     reject(error);
                 }
             }
        request(url, callback);
        });
    };

    exercise.save = function(data, filename){

        return new Promise(function(resolve,reject){
            fs.writeFile(filename, data, function(err){
                if(err){
                    reject(error);
                }
                resolve('The ' + filename + ' was saved!');
            
            });
        });
    };
};





    
    

    
   
    


    
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

exercise.three = function(){
    var allText  = fs.readFileSync('./catalog/catalog0.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog0.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog1.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog2.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog3.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog4.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog5.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog6.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog7.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog8.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog9.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog10.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog11.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog12.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog13.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog14.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog15.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog16.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog17.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog18.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog19.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog20.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog21.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog22.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog23.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog24.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog25.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog26.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog27.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog28.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog29.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog30.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog31.txt', 'UTF8')+
                            fs.readFileSync('./catalog/catalog32.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog33.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog34.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog35.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog36.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog37.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog38.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog39.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog40.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog41.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog42.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog43.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog44.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog45.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog46.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog47.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog48.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog49.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog50.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog51.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog52.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog53.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog54.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog55.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog56.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog57.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog58.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog59.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog60.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog61.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog62.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog63.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog64.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog65.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog66.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog67.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog68.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog69.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog70.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog71.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog72.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog73.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog74.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog75.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog76.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog77.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog78.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog79.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog80.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog81.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog82.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog83.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog84.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog85.txt', 'UTF8') +
                            fs.readFileSync('./catalog/catalog86.txt', 'UTF8');
fs.writeFileSync('Catalog.txt', allText, function(err){
    if(err){
        return console.log(err);
    }
    console.log("The file was saved!");

});
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
    var body = fs.readFileSync('./Catalog.txt', 'UTF8');
    body = body.replace(/\n/g, '');
    body = body.replace(/\r/g, '');

    fs.writeFileSync('Catalog.txt', body);
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
    var cheerio = require('cheerio');
    var info = './Catalog.html';
    var $ = cheerio.load(info);


    var matches = $('h3').find('*').contents().map(function(){
        console.log(this.type === 'text');
});
    
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
