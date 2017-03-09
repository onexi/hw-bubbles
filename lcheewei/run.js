var exercise = require('./exercise.js');

exercise.one();

exercise.two();

var p = new Promise (function (resolve, reject){
    exercise.three();
    resolve();
}).then (function (){
    exercise.four();
}).then (function (){
    exercise.five();
});

exercise.six();

exercise.seven();

exercise.eight();

exercise.nine();

