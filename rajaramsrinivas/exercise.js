var request = require('request');
var syncRequest = require('sync-request');
var fs = require('fs');
var exercise = {};
exercise.urls = [];
exercise.nFiles = 0; // Number of files in th edirectory
exercise.catalogFile = './catalog/catalog.txt';
exercise.courses = []; // names of individual courses
exercise.courseWords = []; // words coming from courses
exercise.one = function(fromFile=false){
    /* Takes a static list of courses from 1 to 24, excluding 23 and 
     * has static maps for additional course codes such as EM and MAS
     * For each course, tries to hit pages with sequence for a,b etc. and stops iterating
     * when the page isn't retrievable. Builds a url list across all courses
     * and returns the list in the end. This can be inefficient, in that we're not saving
     * the file in first pass. But we could add flags to do exercise.two in one
     */
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
    // ToDo: Merge two and one
    if (fromFile) {
        var urls = fs.readFileSync('./urls.txt');
        //console.log(urls.toString());
        exercise.urls = urls.toString().split(/\r?\n/); //regex to split new lines
        //console.log(exercise.urls);
        return [];
    }
    var courses = [];
    var urls = [];
    var filetoWrite = './urls.txt';
    // Fill all courses until Course 21
    for (var i=1;i<=22;i++) {
        courses.push(String(i));
    }
    var specialCourses = ['21A','21W','21H','21L','21M','WGS',
                    'CC','CSB','EC','EM','ES','HST','IDS','MAS',
                    'SCM','MS', 'AS', 'NS', 'STS', 'SWE', 'SP','24'
                    ]
    courses = courses.concat(specialCourses);
    //console.log(courses);
    var urlFormat = "http://student.mit.edu/catalog/";
    const startOfAscii = 97;//Asci of a

    var processModifiers = function(courseId) {
        var currentChar = startOfAscii;
        var failFlag = false; //To keep track of request failures
        while (!failFlag) {
            var charModifier = String.fromCharCode(currentChar);
            urlToTry = urlFormat + "m" + courseId + charModifier+".html";
            //console.log("Trying "+urlToTry);
            var res = syncRequest('GET',urlToTry);
            if (res.statusCode > 200) {
                failFlag = true;
            }
            else {
                urls.push(urlToTry);
                currentChar++;
            }
        }
    };

    courses.forEach(processModifiers);
    // Writing to a temp file just in case
    var writeUrl = function(element) {
        fs.appendFileSync('./urls.txt',element+'\n');
    }
    // Flush file if already exists
    if (fs.existsSync(filetoWrite)) {
        fs.truncateSync(filetoWrite);
    }
    urls.forEach(writeUrl);
    exercise.urls = urls;
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
    var dir = './catalog/'
    var numFiles = 0;
    var downloadUrl = function(urlToDownload,index) {
        var response = syncRequest('GET',urlToDownload);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(dir+index+'.html', response.getBody().toString());
        numFiles++;
    }
    exercise.urls.forEach(downloadUrl);
    exercise.numFiles = numFiles;
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
    //console.log("Building Catalog...")
    var dir = './catalog/'
    var catalogFile = dir + 'catalog.txt'
    var filesToRead = []
    for (var i=0;i<exercise.numFiles;i++) {
        filesToRead.push(dir+i+'.html');
    }
    // Flush catalog file if exists
    if (fs.existsSync(catalogFile)) {
        fs.truncateSync(catalogFile);
    }
    var readFiles = function(file, index) {
        //Read each file and push its content into a new file
        content = fs.readFileSync(file);
        fs.appendFileSync(catalogFile,content);
    }
    filesToRead.forEach(readFiles);
    //console.log("Built Catalog!");
    exercise.catalogFile = catalogFile;
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
    // Load contents from the file, minify it, and write back ti the same file
    //console.log('Minyfying catalog');
    var minify = require('html-minifier').minify;
    contents = fs.readFileSync(exercise.catalogFile).toString();
    var minifiedText = minify(contents, {
        //removeAttributeQuotes : true,
        removeEmptyElements : true,
        //removeScriptTypeAttributes: true,
        //collapseWhitespace: true
    });
    var minifiedFile = './catalog/catalog.minified.txt'; //ToDo: Get Catalog dir outside
    //Replace single quotes everyone, outside of attribute quotes removed by minifier
    minifiedText = minifiedText.replace(/'/g,'');
    //writing to separate file since it helps me understand the effectiveness of minify
    fs.writeFileSync(minifiedFile,minifiedText);
    //console.log('Minified');
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
    var cheerio = require('cheerio');
    var catalogData = fs.readFileSync('./catalog/catalog.minified.txt').toString(); //ToDo: Get the filename outside
    var $ = cheerio.load(catalogData);
    var courses = [];
    var stringizeCourse = function (index, element) {
        courses.push($(element).text().replace('\n',''));
    }
    $('h3').each(stringizeCourse);
    //console.log(courses);
    //console.log(courses.length);
    exercise.courses = courses;
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
    return exercise.five();
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
    // Also converting all text to lower case
    // ToDo: Move this to a json file
    var stopWords = ["sp","sts","stsj","a","as","ns","ms","scm","scmj","mas","masj","idss","idssj", //course codes picked
                     "ids","idsj","hsts","hst","ess","es","esj","ec","ecj","em","ems","ecur","ecurj",
                     "cc","ccb","ccbj", "ccj", "wgs", "wgss","wgsurg", "spurg", "spur", "spj",
                     "thg", "special", "ur", "urg", //ToDo : see if better regex helps here
                     //standard stopWords list below
                     "able","about","above","according","accordingly","across","actually","after","afterwards","again","against","ain't","all","allow","allows","almost","alone","along","already","also","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren't","around","as","aside","ask","asking","associated","at","available","away","awfully","b","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","believe","below","beside","besides","best","better","between","beyond","both","brief","but","by","c","c'mon","c's","came","can","can't","cannot","cant","cause","causes","certain","certainly","changes","clearly","co","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","could","couldn't","course","currently","d","definitely","described","despite","did","didn't","different","do","does","doesn't","doing","don't","done","down","downwards","during","e","each","edu","eg","eight","either","else","elsewhere","enough","entirely","especially","et","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","f","far","few","fifth","first","five","followed","following","follows","for","former","formerly","forth","four","from","further","furthermore","g","get","gets","getting","given","gives","go","goes","going","gone","got","gotten","greetings","h","had","hadn't","happens","hardly","has","hasn't","have","haven't","having","he","he's","hello","help","hence","her","here","here's","hereafter","hereby","herein","hereupon","hers","herself","hi","him","himself","his","hither","hopefully","how","howbeit","however","i","i'd","i'll","i'm","i've","ie","if","ignored","immediate","in","inasmuch","inc","indeed","indicate","indicated","indicates","inner","insofar","instead","into","inward","is","isn't","it","it'd","it'll","it's","its","itself","j","just","k","keep","keeps","kept","know","known","knows","l","last","lately","later","latter","latterly","least","less","lest","let","let's","like","liked","likely","little","look","looking","looks","ltd","m","mainly","many","may","maybe","me","mean","meanwhile","merely","might","more","moreover","most","mostly","much","must","my","myself","n","name","namely","nd","near","nearly","necessary","need","needs","neither","never","nevertheless","new","next","nine","no","nobody","non","none","noone","nor","normally","not","nothing","novel","now","nowhere","o","obviously","of","off","often","oh","ok","okay","old","on","once","one","ones","only","onto","or","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","own","p","particular","particularly","per","perhaps","placed","please","plus","possible","presumably","probably","provides","q","que","quite","qv","r","rather","rd","re","really","reasonably","regarding","regardless","regards","relatively","respectively","right","s","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seven","several","shall","she","should","shouldn't","since","six","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specified","specify","specifying","still","sub","such","sup","sure","t","t's","take","taken","tell","tends","th","than","thank","thanks","thanx","that","that's","thats","the","their","theirs","them","themselves","then","thence","there","there's","thereafter","thereby","therefore","therein","theres","thereupon","these","they","they'd","they'll","they're","they've","think","third","this","thorough","thoroughly","those","though","three","through","throughout","thru","thus","to","together","too","took","toward","towards","tried","tries","truly","try","trying","twice","two","u","un","under","unfortunately","unless","unlikely","until","unto","up","upon","us","use","used","useful","uses","using","usually","uucp","v","value","various","very","via","viz","vs","w","want","wants","was","wasn't","way","we","we'd","we'll","we're","we've","welcome","well","went","were","weren't","what","what's","whatever","when","whence","whenever","where","where's","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","who's","whoever","whole","whom","whose","why","will","willing","wish","with","within","without","won't","wonder","would","wouldn't","x","y","yes","yet","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves","z","zero"]
    var filterIrrelevant = function(course, i) {
        // Converts everything to lower case and also scrubs stop words
        exercise.courses[i] = course.toLowerCase().replace(/[^a-zA-Z ]+/g, "");
        //scrub first letter from course names starting with single chars suffixes on course codes (coming from J courses and similar)
        exercise.courses[i] = exercise.courses[i].replace(/^[a-z] /g,'');
        //console.log("Replaced "+course+' to '+exercise.courses[i]);
        exercise.courses[i] = exercise.courses[i].replace(new RegExp('\\b('+stopWords.join('|')+')\\b', 'g'), '');
    }
    exercise.courses.forEach(filterIrrelevant);
    //console.log(exercise.courses);
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
    var masterWords = [];
    splitIntoWords = function (element, i) {
        var words = element.split(/[\s,]+/);
        words = words.filter(wordsFilter);
        masterWords = masterWords.concat(words);
    }
    wordsFilter = function(element, index) {
        return element.trim() != '';
    }
    exercise.courses.forEach(splitIntoWords);
    //console.log(masterWords);
    exercise.words = masterWords;
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
    var freqMap = {};
    var updateMap = function(element, index) {
        if (element in freqMap) {
            freqMap[element] +=1;
        }
        else {
            freqMap[element] = 1;
        }
    }
    exercise.words.forEach(updateMap);
    exercise.freqMap = freqMap;
    Object.keys(exercise.freqMap).forEach( function (key) {
        console.log("'"+key+"' : "+exercise.freqMap[key]+",");
    });
    //console.log(exercise.freqMap);
};
module.exports = exercise;