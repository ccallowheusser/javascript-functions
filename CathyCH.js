// CathyCH.js

// returns the sum of two numbers
function sumTwo (var1, var2) {
  return var1 + var2;
};

console.log("\n\nFunction returns the sum of two numbers")
console.log("The sum of 3 and 4 is " + sumTwo(3, 4));
console.log("The sum of 9 and 1 is " + sumTwo(9, 0));
console.log("The sum of 23 and 77 is " + sumTwo(23, 77));

// returns the sum of the numbers in an array
function sumArray (arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("\n\nFunction returns the sum of an array")
console.log("The sum of the array [1, 2, 3, 4, 5, 6] is " + sumArray([1, 2, 3, 4, 5, 6]))

// returns temperature in celsius given temp in fahrenheit
function FtoC (temp) {
  return (temp - 32) * 5 / 9;
}

console.log("\n\nThe function converts Fahrenheit to Celsius")
console.log("32 F is celsius " + FtoC(32));
console.log("212 F is celsius " + FtoC(212));

// returns the number of vowels in a string
function countVowels (str) {
  ct = 0;
  ar = str.toLowerCase().split("");
  vowelStr = "aeiou";
  for (i = 0; i < ar.length; i++) {
    if (vowelStr.search(ar[i]) >= 0) {
      ct = ct + 1;
    }
  }
  return ct;
}

console.log("\n\nThe function counts the number of vowels in a string")
console.log("The number of vowels in 'This is a very long string with a u' is " + countVowels("This is a very long string with a u"));
console.log("The number of vowels in 'The quick brown fox jumped over the lazy dog' is " + countVowels("The quick brown fox jumped over the lazy dog"));
console.log("The number of vowels in 'Why' is " + countVowels("Why"));

// returns the sum of two dice by randomly generating dice values
function sumTwoDice () {
  die1 = Math.floor(Math.random() * 6 + 1);
  die2 = Math.floor(Math.random() * 6 + 1);
  console.log("The numbers on the two die are " + die1 + " and " + die2)
  return (die1 + die2);
}

console.log("\n\nThe function returns the sum of two randomly thrown dice")
console.log("The sum of the two dice is " + sumTwoDice());
console.log("The sum of the two dice is " + sumTwoDice());
console.log("The sum of the two dice is " + sumTwoDice());
console.log("The sum of the two dice is " + sumTwoDice());


// takes in array and returns average of array
function avgArr(arr) {
  len = arr.length;
  cnt = 0;
  if (len > 0) {
    avg = 0;
    for (i = 0; i < len; i++) {
      if (isNaN(arr[i]) == false) {
        avg = avg + Number(arr[i]);
        cnt += 1;
      }
    }
  }
  else {
    return "Array is length 0";
  }
  return (avg / cnt);
}

console.log("\n\nThe function retuns the average of an array")
console.log("The average of the array " + [1, "2", "two", 4, 7, "9"] + " is " + avgArr([1, "2", "two", 4, 7, "9"]));
console.log("The average of the array " + [1, 2, 4, 7, 2, 10, 11] + " is " + avgArr([1, 2, 4, 7, 2, 10, 11]));
console.log("The average of the array " + [4] + " is " + avgArr([4]));
console.log("The average of the array " + [] + " is " + avgArr([]));

// from numbers 1 through 1000, writes fizzbuzz if i is divible by 15,
// fizz if divisible by 3, and buzz if divisible by 5
function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if((i % 3) == 0 && (i % 5) == 0)
      {console.log(i, " fizzbuzz")
      }
    else if((i % 3) == 0)
      {console.log(i, " fizz")
      }
    else if((i % 5) == 0)
      {console.log(i, " buzz")
      }
    else
      {console.log(i)
      };
  }
}

console.log("\n\nThis is the fizz buzz function")
fizzBuzz();

// returns the factorial of a number
function factorial (n) {
  for (i = n; i > 0; i--) {
    if (i > 1) {
      return (i * factorial(i - 1));
    }
    else {
      return i;
    }
  }
}

console.log("\n\nThis function returns the factorial of a number")
console.log("The factorial of 3 is " + factorial(3));
console.log("The factorial of 10 is " + factorial(10));

// returns the fibonacci number in the position of number passed to function
function fib(x) {
  arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (i = 2; i <= x; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  if (x == 0 || x == 1) {
    return arr[x];
  }
  else {
    return arr[x];
  }
}

console.log("\n\nThis function returns the fibonacci number at an given index")
console.log("The fibonacci number at index 0 is " + fib(0));
console.log("The fibonacci number at index 1 is " + fib(1));
console.log("The fibonacci number at index 2 is " + fib(2));
console.log("The fibonacci number at index 3 is " + fib(3));
console.log("The fibonacci number at index 4 is " + fib(4));
console.log("The fibonacci number at index 5 is " + fib(5));
console.log("The fibonacci number at index 6 is " + fib(6));

// returns the fibonacci number in the position of number passed to function
// uses recursion
function fibr(x) {
  if (x === 0) {
    return 0;
  }
  else if (x === 1) {
    return 1;
  }
  else {
    return fibr(x - 1) + fibr(x - 2);
  }
}

console.log("\n\nUsing recursion, this function returns the fibonacci number at an given index")
console.log("Using recursion, the fibonacci number at index 0 is " + fibr(0));
console.log("Using recursion, the fibonacci number at index 1 is " + fibr(1));
console.log("Using recursion, the fibonacci number at index 2 is " + fibr(2));
console.log("Using recursion, the fibonacci number at index 3 is " + fibr(3));
console.log("Using recursion, the fibonacci number at index 4 is " + fibr(4));
console.log("Using recursion, the fibonacci number at index 5 is " + fibr(5));
console.log("Using recursion, the fibonacci number at index 6 is " + fibr(6));
console.log("Using recursion, the fibonacci number at index 7 is " + fibr(7));
console.log("Using recursion, the fibonacci number at index 8 is " + fibr(8));


function convert2Roman (n) {
  roman = 'The year ' + n + ' is ';
  num_arr = [];
  // place digits of n into arr
  while(n>0){num_arr.unshift(n%10);n=n/10|0;};
  for (j = num_arr.length; j > 0; j--) {
    roman = make_num(num_arr[num_arr.length - j], j, roman);
    }
  return roman;
}

function make_num(num, i, rom) {
  digits = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  switch (num) {
    case 1:
      rom = rom + digits[2 * i - 2];
      break;
    case 2:
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i - 2];
      break;
    case 3:
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i - 2];
      break;
    case 4:
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i - 1];
      break;
    case 5:
      rom = rom + digits[2 * i - 1];
      break;
    case 6:
      rom = rom + digits[2 * i - 1];
      rom = rom + digits[2 * i - 2];
      break;
    case 7:
      rom = rom + digits[2 * i - 1];
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i - 2];
      break;
    case 8:
      rom = rom + digits[2 * i - 1];
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i - 2];
      break;
    case 9:
      rom = rom + digits[2 * i - 2];
      rom = rom + digits[2 * i];
      break;
    default: // do nothing if digit is 0
      rom;
  }
  return rom;
}

console.log("\n\nThis function converts a number (year) to Roman numerals")
console.log(convert2Roman(591));
console.log(convert2Roman(2017));
console.log(convert2Roman(1958));
console.log(convert2Roman(3646));
console.log(convert2Roman(2000));
console.log(convert2Roman(1324));
console.log(convert2Roman(2565));
console.log(convert2Roman(4483));
console.log(convert2Roman(879));
