var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var courses = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'Node.js'
    },
    {
        id: 3,
        name: 'Angular'
    }
];

app.get('/', function (req, res) {
    res.send('Hello world');
});

// Get all courses
app.get('/courses', function(req, res) {
    res.send(courses);
});

app.get('/courses/:id', function (req, res) {
    console.log(req.params.id);
    var course = courses.find(function (course) {
        return course.id === parseInt(req.params.id);
    });

    res.send(course);
});

app.post('/course', function(req, res) {
    var course = {
        id: Date.now(),
        name: req.body.name,
    };
    courses.push(course);
    res.send(courses);
});



app.listen(3000, function() {
    console.log('Example app listening on port 3000');
});