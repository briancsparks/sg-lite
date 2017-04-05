
var test        = require('ava');
var sg          = require('../lite');


test(function(t) {
  t.deepEqual(sg.toArray('asdf'), ['asdf']);
});


