var Bank = function(name, codeAlpha, rateBuy, rateSale) {
    this.name = name;
    this.codeAlpha = codeAlpha;
    this.rateBuy = rateBuy;
    this.rateSale = rateSale;
};

var clc = require("cli-color");

Bank.prototype.roundTwoDecimal = function(amount) {
    return Math.round(amount * 100) / 100;
};

Bank.prototype.convertTo = function(currency) {
    return console.log('Купить ' + currency + ' ' + this.codeAlpha + ' в ' + this.name + ' за ' + clc.green(this.roundTwoDecimal(currency * this.rateBuy)) + ' ГРН');
};

module.exports = Bank;