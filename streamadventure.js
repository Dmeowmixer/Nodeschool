var fs = require('fs');

process.stdin.pipe(tr).pipe(process.stdout);

var through = require('through');
var tr = through(write, end);

tr.write(console.dir(buf));
tr.end();


function write(buf) { buf.toString().toUpperCase(); }
function end() { console.log('__END__'); }

