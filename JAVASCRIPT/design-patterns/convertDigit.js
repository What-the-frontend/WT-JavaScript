/**
 * this function num makes 1 to 01.
 */
function convertDigit(num) {
  return (num + '0').slice(-2);
}

// ES6
const convertDigit = num => `0${num}`.slice(-2);