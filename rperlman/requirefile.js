var request = require('request');
var fs = require('fs');
var exercise = {};

exercise.get = function(url){
    
    return new Promise(function(resolve, reject){

        function callback(error, response, body){
           if (!error){
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

    return new Promise(function(resolve, reject){

        // write listings to filename
        fs.writeFile(filename, data, function(err){
            if(Err) {
                reject(error);
            }
            resolve('The ' + filename + 'was saved!');
        });
    });
};

module.exports = exercise;