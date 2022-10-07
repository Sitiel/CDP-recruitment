/**
 * @file DataService file used for Dependency Injection to simplify testing
 */

 const countries = require('./data')['data'];

 const getCountries = () => {
     return countries;
 }
 
 module.exports = {getCountries};