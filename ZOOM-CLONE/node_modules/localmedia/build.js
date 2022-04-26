var bundle = require('browserify')({ standalone: 'LocalMedia' });
var fs = require('fs');

bundle.add('./localmedia');
bundle.bundle().pipe(fs.createWriteStream('localMedia.bundle.js'));
