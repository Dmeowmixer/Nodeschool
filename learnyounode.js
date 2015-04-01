// #1need to start at index 2 of this array and 
/*var sum = 0; 
for (var i = 2; i < process.argv.length; i++){
  var number = parseInt(process.argv[i]);
  sum += number;
}
console.log(sum.toString());*/ 
//#3
//writing a program that uses a synchronus(won't continue executing until the code done) filesystem operation to read
//a file and print out the number of new lines it contains to the console.
//stdout
//look for synchronous file read function.
//#2test reading a file in and console.log the contents of the file./*
var fs = require('fs');
var path = require('path'); 
/*
var filecontent = fs.readFileSync( process.argv[2],{flag : "r"}).toString();
var splitfiles = filecontent.split('\n');
console.log(splitfiles.length-1);
*///#4
/*fs.readFile(process.argv[2],{flag : "r"},function(err,data){
  if (err) throw err;
  var strung = data.toString();
  var splitfiles = strung.split('\n');
  console.log(splitfiles.length-1);
});*/

//#5

/*fs.readdir(process.argv[2],function callback (err,list){
  var arr = []
  if (err) throw err;
  var check_ext = '.'+process.argv[3];
  for (var i = 0; i < list.length; i++){
    if(path.extname(list[i]) === check_ext){
      console.log(list[i]);
    }
  }
});
*/
/*

module.exports = function(dirpath, extfilter, cb){
  fs.readir(dirPath,function(err,list){
    if (!err) {var files = list.filter(function(filename){
      var parts = filename.split('.');
      if(parts.length > 2)
        var ext = parts[parts.length -1];
      else 
        var ext = parts[1];

      return ext === extFilter;
    });
  }
  return cb(err,files);
  });
};*/

/*var http = require('http');
http.get(process.argv[2], function callback(res){
  res.setEncoding('utf8');
  res.on('data',function (chunk){
   // console.log(chunk)
  });
  res.on('error',function(e){
    //console.log('problem' + e.message);
  }); 
});
*/
/*
var bl = require('bl');
var http = require('http');
http.get(process.argv[2], function(response){
  response.pipe(bl(function (err, data) {
  if (err) throw err;
  console.log(data.length);
  console.log(data.toString());
  }))
})*/

// var bl = require('bl');
// var http = require('http');
// for(var i = 2; i < process.argv.length; i++){
//   http.get(process.argv[i], function(response){
//   response.pipe(bl(function (err, data) {
//   if (err) throw err;

//   console.log(data.toString());
//     }))
//   }
// }

