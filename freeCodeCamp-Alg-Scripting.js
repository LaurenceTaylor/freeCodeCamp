/////////////////////////////////////////////////////////////////////////////////////////
// Reverse a String
/////////////////////////////////////////////////////////////////////////////////////////

function reverseString(str) {
  str = str.split('');            // split the string into an array, no delimiter
  str = str.reverse();            // reverse the array
  str = str.join('');             // join the array back into a string, no delimiter
  return str;
}

reverseString("Greetings from Earth");

////////////////////
// Simpler solution:

function reverseString(str) {
  return str.split('').reverse().join('');
}

/////////////////////////////////////////////////////////////////////////////////////////
// Factorialize a Number
/////////////////////////////////////////////////////////////////////////////////////////

function factorialize(num) {
  var total = 1;                  // set total outside of loop, starting at 1 because we're multiplying
  for (i = 1; i <= num; i++) {    // set up for loop, with i running from 1 to num
    total *= i;                   // multiply running total by i each iteration
  }
  return total;
}

factorialize(5);

////////////////////
// Simpler solution:

function factorialize(num) {          // this solutions uses recursion instead
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

/////////////////////////////////////////////////////////////////////////////////////////
// Check for Palindromes
/////////////////////////////////////////////////////////////////////////////////////////

function palindrome(str) {
  forward = str.toLowerCase().replace(/[^a-z1-9]/g, '');        // remove special characters, change to lower case
  backward = forward.split('').reverse().join('');              // reverse by splitting string, reversing then joining
  if (forward == backward) return true;                         // check if forward and backward versions match
  else return false;
}

palindrome("eye");

////////////////////
// Simpler solution:

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

/////////////////////////////////////////////////////////////////////////////////////////
// Find the Longest Word in a String
/////////////////////////////////////////////////////////////////////////////////////////

function findLongestWord(str) {
  var words = str.split(' ');                   // split string into separate words
  var max = 0;
  
  for (var i = 0; i < words.length; i++) {      // loop which iterates through the array of words
    if (words[i].length > max) {                // checks length of each word. If larger than max, it becomes the new max
      max = words[i].length;
    }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/////////////////////////////////////////////////////////////////////////////////////////
// Title Case a Sentence
/////////////////////////////////////////////////////////////////////////////////////////
