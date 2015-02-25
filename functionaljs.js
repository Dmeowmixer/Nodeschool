
// function helloworld(string) {
//   return string.toUpperCase();
// }


/*function higherOrder(fun,num){
  for (var i = num; i > 0; i --){
    fun();
  }
}*/
// function doubleAll(numbers) {
//   var result = [];
//   function mult(num){
//     return num*2;
//   }
//   return numbers.map(mult);

// }
// function getShortMessages(messages){
//   function isShort(mes){
//     return mes.message.length < 50;
//   }
//   function toArr(obj){
//     return obj.message;
//   }
//   return messages.filter(isShort).map(toArr);
// }

// function checkUsersValid(goodUsers){
//   return function(submittedUsers){
    
//   };
// }


// module.exports = checkUsersValid;




// function higherOrder (sumfun, num){
//   for (var i = 0; i < num; i++){
//     sumfun(num[i]);
//   }
// }
// module.exports = higherOrder;



    // function doubleAll(numbers) {
    //   var result = [];
    //   for (var i = 0; i < numbers.length; i++) {
    //     result.push(numbers[i] * 2);
    //   }
    //   return result;
    // }
    
//  i need to push each index *2 of numbers into result 
//     function doubleAll(numbers){
//       var result = [];
//       var doubled = numbers.map(function(num){
//         return num*2;
//       });
//       return doubled;
//     }
// module.exports = doubleAll;


// function getShortMessages(messages){
//   var mapped = messages.map( function (obj){
//         return obj.message;
//   });
//   return mapped.filter(function(str){
//     return str.length <= 50;
//   });
// }
// module.exports = getShortMessages;





function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    console.log(submittedUsers[0]);
  };
}

module.exports = checkUsersValid;




// use map on every index of the array


















