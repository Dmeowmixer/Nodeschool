var extFilter = process.argv[3];
var part2 = require('./6)2');
var dirpath = process.argv[2];
part2(dirpath,extFilter,function(err,files){
  files.forEach(function(file) {
    consle.log(file);
  });
})