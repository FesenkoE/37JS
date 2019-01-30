var fs = require('fs');
var file = fs.createWriteStream('demo.txt');

for (var i = 0; i < 300000; i++) {
    file.write('<p>Lorem ipsum dolor sit amet, consectetur ' +
        'adipisicing elit. Accusantium deleniti dignissimos ' +
        'eaque, enim error esse est eveniet facere facilis ipsum ' +
        'laboriosam officia omnis, quam qui quis repellendus sapiente ' +
        'soluta voluptate?</p>');
}
file.end();