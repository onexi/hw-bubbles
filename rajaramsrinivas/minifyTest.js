


var minify = require('html-minifier').minify;

text = "<html><body>Hello World</body></html>"
var result = minify(text, {
        removeAttributeQuotes: true
    }
);

console.log(result);
