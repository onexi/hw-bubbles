var exercise = {};


exercise.one = function(url){
    var urls = [
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
       "http://student.mit.edu/catalog/11b.html",
       "http://student.mit.edu/catalog/m11c.html",
       "http://student.mit.edu/catalog/m12a.html",
       "http://student.mit.edu/catalog/m12b.html",
       "http://student.mit.edu/catalog/m14a.html",
       "http://student.mit.edu/catalog/m14b.html",
       "http://student.mit.edu/catalog/m15a.html",
       "http://student.mit.edu/catalog/m15b.html",
       "http://student.mit.edu/catalog/m15c.html",
       "http://student.mit.edu/catalog/m16a.html",
       "http://student.mit.edu/catalog/m16b.html",
       "http://student.mit.edu/catalog/m17a.html",
       "http://student.mit.edu/catalog/m17b.html",
       "http://student.mit.edu/catalog/m18a.html",
       "http://student.mit.edu/catalog/m18b.html",
       "http://student.mit.edu/catalog/m20a.html",
       "http://student.mit.edu/catalog/m21a.html",
       "http://student.mit.edu/catalog/m21Aa.html",
       "http://student.mit.edu/catalog/mCMSa.html",
       "http://student.mit.edu/catalog/m21Wa.html",
       "http://student.mit.edu/catalog/m21Ga.html",
       "http://student.mit.edu/catalog/m21Gb.html",
       "http://student.mit.edu/catalog/m21Gc.html",
       "http://student.mit.edu/catalog/m21Gd.html",
       "http://student.mit.edu/catalog/m21Ge.html",
       "http://student.mit.edu/catalog/m21Gf.html",
       "http://student.mit.edu/catalog/m21Gg.html",
       "http://student.mit.edu/catalog/m21Gh.html",
       "http://student.mit.edu/catalog/m21Gq.html",
       "http://student.mit.edu/catalog/m21Gr.html",
       "http://student.mit.edu/catalog/m21Gs.html",
       "http://student.mit.edu/catalog/m21Gg.html",
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
       "http://student.mit.edu/catalog/mCSBa.html",
       "http://student.mit.edu/catalog/mECa.html",
       "http://student.mit.edu/catalog/mEMa.html",
       "http://student.mit.edu/catalog/mESa.html",
       "http://student.mit.edu/catalog/mHSTa.html",
       "http://student.mit.edu/catalog/mIDSa.html",
       "http://student.mit.edu/catalog/mMASa.html",
       "http://student.mit.edu/catalog/mSCMa.html",
       "http://student.mit.edu/catalog/mASa.html",
       "http://student.mit.edu/catalog/mMSa.html",
       "http://student.mit.edu/catalog/mNSa.html",
       "http://student.mit.edu/catalog/mSTSa.html",
       "http://student.mit.edu/catalog/mSTSb.html",
       "http://student.mit.edu/catalog/mSWEa.html",
       "http://student.mit.edu/catalog/mSPa.html",
   ]
urls.forEach(function(url,i){

    var page = exercise.get(url);
    page.then(function(body){
        console.log(body);
        var filename = 'catalog' + i + '.txt';
        exercise.save(body,filename);
    });

});
};

exercise.two = function(){
    
    var request = require('request');
    var fs = require('fs');
    var exercise = {};

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
    
    return new Promise(function(resolve, reject){

        fs.writeFile(filename, data, function(err){
            if(err) {
                reject(error);
            }
            resolve('The ' + filename + ' was saved!');

        });

    });
};


exercise.three = function(){
    var currentText = fs.readFileSync('./Catalog/catalog0.txt', 'UTF8') + 
                    fs.readFileSync('./Catalog/catalog1.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog2.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog3.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog4.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog5.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog6.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog7.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog8.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog9.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog10.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog11.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog12.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog13.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog14.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog15.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog15.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog16.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog17.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog18.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog19.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog20.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog21.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog22.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog23.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog24.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog25.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog26.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog27.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog28.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog29.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog30.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog31.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog32.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog33.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog34.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog35.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog36.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog37.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog38.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog39.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog40.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog41.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog42.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog43.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog44.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog45.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog46.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog47.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog48.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog49.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog50.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog51.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog52.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog53.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog54.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog55.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog56.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog57.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog58.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog59.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog60.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog61.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog62.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog63.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog64.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog65.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog66.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog67.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog68.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog69.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog70.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog71.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog72.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog73.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog74.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog75.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog76.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog77.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog78.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog79.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog80.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog81.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog82.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog83.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog84.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog85.txt', 'UTF8') +
                    fs.readFileSync('./Catalog/catalog86.txt', 'UTF8'); 
                   
    
fs.writeFile('catalog.txt', currentText, (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});
};

exercise.four = function(){
    var body = fs.readFileSync('./catalog.txt', 'utf8');
    
    body = body.replace(/\n/g, '');
    body = body.replace(/\r/g, '');
   
    fs.writeFileSync('catalog.txt',body); 
    
};

exercise.five = function(){
      
var cheerio = require('cheerio');
var data = 'catalog.html'
var $ = cheerio.load(data);
};

exercise.six = function(){
   var cheerio = require('cheerio');
var data = 'catalog.html'
var $ = cheerio.load(data);
var titles = [];

$('h3').each(function(i, title){
    titles.push($(title).text());
});
console.log(titles);

var expression = /<h3>(.*?)<\/br>/g;
var matches = data.match(expression);
console.log(matches);

};

exercise.seven = function(){
   var words = titles.map(function(title){
	return title.toLowerCase().match(/([a-z]+)/g);
});
console.log(words);
};

exercise.eight = function(){
    var wordsFlat = words.reduce(function(previous, current) {
    return previous.concat(current);
}, []);
console.log(wordsFlat);
};

//exercise.nine = function(){
// could not figure out how to write the frequency
//};


module.exports = exercise