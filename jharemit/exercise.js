var exercise = {};

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

    var urls = ['http://student.mit.edu/catalog/m1a.html',
                'http://student.mit.edu/catalog/m1b.html',
                'http://student.mit.edu/catalog/m1c.html',
                'http://student.mit.edu/catalog/m2a.html',
                'http://student.mit.edu/catalog/m2b.html',
                'http://student.mit.edu/catalog/m2c.html',
                'http://student.mit.edu/catalog/m3a.html',
                'http://student.mit.edu/catalog/m3b.html',
                'http://student.mit.edu/catalog/m4a.html',
                'http://student.mit.edu/catalog/m4b.html',
                'http://student.mit.edu/catalog/m4c.html',
                'http://student.mit.edu/catalog/m4d.html',
                'http://student.mit.edu/catalog/m4e.html',
                'http://student.mit.edu/catalog/m4f.html',
                'http://student.mit.edu/catalog/m4g.html',
                'http://student.mit.edu/catalog/m5a.html',
                'http://student.mit.edu/catalog/m5b.html',
                'http://student.mit.edu/catalog/m6a.html',
                'http://student.mit.edu/catalog/m6b.html',
                'http://student.mit.edu/catalog/m6c.html',
                'http://student.mit.edu/catalog/m7a.html',
                'http://student.mit.edu/catalog/m8a.html',
                'http://student.mit.edu/catalog/m8b.html',
                'http://student.mit.edu/catalog/m9a.html',
                'http://student.mit.edu/catalog/m9b.html',
                'http://student.mit.edu/catalog/m10a.html',
                'http://student.mit.edu/catalog/m10b.html',
                'http://student.mit.edu/catalog/m11a.html',
                'http://student.mit.edu/catalog/m11b.html',
                'http://student.mit.edu/catalog/m11c.html',
                'http://student.mit.edu/catalog/m12a.html',
                'http://student.mit.edu/catalog/m12b.html',
                'http://student.mit.edu/catalog/m12c.html',
                'http://student.mit.edu/catalog/m14a.html',
                'http://student.mit.edu/catalog/m14b.html',
                'http://student.mit.edu/catalog/m15a.html',
                'http://student.mit.edu/catalog/m15b.html',
                'http://student.mit.edu/catalog/m15c.html',
                'http://student.mit.edu/catalog/m16a.html',
                'http://student.mit.edu/catalog/m16b.html',
                'http://student.mit.edu/catalog/m17a.html',
                'http://student.mit.edu/catalog/m17b.html',
                'http://student.mit.edu/catalog/m18a.html',
                'http://student.mit.edu/catalog/m18b.html',
                'http://student.mit.edu/catalog/m20a.html',
                'http://student.mit.edu/catalog/m21a.html',
                'http://student.mit.edu/catalog/m21Aa.html',
                'http://student.mit.edu/catalog/mCMSa.html',
                'http://student.mit.edu/catalog/m21Ga.html',
                'http://student.mit.edu/catalog/m21Gb.html',
                'http://student.mit.edu/catalog/m21Gc.html',
                'http://student.mit.edu/catalog/m21Gd.html',
                'http://student.mit.edu/catalog/m21Ge.html',
                'http://student.mit.edu/catalog/m21Gf.html',
                'http://student.mit.edu/catalog/m21Gg.html',
                'http://student.mit.edu/catalog/m21Gh.html',
                'http://student.mit.edu/catalog/m21Gq.html',
                'http://student.mit.edu/catalog/m21Gr.html',
                'http://student.mit.edu/catalog/m21Gs.html',
                'http://student.mit.edu/catalog/m21Wa.html',
        'http://student.mit.edu/catalog/m21Wb.html',
                'http://student.mit.edu/catalog/m21Ha.html',
                'http://student.mit.edu/catalog/m21Hb.html',
                'http://student.mit.edu/catalog/m21La.html',
                'http://student.mit.edu/catalog/m21Ma.html',
                'http://student.mit.edu/catalog/m21Mb.html',
                'http://student.mit.edu/catalog/mWGSa.html',
        'http://student.mit.edu/catalog/m22a.html',
        'http://student.mit.edu/catalog/m22b.html',
        'http://student.mit.edu/catalog/m22c.html',
        'http://student.mit.edu/catalog/m24b.html',
        'http://student.mit.edu/catalog/m24a.html',
        'http://student.mit.edu/catalog/mCCa.html',
        'http://student.mit.edu/catalog/mCSBa.html',
        'http://student.mit.edu/catalog/mECa.html',
        'http://student.mit.edu/catalog/mEMa.html',
        'http://student.mit.edu/catalog/mESa.html',
        'http://student.mit.edu/catalog/mHSTa.html',
        'http://student.mit.edu/catalog/mHSTb.html',
        'http://student.mit.edu/catalog/mIDSa.html',
        'http://student.mit.edu/catalog/mMASa.html',
        'http://student.mit.edu/catalog/mSCMa.html',
        'http://student.mit.edu/catalog/mASa.html',
        'http://student.mit.edu/catalog/mMSa.html',
        'http://student.mit.edu/catalog/mNSa.html',
        'http://student.mit.edu/catalog/mSTSa.html',
        'http://student.mit.edu/catalog/mSTSb.html',
        'http://student.mit.edu/catalog/mSWEa.html',
        'http://student.mit.edu/catalog/mSPa.html']
    return (urls);
};

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

    var urls = exercise.one()    //defines the array of URLs

    var fs = require('fs'); //file system package (part of java / nodejs maybe?)
    var request = require('request');

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
        });
    };

    exercise.save = function (data, filename) { // saves the file to a local directory

        return new Promise(function (resolve, reject) {

            // write listings to file
            fs.writeFile(filename, data, function (err) {
                if (err) {
                    reject(error);
                }
                resolve(console.log('The ' + filename + ' was saved!'));
            });

        });

    };
    urls.forEach(function (url, i) {
        var page = exercise.get(url);
        page.then(function (body) {
            //console.log(body);
            var filename = 'catalog/data' + i + '.txt'; //defines the file name
            return exercise.save(body, filename); //calls the exercise to save to a directory
        })
        // .then(function(msg){  //can return another message for resolving the promise
        //     console.log(msg);  
        //})
    });

};

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
    var concat = require('concat-files');

    var allFiles = [];
    for (var i = 0; i <= 88; i++) { //creates an array of all the filed that need to be concated
        allFiles.push('./catalog/data' + i + '.txt')
    }
    concat(allFiles, './catalog/catalog.txt') //adds all the files into one file
};

