const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [first, second] = input.map((value) => [...value].reverse().join(''));

console.log(first > second ? first : second);
