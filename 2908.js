// 문제 링크 : https://www.acmicpc.net/problem/2908
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const [first, second] = input.map((value) => [...value].reverse().join(''));

console.log(first > second ? first : second);
