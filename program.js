var five = require("johnny-five");
var board = new five.Board();
// 
// 1
// 
// board.on("ready", function() {
//   var led = new five.Led(13);
//   led.blink(1000);
// });
// 
// 
// 2
// 
// board.on("ready", function(){
//   var servo = new five.Servo(9);
//   // instructs to sweep from 0 - 180 & repeat
//   servo.sweep();
//   // instructs the board to wait 3 seconds
//   board.wait(3000, function (){
//     // will stop and center the servo
//     servo.stop();
//     servo.center();
//   });
// });

// 3

// board.on('ready', function (){
//   var motor = new five.Motor(9);
//   motor.forward(200);
//   board.wait(2000, function(){
//     motor.stop();
//     board.wait(1000, function (){
//       motor.start(200);
//     });
//   });
// });


// 4

// board.on('ready', function (){
//   var button = new five.Button(5);
//   var led = new five.Led(9);

//   button.on('press', function (){
//     led.toggle();
//   });

// });

// 5

// board.on('ready', function (){
//   var sensor = new five.Sensor('A0');
//   var led = new five.Led(9);
//   sensor.within([0, 600], function (){
//     led.off();
//   });
//   sensor.within([600, 10000], function (){
//     led.on();
//   });
// });


// 6

var dgram = require('dgram');
var message = new Buffer("Some bytes");
var client = dgram.createSocket("udp4");
client.bind(1337);

board.on('ready', function (){
  var piezo = new five.Piezo(8);
  board.repl.inject({
    piezo: piezo
  });

  client.on(message, function(msg, rsinfo) {
    piezo.play({
      song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
      beats: 1 / 4,
      tempo: 100
    });
  });
});