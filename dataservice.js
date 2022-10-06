/**
 * @file DataService file used for Dependency Injection to simplify testing
 */

 const countries = require('./data')['data'];

 function getCountries() {
     return countries;
 }
 
 module.exports = {getCountries};