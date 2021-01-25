// 문제 링크 : https://www.acmicpc.net/problem/2675
const readline = require('readline');
const std = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCase;
let count = 0;
let answer = [];
std.on('line', function (line) {
  if (count === 0) testCase = line.split(' ').map((el) => Number(el));
  else if (0 < count && count <= testCase) {
    input = line.split(' ').map((el) => el);
    let str = '';
    for (let i = 0; i < input[1].length; i++) {
      for (let j = 0; j < input[0]; j++) {
        str += input[1][i];
      }
    }
    answer.push(str);
  }
  count++;

  if (testCase < count) {
    for (let string of answer) {
      console.log(string);
    }
    std.close();
  }
});
