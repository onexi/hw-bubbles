var request = require('request');
var syncRequest = require('sync-request');
var fs = require('fs');
var courses = []
var urls = []
// Fill all courses until Course 21
for (var i=1;i<=22;i++) {
    courses.push(String(i));
}
var specialCourses = ['21A','21W','21G','21H','21L','21M','WGS',
                  'CC','CSB','EC','EM','ES','HST','IDS','MAS',
                  'SCM','MS', 'AS', 'NS', 'STS', 'SWE', 'SP','24'
                 ]
courses = courses.concat(specialCourses);
console.log(courses);
var urlFormat = "http://student.mit.edu/catalog/";
const startOfAscii = 97;//String.fromCharCode(97); //Asci of a

var processModifiers = function(courseId) {
    var currentChar = startOfAscii;
    var failFlag = false;
    while (!failFlag) {
        var charModifier = String.fromCharCode(currentChar);
        urlToTry = urlFormat + "m" + courseId + charModifier+".html";
        console.log("Trying "+urlToTry);
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
var writeUrl = function(element) {
    fs.appendFileSync('./urls.txt',element+'\n');
}
urls.forEach(writeUrl);
console.log(urls);

