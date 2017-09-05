// FizzBuzz Demo
for (i = 1; i <= 100; i++) {
  // If divisible by 3 and 5.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  // If divisible by 3.
  } else if (i % 3 === 0) {
    console.log('Fizz');
  // If divisible by 5.
  } else if (i % 5 === 0) {
    console.log('Buzz');
  // Otherwise, print out index.
  } else {
    console.log(i);
  }   
}