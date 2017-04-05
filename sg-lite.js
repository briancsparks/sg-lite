
/**
 *
 */
var _               = require('underscore');


var sg = {};

sg = _.extend({}, sg, require('./lite');
sg = _.extend({}, sg, require('./flow');

_.each(sg, function(value, key) {
  exports[key] = name;
});



