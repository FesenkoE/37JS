var Bank = require('./currency');
var request = require('sync-request');
var clc = require("cli-color");
var url = 'http://bank-ua.com/export/exchange_rate_cash.json';
var res = request('GET', url);
var banks = JSON.parse(res.getBody('utf8'));
var currency = 100;

// console.log(banks);

banks.forEach(function(key) {
    // console.log(key.convertTo(currency));
    console.log(key);
});

var bankOtpUSD = new Bank(banks[0].bankName, banks[0].codeAlpha, banks[0].rateBuy, banks[0].rateSale);
var bankOtpEUR = new Bank(banks[1].bankName, banks[1].codeAlpha, banks[1].rateBuy, banks[1].rateSale);
var bankPireusEUR = new Bank(banks[2].bankName, banks[2].codeAlpha, banks[2].rateBuy, banks[2].rateSale);
var bankPireusUSD = new Bank(banks[3].bankName, banks[3].codeAlpha, banks[3].rateBuy, banks[3].rateSale);
var bankPireusRUB = new Bank(banks[4].bankName, banks[4].codeAlpha, banks[4].rateBuy, banks[4].rateSale);
var bankPrivatEUR = new Bank(banks[5].bankName, banks[5].codeAlpha, banks[5].rateBuy, banks[5].rateSale);
var bankPrivatUSD = new Bank(banks[6].bankName, banks[6].codeAlpha, banks[6].rateBuy, banks[6].rateSale);
var bankPrivatRUB = new Bank(banks[7].bankName, banks[7].codeAlpha, banks[7].rateBuy, banks[7].rateSale);

console.log(bankPrivatRUB.convertTo(currency));




