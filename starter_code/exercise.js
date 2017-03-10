var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var exercise = {};
require('shelljs/global');

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
	var urls = [];
    var host = 'http://student.mit.edu/catalog/m';
    var letter = ['a','b','c','d','e','f','g','h','q','r','s'];
    var num_1 = ['1','2','6','11','15'];
    var num_2 = ['3','5','8','9','10','12','14','16','17','18','22','24','HST','STS','21W','21H','21M'];
    var num_3 = ['7','20','21','CC','CSB','EC','EM','ES','IDS','MAS','SCM','AS','MS','NS','SWE','SP','CMS','21A','21L','WGS'];
    for (i = 0; i<4; i++){
        for (j=0; j<num_1.length; j++){
           urls.push(host + num_1[i] + letter[j] +'.html');
        }
    }
    for (i = 0; i<num_2.length; i++){
        for (j=0; j<2; j++){
           urls.push(host + num_2[i] + letter[j] +'.html');
        }
    }
    for (i = 0; i<num_3.length; i++){

        urls.push(host + num_3[i] + 'a' +'.html');
    }

    for (j=0; j<7; j++){
           urls.push(host + '4' + letter[j] +'.html');
        }
    for (j=0; j<11; j++){
           urls.push(host + '21G' + letter[j] +'.html');
        }
    // console.log(urls);
    return urls;
};


exercise.download = function(url){
    // var url_array = url.split("/");
    // var name = url_array[4];
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
}


exercise.save = function(data, filename){
	return new Promise(function(resolve, reject){
		// write listings to file
		fs.writeFile(filename, data, function(err) {
			if(err) {
				reject(error);
			}
			resolve('The ' + filename + ' was saved!');
		}); 
	});
};


exercise.two = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Download every course catalog page.
    //
    //  You can use the NPM package "request".
    //  Or curl with the more info.
    // -----------------------------------------------
    var urls = exercise.one();
    // console.log(urls);
    urls.forEach(function(url,i){
    var page = exercise.download(url);
    page.then(function(body){
        // console.log(body);
        var filename = 'catalog/' + i + '.html';
        return exercise.save(body, filename);
    });
    // then(function(msg){
    //     console.log(msg);
    // });
    });
 
};


exercise.read = function(url){
	// return new Promise(function(resolve, reject){
    var content = fs.readFileSync ('catalog/'+ i +'.html','utf-8');
    // console.log(content);
    content = fs.appendFileSync('catalog/catalog.txt', content);
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
    // exercise.read();
    var urls = exercise.one();
    // console.log(urls);
    urls.forEach(function(url,i){
        // console.log(i);
    exercise.read(i);
    });
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

//     fs.readFile ('catalog/catalog.txt','utf-8',function read(err, data){
//     if(err){
//         throw err;
//     }
//     content = data;    
//     content=content.replace(/\s+/g,'');


//     fs.writeFile('catalog/catalog.txt', content, function(err) {
// 	if(err) {
//         throw err;
//     }
//     // console.log(typeof(content));
//     return content;        	       
// });				
// });

    content = fs.readFileSync('catalog/catalog.txt','utf-8');
    content=content.replace(/\n/g,'');
    content=content.replace(/\n/g,'');
    
    content = fs.writeFileSync('catalog/catalog.txt', content);

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
    var data = fs.readFileSync('catalog/catalog.txt','utf-8');
    var expression = /<h3>(.*?)<br><I>/g;
    var matches = data.match(expression);
    // console.log(matches);
    return matches;  

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
    var data = fs.readFileSync('catalog/catalog.txt','utf-8');
    // console.log(data);
    var $ = cheerio.load(data);
    var courses = [];
    $('h3').each(function(i, element){
        courses.push($(element).text());
    });
    // console.log(courses);
    return courses;
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

    var titles = exercise.six();
    var common = ['and','the','a','to','an','in','on','towards','with','of','j','for','at','on'];
    var words = titles.map(function(title){
        title.split(' ');
    return title.toLowerCase().match(/[a-z]+/g);
});
    // console.log(words);
    var filtered = []
    for (i=0;i<words.length;i++){
        var sub = words[i].filter(function(word){
        if(common.includes(word)){
            return false;
        }
        else return true;
    });
    filtered.push(sub);
    }
    

// console.log(filtered);
return filtered;


};

exercise.merge = function(x1,x2){

return x1.concat(x2);
}
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

    // var merged = words.reduce(exercise.merge);
    data =exercise.seven();
    var merged = data.reduce(exercise.merge);
    // console.log(merged);
    return merged;
};


exercise.nine = function(){
  data = exercise.eight();
  return data.reduce(function(prev, c) {
    if (prev.has(c)) {  // use `has` and `set` operations on Map objects
      prev.set(c, prev.get(c) + 1);
    } else {
      prev.set(c, 1);
    }
    return prev;    // return the map, so it will be prev for the next iteration
  }, new Map());    // Set the initial value to a new Map object

};
// console.log(exercise.nine());
module.exports = exercise;

//How to return string? no need to call the readfile every time. 
//After filting out the spaces, why can we split title by " "?
//callback.
//wordcount array
