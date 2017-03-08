var exercise = {};
//var request = require('request');
var cheerio = require('cheerio');
var request= require('shelljs/global');
var fs = require('file-system');
var minify = require('html-minifier').minify;

var urlMatrix= []

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

	urlMatrix = ['http://student.mit.edu/catalog/m1a.html', 'http://student.mit.edu/catalog/m1b.html', 'http://student.mit.edu/catalog/m1c.html', 
    'http://student.mit.edu/catalog/m2a.html', 'http://student.mit.edu/catalog/m2b.html', 'http://student.mit.edu/catalog/m2c.html',
    'http://student.mit.edu/catalog/m3a.html', 'http://student.mit.edu/catalog/m3b.html',
    'http://student.mit.edu/catalog/m4a.html', 'http://student.mit.edu/catalog/m4b.html','http://student.mit.edu/catalog/m4c.html','http://student.mit.edu/catalog/m4d.html', 'http://student.mit.edu/catalog/m4e.html','http://student.mit.edu/catalog/m4f.html','http://student.mit.edu/catalog/m4g.html',
    'http://student.mit.edu/catalog/m5a.html', 'http://student.mit.edu/catalog/m5b.html',
    'http://student.mit.edu/catalog/m6a.html', 'http://student.mit.edu/catalog/m6b.html', 'http://student.mit.edu/catalog/ma6c.html', 
    'http://student.mit.edu/catalog/m7a.html', 
    'http://student.mit.edu/catalog/m8a.html', 'http://student.mit.edu/catalog/m8b.html',
    'http://student.mit.edu/catalog/m9a.html', 'http://student.mit.edu/catalog/m9b.html',
    'http://student.mit.edu/catalog/m10a.html', 'http://student.mit.edu/catalog/m10b.html',
    'http://student.mit.edu/catalog/m11a.html', 'http://student.mit.edu/catalog/m11b.html', 'http://student.mit.edu/catalog/m11c.html',
    'http://student.mit.edu/catalog/m12a.html', 'http://student.mit.edu/catalog/m12b.html', 'http://student.mit.edu/catalog/m12c.html',
    'http://student.mit.edu/catalog/m14a.html', 'http://student.mit.edu/catalog/m14b.html',
    'http://student.mit.edu/catalog/m15a.html', 'http://student.mit.edu/catalog/m15b.html','http://student.mit.edu/catalog/m15c.html',
    'http://student.mit.edu/catalog/m16a.html', 'http://student.mit.edu/catalog/m16b.html',
    'http://student.mit.edu/catalog/m17a.html', 'http://student.mit.edu/catalog/m17b.html',
    'http://student.mit.edu/catalog/m18a.html', 'http://student.mit.edu/catalog/m18b.html',
    'http://student.mit.edu/catalog/m20a.html', 
    'http://student.mit.edu/catalog/m21a.html', 
    'http://student.mit.edu/catalog/m21Aa.html', 
    'http://student.mit.edu/catalog/mCMSa.html', 
    'http://student.mit.edu/catalog/m21Wa.html', 'http://student.mit.edu/catalog/m21Wb.html',
    'http://student.mit.edu/catalog/m21Ga.html', 'http://student.mit.edu/catalog/m21Gb.html', 'http://student.mit.edu/catalog/m21Gc.html', 'http://student.mit.edu/catalog/m21Gd.html', 'http://student.mit.edu/catalog/m21Ge.html', 'http://student.mit.edu/catalog/m21Gf.html', 'http://student.mit.edu/catalog/m21Gg.html', 'http://student.mit.edu/catalog/m21Gh.html', 'http://student.mit.edu/catalog/m21Gq.html', 'http://student.mit.edu/catalog/m21Gr.html', 'http://student.mit.edu/catalog/m21Gs.html',
    'http://student.mit.edu/catalog/m21Ha.html', 'http://student.mit.edu/catalog/m21Hb.html',
    'http://student.mit.edu/catalog/m21La.html', 
    'http://student.mit.edu/catalog/m21Ma.html', 'http://student.mit.edu/catalog/m21Mb.html',
    'http://student.mit.edu/catalog/mWGSa.html', 
    'http://student.mit.edu/catalog/m22a.html', 'http://student.mit.edu/catalog/m22b.html', 'http://student.mit.edu/catalog/m22c.html',
    'http://student.mit.edu/catalog/mCCa.html', 
    'http://student.mit.edu/catalog/mCSBa.html', 
    'http://student.mit.edu/catalog/mECa.html', 
    'http://student.mit.edu/catalog/mEMa.html', 
    'http://student.mit.edu/catalog/mESa.html', 
    'http://student.mit.edu/catalog/mHSTa.html', 'http://student.mit.edu/catalog/mHSTb.html',
    'http://student.mit.edu/catalog/mIDSa.html', 
    'http://student.mit.edu/catalog/mMASa.html', 
    'http://student.mit.edu/catalog/mSCMa.html', 
    'http://student.mit.edu/catalog/mASa.html', 
    'http://student.mit.edu/catalog/mMSa.html', 
    'http://student.mit.edu/catalog/mNSa.html', 
    'http://student.mit.edu/catalog/mSTSa.html', 'http://student.mit.edu/catalog/m20b.html',
    'http://student.mit.edu/catalog/mSWEa.html',
    'http://student.mit.edu/catalog/mSPa.html', 
    ];

    console.log ('url length: '+urlMatrix.length);
	
	return urlMatrix;

	
		
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

