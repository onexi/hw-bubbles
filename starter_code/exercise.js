var request = require('request');
var fs = require('fs');
var shell = require('shelljs/global');
var htmlminify = require('html-minifier');
var cheerio = require('cheerio');
var exercise = {};


//var name = []
exercise.one = function () {
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

    var str1 = 'http://student.mit.edu/catalog/m';
    var str2 = '.html';
    var course = [['a', 'b', 'c'], ['a', 'b'], ['a'], ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'q', 'r', 's']];
    var depart = [['1', '2', '6', '11', '16', '22'], ['3', '5', '8', '14', '9', '10', '12', '16', '17', '18', '24', 'STS', 'HST', '21M', '21W'],
    ['7', '20', '21', 'CC', 'CSB', 'EC', 'EM', 'ES', 'IDS', 'MAS', 'SCM', 'AS', 'MS', 'NS', 'SWE', 'SP', '21A', '21L', 'WGS'],
    ['4'], ['21G']];
    var url = [];
    for (var k = 0; k < depart.length; k++) {
        for (var i = 0; i < depart[k].length; i++) {
            for (var j = 0; j < course[k].length; j++) {
                url.push(str1 + depart[k][i] + course[k][j] + str2);
                //name.push('m' + depart[k][i] + course[k][j]);
            }
        }
    }

    //console.log(url);
    return url;
};

exercise.save = function (data, filename) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filename, data, function (err) {
            if (err) {
                reject(error);
            }
            resolve('The' + filename + 'was saved!');
        })
    })

}

exercise.get = function (url) {
    return new Promise(function (resolve, reject) {
        function callback(error, response, body) {
            if (!error) {
                resolve(body);

            }
            else {
                reject(error);
            }
        }
        request(url, callback);
    })

}

exercise.two = function () {
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
    /*var request = require('shelljs/global');
    var url = exercise.one();
    //myObject.CreateFolder ("C:\\users\\qinzi luo\\documents\\");
    url.forEach(function(u,i){
        exec('curl ' + u + '>catalog/' + name[i] + '.html');
    });       
    */
    var url = exercise.one();
    url.forEach(function (url, i) {
        var page = exercise.get(url);
        page.then(function (body) {
            //console.log(body);
            var filename = 'catalog/' + i + '.html';
            return exercise.save(body, filename);
        })

    })
};

exercise.read = function (i) {
    var content = fs.readFileSync('catalog/' + i + '.html', 'utf-8');
    content = fs.appendFileSync('catalog/catalog.txt', content);
}

exercise.three = function () {
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

    var url = exercise.one();
    /*var done = function () {
        return new Promise(function (resolve, reject) {
            exercise.two();
        });
    };
    done().*/
    for (var i = 0; i < url.length; i++) {
        exercise.read(i);
    };
};



//console.log(str);
/*var file = new File(txtFile);
file.open("w"); // open file with write access
file.writeln(str);
file.close();*/
//console.log(str);



exercise.four = function () {
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
    //console.log('hi');

    var content = fs.readFileSync('catalog/catalog.txt', 'utf-8');
    content = content.replace(/\n/g, '');
    content = content.replace(/\r\n/g, '');
    content = fs.writeFileSync('./catalog/catalog.txt', content);

};

exercise.five = function () {
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
    var page = fs.readFileSync('catalog/catalog.txt', 'utf-8');
    //var $ = cheerio.load(page);
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = page.match(expression);
    //console.log(matches);
    return matches;
};

exercise.six = function () {
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return an array of course titles.
    //
    //  You can use the NPM package cheerio.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    var page = fs.readFileSync('catalog/catalog.txt', 'utf-8');
    var $ = cheerio.load(page);
    var matches = [];
    $('h3').each(function (i, element) {
        matches.push($(element).text());
    })
    //console.log(matches);
    return matches;
};

exercise.seven = function () {
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
    var arr = exercise.six();
    var words = arr.map(function (title) {
        return title.toLowerCase().match(/([a-z]+)/g);
    });

    //console.log(words);
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].filter(function (word) {
            return word !== 'and' && 'the' && 'a' && 'an' &&'to' &&'of'&&'on'&& 'in';
        });
    }
    //console.log(words);
    return words;

};

exercise.eight = function () {
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
    //console.log('hi');
    /*words = words.reduce(function (previous, current) {
        return previous.concat(current);
    }, [])*/
    words = [].concat.apply([], words);
    //console.log(words);
    return words;
};

exercise.nine = function () {
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
    var wordcount= words.reduce(function (previous, current) {
        if (current !== null) {
            if (current in previous) {
                previous[current] += 1;
            }
            else {
                previous[current] = 1;
            }
        }
        return previous;

    }, {})
    //console.log(wordcount);
    var content = fs.writeFileSync('./catalogSample/catalog_data.js', 'var scores = '+JSON.stringify(wordcount));
    return wordcount;

};


module.exports = exercise;
