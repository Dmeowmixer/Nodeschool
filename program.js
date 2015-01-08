// console.log("beep boop");
var fs = require('fs');
var through = require('through');
var tr = through(write, end);

tr.write();
tr.end();

function write (buf) { prepipe = process.stdin.pipe(tr).pipe(process.stdout) }
function end () { this.queue(null) }
