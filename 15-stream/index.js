var http = require('http');
var fs = require('fs');
var port = 3000;

var stats = fs.statSync('demo.txt');
var fileSizeInBytes = stats.size;
var fileSizeInMegabytes = fileSizeInBytes/1000000;
console.log(fileSizeInMegabytes);

var server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/file') {
        fs.readFile('demo.txt', function(err, data) {
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/stream') {
        var stream = fs.createReadStream('demo.txt');
        stream.pipe(res);
    }

    if (req.url === '/test') {
        if (fileSizeInMegabytes > 20) {
            var stream = fs.createReadStream('demo.txt');
            stream.pipe(res);
            console.log('stream');
        } else {
            fs.readFile('demo.txt', function(err, data) {
                res.write(data);
                res.end();
                console.log('file');
            });
        }
    }

}).listen(port, function() {
    console.log('server is running');
});