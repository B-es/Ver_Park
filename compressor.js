var compressor = require('yuicompressor');

compressor.compress('/public/styles/', {
    //Compressor Options:
    charset: 'utf8',
    type: 'css',
    'line-break': 80
}, function(err, data, extra) {
   console.log(err);
   console.log(data);
   console.log(extra);
});