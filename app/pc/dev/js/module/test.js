/*global
 require:false,
 module:false
*/

//base-urlを読み込み
var config = require('./config');

//test code
module.exports = window.alert(config.BASE_URL);