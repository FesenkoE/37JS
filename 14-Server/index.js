var http = require('http');
var fs = require('fs');
var Event = require('events').EventEmitter;
var Url = require('url');


var anHttpRequest = new XMLHttpRequest();
console.log(anHttpRequest );


// console.log(xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR2KOAf8S3ADTKGWwn2DNXltOPg0lbDbp_QstKiSY_bHKV6pnIQFtahZ_RU', false));
// xhr.send();

// if (xhr.status != 200) {
//     console.log( xhr.status + ': ' + xhr.statusText );
// } else {
//     console.log( xhr.responseText );
// }



// var needle = require('needle');
//
// var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR2KOAf8S3ADTKGWwn2DNXltOPg0lbDbp_QstKiSY_bHKV6pnIQFtahZ_RU';
//
// needle.get(URL, function(err, res){
//     if (err) throw err;
//     var curr = res.body;
//     curr.forEach(function(entry) {
//         for (var key in entry) {
//             console.log( key + " - " + entry[key] );
//         }
//     });
// });
//
// var server = http.createServer(function(req, res) {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }
//
//     if (req.url === '/currency') {
//         res.write('Helo World');
//         res.end();
//     }
//
//     if (req.url === '/about') {
//         console.log(req.url);
//         res.end();
//     }
//
//     if (req.url === '/stop') {
//         console.log('server is stopped');
//         process.exit(1);
//     }
//
//     if (req.url === '/contact') {
//         fs.readFile('index.ejs', 'UTF-8', function(err, data) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.write(data);
//                 res.end();
//             }
//         });
//     }
// }).listen(3000, function() {
//     console.log('server is running');
// });
//
// var emt = new Event();
//
// var user = {
//     name: 'Adam',
//     login: 'adam',
//     password: 'userPassword',
//     time: new Date()
// };
//
// emt.on('login', function (data) {
//     console.log('user: ', data.name);
//     console.log('login in: ', data.time);
// });
//
// emt.on('logout', function (data) {
//     console.log('user: ', data.name);
//     console.log('logout in: ', data.time);
// });
//
// emt.on('write', function(data) {
//     fs.appendFile('log.txt', 'user: ' + data.name + '\n' + 'login in: ' + data.time + '\n' , 'utf8', function (err) {
//         if (err) {
//             console.log('error');
//         }
//     });
// });
//
// emt.emit('login', user);
// emt.emit('logout', user);
// emt.emit('write', user);






