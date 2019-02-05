var express = require('express');
var Converter = require('./converter');
var baseCurrencyUs = 100;
var app = express();
var port = 3000;

var request = require('sync-request');

var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

var data = request('GET', url);
var currency = JSON.parse(data.getBody('utf8'));

var curArr = [];

currency.forEach(function(data) {
    switch (data.ccy) {
        case 'EUR' :
            curArr['EUR'] = data;
            break;
        case 'RUR' :
            curArr['RUR'] = data;
            break;
        case 'USD' :
            curArr['USD'] = data;
            break;
        case 'BTC' :
            curArr['BTC'] = data;
    }
});

console.log(curArr);

var converter = new Converter(curArr['USD'].buy);
console.log(converter.convertToUa(100));

app.get('/', function(req, res) {
    res.send('Hello, world');
});

app.listen(port, function() {
    console.log('Example app listening on port 3000');
});