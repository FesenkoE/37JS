// var baseCurrency = 28;
//
// function roundTwoDecimal(amount) {
//     return Math.round(amount * 100) / 100;
// }
//
// module.exports.convertToUa = function(currency) {
//     return roundTwoDecimal(currency * baseCurrency);
// };
//
// module.exports.convertToUs = function(currency) {
//     return roundTwoDecimal(currency / baseCurrency);
// };

// var Converter = function(baseCurrencyUs) {
//     this.baseCurrencyUs = baseCurrencyUs;
// };
//
// Converter.prototype.roundTwoDecimal = function(amount) {
//     return Math.round(amount * 100) / 100;
// };
//
// Converter.prototype.converterToUa = function(currency) {
//     return this.roundTwoDecimal(currency * this.baseCurrencyUs);
// };
//
// Converter.prototype.converterToUs = function(currency) {
//     return this.roundTwoDecimal(currency / this.baseCurrencyUs);
// };
//
// module.exports = Converter;
