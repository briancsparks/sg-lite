
var test        = require('ava');
var sg          = require('../flow');


test.cb(function(t) {
  t.plan(1);

  var count = 0;

  sg.__run([function(next) {
    count += 1;
    return next();
  }, function(next) {
    count += 1;
    return next();
  }], function() {
    count += 1;

    t.is(count, 3);
    t.end()
  });

});



