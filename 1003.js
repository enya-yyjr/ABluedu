// 문제 링크 : https://www.acmicpc.net/problem/1003
const readline = require("readline");
const std = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let testCase = [];
let T;
let fibo0Count = 0;
let fibo1Count = 0;
let memo = { 0: [1, 0], 1: [0, 1] };
std.on("line", (line) => {
  if (count === 0) {
    T = parseInt(line);
  } else if (0 < count && count <= T) {
    testCase.push(parseInt(line));
  }
  if (T <= count) {
    std.close();
    solution();
  }
  count++;
});
function solution() {
  for (let i = 0; i < T; i++) {
    fibo0Count = 0;
    fibo1Count = 0;
    fibonacci(testCase[i]);
    console.log(fibo0Count, fibo1Count);
  }
}

function fibonacci(n) {
  if (memo[n]) {
    fibo0Count += memo[n][0];
    fibo1Count += memo[n][1];
    return;
  }
  fibonacci(n - 1) + fibonacci(n - 2);
  memo[n] = [fibo0Count, fibo1Count];
}
