'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str) {
  var wordsArray = str.toLowerCase().split(/\s+/);
  var upperCased = wordsArray.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  });
  return upperCased.join(" ");
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('You must write your own tests'), 'You Must Write Your Own Tests')

// End of tests */
