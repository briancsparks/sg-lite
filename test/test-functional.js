
var test        = require('ava');
var sg          = require('../sg-lite');


test(function(t) {
  t.is(sg.firstKey({a:1}), 'a');
});

