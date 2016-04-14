//Looping a triangle
for(var i = 0; i < 8; i++) {
  console.log(Array(i+1).join('#'));
}

// FizzBuzz
for(var i = 1; i <= 100; i++) {
 if(i%3 == 0 && i%5 == 0) {
   console.log("FizzBuzz");
   //equivalent to else if
   continue;
 }
 if(i%3 == 0) {
   console.log("Fizz");
   continue;
 }
 if(i%5 == 0) {
   console.log("Buzz");
   continue;
 }
 console.log(i);
}

//Chess Board
var size = 8;
var current;
for(var i = 0; i < size; i++) {
  var str = '';
  for(var j = 0; j < size; j++) {
    current = (i+j)%2 == 0? ' ' : '#';
    str += current;
  }
  console.log(str);
}
