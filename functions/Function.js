//Anonomyous funtn
// function () {
//   alert('im a no name function')
// }


//Anonomyous funtn with Function expression
var message = function () {
  document.write('Hello world!!!')
}
message();




//naming function
function sample() {           //called part
  console.log("im a named function");
}

sample();   //calling part
sample();








//function expression
// var test = function() {
//   document.write("Im a function expression!!! ");
// };
// test();








// // //immediate invoke function
(function () {
  console.log("hello im a immediate invoke function!!");
})();

















// //local variables
function showMessage() {
  var message = 'Hello all Im A Local Variable';
  alert(message);
}
showMessage();


// //global variables
var text = 'Priyanka';
function showMessage() {
  var msg = "Hello " + text;
  // alert(msg);
}
alert(text);
showMessage();


// //function with parameters

function sample(from, text) {
  document.write(from + ":" + text);
}
sample("Annie", "Welcome!");


function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

var age = prompt('How old are you?', 18);
if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}



// //function with parameters
// // function Add(n1,n2){
// // console.log('the sum is',n1 + n2);
// // }
// // Add(100,200);




