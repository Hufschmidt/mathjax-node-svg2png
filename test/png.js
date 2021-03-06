var tape = require('tape');
var typeset = require("../lib/main.js").typeset;
tape('basic test: check PNG generation', function(t) {
    t.plan(2);
    var options = {math: '\\sin(x)', format:'TeX', png:true};
    typeset(options, function (result) {
        t.equal(result.png.indexOf("data:image/png;base64"), 0, 'PNG data-uri header');
        t.ok(result.png.length > 100, 'PNG data length');
    });
});
