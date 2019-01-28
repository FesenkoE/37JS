// console.log('Hello, world');

// const fs = require('fs');
//
// fs.readFile('text.txt', 'UTF-8', function (err, data) {
//     console.log(data);
// });
//
// fs.writeFile('message.txt', 'Hello Nod', 'utf8', function (err, data) {
//     console.log('The file has been saved');
// });
//
// fs.readFile('message.txt', 'UTF-8', function (err, data) {
//     console.log(data);
// });
//
// fs.appendFile('message.txt', '\nHello Node.js', 'utf8', function (error) {
//     console.log('The string has been append');
// });


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fesenkoe2018@gmail.com',
        pass: 'mypassword'
    }
});

var mailOptions = {
    from: 'fesenkoe2018@gmail.com',
    to: 'fesenkoe2018@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
