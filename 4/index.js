let bottle = 100;

function beer() {
  bottle--;
  if (bottle === 0) {
    console.log(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`)
  } else {
    console.log(`${bottle} bottles of beer on the wall, ${bottle} bottles of beer.
Take one down and pass it around, ${bottle - 1} bottles of beer on the wall.`)
  }
}

while (bottle > 0) {
  beer();
}

let bottle = 100;

function fizzBuzz() {

  while (output.length < 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    count++;
  }
  console.log(output);
}

fizzBuzz();


// Fibonacci 
let fibonacci_series = (n) => {
  if (n === 1) {
    return [1, 1];
  } else {
    let s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

console.log(fibonacci_series(10));