//already downloaded into catalog directory. commented out this code as files no need to be generated again. -Jonathan	
		
/*  	urlMatrix.forEach(function(item,i,wholething){
		
		exec('curl '+item+'  > catalog/link'+i+'.txt');
		
	});  */
	
	


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
	
//already downloaded into catalog directory. commented out this code as files no need to be generated again. -Jonathan	
/* 		exec(' > catalog/catalog2.txt');
  	urlMatrix.forEach(function(item,i,wholething){
		
		exec('curl '+item+'  >> catalog/catalog2.txt');
		
	});   */
	 
	
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
	
//already downloaded into catalog directory. commented out this code as files no need to be generated again. -Jonathan	
	
 	var docText='';
	
	docText= fs.readFileSync('catalog/catalog2.txt').toString();
		docText=docText.replace(/\r\n/g,'');
		docText=docText.replace(/\n/g,'');
		fs.writeFileSync('catalog/catalog.txt', docText);
		
		//minify(docText,{collapseWhitespace: true, collapseInlineTagWhitespace: true, removeTagWhitespace:true});
		
	
/* 	fs.readFile('catalog/catalog2.txt', function (err, data) {
		if (err) {
			return console.error(err);
		}
		docText=data.toString();
		docText=docText.replace(/\r\n/g,'');
		docText=docText.replace(/\n/g,'');
	
		fs.writeFile('catalog/catalog.txt', minify(docText,{
			collapseWhitespace: true, collapseInlineTagWhitespace: true, removeTagWhitespace:true
			}),  function(err) {
			if (err) {
				return console.error(err);
				}
			});
   
   
	});  */


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
	var subArr= [];
	var textString= '';
	
	textString= fs.readFileSync('catalog/catalog.txt');
	 $ = cheerio.load(textString);
		
	$('h3').each(function(i, elem) {
	subArr[i] = $(this).text();
	});

	console.log(subArr.length);
	return subArr;

	
	
		
	
	
	
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
	
	var subArr= [];
	var textString= '';
	
	textString= fs.readFileSync('catalog/catalog.txt');
	 $ = cheerio.load(textString);
		
	$('h3').each(function(i, elem) {
	subArr[i] = $(this).text();
	});

	


	subArr.forEach(replaceString1);
	
	function replaceString1(item,i,wholething){

		subArr[i]=subArr[i].replace(/[0-9]/g,'');
		subArr[i]=subArr[i].replace('A[J]','');
		subArr[i]=subArr[i].replace('B[J]','');
		subArr[i]=subArr[i].replace('.','');
		subArr[i]=subArr[i].replace('A ',' ');
		subArr[i]=subArr[i].replace('B ',' ');
		subArr[i]=subArr[i].replace('[J]','');
		subArr[i]=subArr[i].replace(/^\s/,'');

	}
	
	console.log(subArr.length);
	return subArr;
	
	
	
	
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
	
	var subArr= [];
	var textString= '';
	
	textString= fs.readFileSync('catalog/catalog.txt');
	 $ = cheerio.load(textString);
		
	$('h3').each(function(i, elem) {
	subArr[i] = $(this).text();
	});

	
	
	subArr.forEach(replaceString1);
	
	function replaceString1(item,i,wholething){

		subArr[i]=subArr[i].replace(/[0-9]/g,'');
		subArr[i]=subArr[i].replace(/[^A-Za-z0-9_]/g,' ');
		
		subArr[i]=subArr[i].replace('A[J]','');
		subArr[i]=subArr[i].replace('B[J]','');
		subArr[i]=subArr[i].replace('A ',' ');
		subArr[i]=subArr[i].replace('B ',' ');
		subArr[i]=subArr[i].replace('[J]','');
		subArr[i]=subArr[i].replace(/^\s/,'');

	}
	
	
	subArr.forEach(replaceString2);
	
	function replaceString2(item,i,wholething){

		subArr[i]=subArr[i].replace(/\sand\s/g,' ');
		subArr[i]=subArr[i].replace(/\sAnd\s/g,' ');
		subArr[i]=subArr[i].replace(/\sis\s/g,' ');
		subArr[i]=subArr[i].replace(/\sIs\s/g,' ');
		subArr[i]=subArr[i].replace(/\sof\s/g,' ');
		subArr[i]=subArr[i].replace(/\sto\s/g,' ');
		subArr[i]=subArr[i].replace(/\sfor\s/g,' ');
		subArr[i]=subArr[i].replace(/\sby\s/g,' ');
		subArr[i]=subArr[i].replace(/\sin\s/g,' ');
		subArr[i]=subArr[i].replace(/\son\s/g,' ');
		subArr[i]=subArr[i].replace(/\sOn\s/g,' ');
		subArr[i]=subArr[i].replace(/\sA\s/g,' ');
		subArr[i]=subArr[i].replace(/\sa\s/g,' ');
		subArr[i]=subArr[i].replace(' & ',' ');
		subArr[i]=subArr[i].replace(/\sI$/,'');
		subArr[i]=subArr[i].replace(/\sII$/,'');
		subArr[i]=subArr[i].replace(/\'/g,'');

	}
	
	
	console.log(subArr.length);
	return subArr;
	

	
	
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
	
	var subArr= [];
	var textString= '';
	
	textString= fs.readFileSync('catalog/catalog.txt');
	 $ = cheerio.load(textString);
		
	$('h3').each(function(i, elem) {
	subArr[i] = $(this).text();
	});

	
	
	
	subArr.forEach(replaceString1);
	
	function replaceString1(item,i,wholething){

		subArr[i]=subArr[i].replace(/[0-9]/g,'');
		subArr[i]=subArr[i].replace(/[^A-Za-z0-9_]/g,' ');
		
		subArr[i]=subArr[i].replace('A[J]','');
		subArr[i]=subArr[i].replace('B[J]','');
		subArr[i]=subArr[i].replace('A ',' ');
		subArr[i]=subArr[i].replace('B ',' ');
		subArr[i]=subArr[i].replace('[J]','');
		subArr[i]=subArr[i].replace(/^\s/,'');

	}
	
	
	subArr.forEach(replaceString2);
	
	function replaceString2(item,i,wholething){

		subArr[i]=subArr[i].replace(/\sand\s/g,' ');
		subArr[i]=subArr[i].replace(/\sAnd\s/g,' ');
		subArr[i]=subArr[i].replace(/\sis\s/g,' ');
		subArr[i]=subArr[i].replace(/\sIs\s/g,' ');
		subArr[i]=subArr[i].replace(/\sof\s/g,' ');
		subArr[i]=subArr[i].replace(/\sto\s/g,' ');
		subArr[i]=subArr[i].replace(/\sfor\s/g,' ');
		subArr[i]=subArr[i].replace(/\sby\s/g,' ');
		subArr[i]=subArr[i].replace(/\sin\s/g,' ');
		subArr[i]=subArr[i].replace(/\son\s/g,' ');
		subArr[i]=subArr[i].replace(/\sOn\s/g,' ');
		subArr[i]=subArr[i].replace(/\sA\s/g,' ');
		subArr[i]=subArr[i].replace(/\sa\s/g,' ');
		subArr[i]=subArr[i].replace(' & ',' ');
		subArr[i]=subArr[i].replace(/\sI$/,'');
		subArr[i]=subArr[i].replace(/\sII$/,'');
		subArr[i]=subArr[i].replace(/\'\'/g,'');

	}
	
	var wordArray= [];
	
	subArr.forEach(splitString);
	
	
	
	function splitString(item,i,wholething){

	var tempArray= item.split(" ");
	tempArray.forEach(function(item2,i2,wholething2){
		wordArray.push(item2);		
	})

	}	
	
	console.log(wordArray.length);
	return wordArray;
	

	
	
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
	
	var subArr= [];
	var textString= '';
	
	textString= fs.readFileSync('catalog/catalog.txt');
	 $ = cheerio.load(textString);
		
	$('h3').each(function(i, elem) {
	subArr[i] = $(this).text();
	});

		
	
	subArr.forEach(replaceString1);
	
	function replaceString1(item,i,wholething){

		subArr[i]=subArr[i].replace(/[0-9]/g,'');
		subArr[i]=subArr[i].replace(/[^A-Za-z0-9_]/g,' ');
		
		subArr[i]=subArr[i].replace('A[J]','');
		subArr[i]=subArr[i].replace('B[J]','');
		subArr[i]=subArr[i].replace('A ',' ');
		subArr[i]=subArr[i].replace('B ',' ');
		subArr[i]=subArr[i].replace('[J]','');
		subArr[i]=subArr[i].replace(/^\s/,'');

	}
	
	
	subArr.forEach(replaceString2);
	
	function replaceString2(item,i,wholething){

		subArr[i]=subArr[i].replace(/\sand\s/g,' ');
		subArr[i]=subArr[i].replace(/\sAnd\s/g,' ');
		subArr[i]=subArr[i].replace(/\sis\s/g,' ');
		subArr[i]=subArr[i].replace(/\sIs\s/g,' ');
		subArr[i]=subArr[i].replace(/\sof\s/g,' ');
		subArr[i]=subArr[i].replace(/\sto\s/g,' ');
		subArr[i]=subArr[i].replace(/\sfor\s/g,' ');
		subArr[i]=subArr[i].replace(/\sby\s/g,' ');
		subArr[i]=subArr[i].replace(/\sin\s/g,' ');
		subArr[i]=subArr[i].replace(/\son\s/g,' ');
		subArr[i]=subArr[i].replace(/\sOn\s/g,' ');
		subArr[i]=subArr[i].replace(/\sA\s/g,' ');
		subArr[i]=subArr[i].replace(/\sa\s/g,' ');
		subArr[i]=subArr[i].replace(' & ',' ');
		subArr[i]=subArr[i].replace(/\sI$/,'');
		subArr[i]=subArr[i].replace(/\sII$/,'');
		subArr[i]=subArr[i].replace(/\'\'/g,'');

	}
	
	var wordArray= [];
	
	subArr.forEach(splitString);
		
	function splitString(item,i,wholething){

	var tempArray= item.split(" ");
	
	tempArray.forEach(function(item2,i2,wholething2){
		wordArray.push(item2);		
	})

	}	
	
	
	var counts = {};
	wordArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
			
	console.log(counts);
	
		
	return counts;
	

	
};


module.exports = exercise;