exercise.four = function () {

    var fs = require('fs');
    var body = fs.readFileSync('./catalog/catalog.txt', 'utf8');

    body = body.replace(/\n/g, '');
    body = body.replace(/\r/g, '');
    fs.writeFileSync('./catalog/catalog.txt', body);

    return body;

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

    var fs = require('fs');

    //reading our giant concatenated file
    var body = exercise.four();

    //adds all titles and courses to an array of courses
    var expression = /<h3>(.*?)<br><I>/g;  //<h3> = starts with the header, (.*?) = everything in between the bolds, <\/b> closes the search
    var matches = body.match(expression);

    fs.writeFileSync('./catalog/titlesandcourses.txt', matches);
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
    var cheerio = require('cheerio');
    var fs = require('fs');

    //reading our giant concatenated file
    var body = fs.readFileSync('./catalog/catalog.txt');

    //parsing the file using cheerio!
    var $ = cheerio.load(body);

    //adds all titles and courses to an array of courses
    var courses = [];
    $('h3').each(function (i, element) {
        var title = $(element).text();
        courses.push(title);
    });
    fs.writeFileSync('./catalog/titles.txt', courses)
    return courses;
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
    var titles = exercise.six();
    var fs = require('fs');
    var words = titles.map(function (title) {
        return title.toLowerCase().match(/([a-z]+)/g);
    });

    fs.writeFileSync('./catalog/words.txt',words)
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
       
       //script that takes all the words from different arrays
       //and converts them into individual arrays
       var arrays = exercise.seven();
       var merged = [].concat.apply([],arrays);
        var fs = require('fs');
        var common = ['the', 'on', 'to', 'a', 'with', 'in', 'and', 'of', 'for',
            'can', 'new', 'through', 'sts', 'upop', 'j', 'your', 'new', 's', 'at', 'iii',
            'how', 'th','is', 'dv', 'what','or','be','c','m','a','b','c','d','e','f','g','h','i']
        for (i = merged.length; i >= 0; i--) {
            for (j = 0; j <= common.length; j++) {
                if (merged[i] === common[j]) {
                    merged.splice(i, 1);
                }
            }
        }
         fs.writeFileSync('./catalog/allWords.txt',merged)
        return merged;
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
    var merged = exercise.eight();
    var obj = { };
    for (var i = 0, j = merged.length; i < j; i++) {
        obj[merged[i]] = (obj[merged[i]] || 0) + 1;
}

return (obj);
    };

exercise.graph = function(){
    var fs = require('fs');
    var obj = exercise.nine()
    var x = fs.writeFileSync('./catalogdata.js',obj)
    
    // clean up
    document.getElementById('target').innerHTML = '';

    // ------------- GRAPHING -------------

    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .html(function(d) { return '<span>' + d.word + '</span>' })
      .offset([-12, 0])

    var padding = 6,
        radius = d3.scale.log().range([15, 70]).domain([2, 82]),
        color = d3.scale.category10().domain([0, 15]);

    var nodes = [];
    var circle = [];
    var force;

    var svg = d3.select("div[id=target]").append("svg")
        .attr("width", 1920)
        .attr("height", 960)
        .attr("class", "vis")
      .append("g")

    svg.call(tip);

    for (var word in scores) {
      nodes.push({radius: radius(scores[word]), color: color(word.length), word: word, score: scores[word]});  
    }

    force = d3.layout.force()
      .nodes(nodes)
      .size([1024, 768])
      .gravity(0.01)
      .charge(-0.01)
      .on("tick", tick)
      .start();

    circle = svg.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", function(d) { return d.radius; })
      .style("fill", function(d) { return d.color; })  
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .call(force.drag);

    function tick(e) {
      circle
          .each(cluster(10 * e.alpha * e.alpha))
          .each(collide(.5))
          .attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    }

    // Move d to be adjacent to the cluster node.
    function cluster(alpha) {
      var max = {};

      // Find the largest node for each cluster.
      nodes.forEach(function(d) {
        if (!(d.color in max) || (d.radius > max[d.color].radius)) {
          max[d.color] = d;
        }
      });

      return function(d) {
        var node = max[d.color],
            l,
            r,
            x,
            y,
            i = -1;

        if (node == d) return;

        x = d.x - node.x;
        y = d.y - node.y;
        l = Math.sqrt(x * x + y * y);
        r = d.radius + node.radius;
        if (l != r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          node.x += x;
          node.y += y;
        }
      };
    }

    // Resolves collisions between d and all other circles.
    function collide(alpha) {
      var quadtree = d3.geom.quadtree(nodes);
      return function(d) {
        var r = d.radius + radius.domain()[1] + padding,
            nx1 = d.x - r,
            nx2 = d.x + r,
            ny1 = d.y - r,
            ny2 = d.y + r;
        quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
                y = d.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
            if (l < r) {
              l = (l - r) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2
              || x2 < nx1
              || y1 > ny2
              || y2 < ny1;
        });
      };
    }


}

    module.exports = exercise;
