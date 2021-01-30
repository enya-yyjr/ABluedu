// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/trainingC8HXED-E2Y/

// function solution(A, B, K) {
//   return parseInt(B / K) - parseInt((A - 1) / K);
// }

function solution(A, B, K) {
  let result = parseInt(B / K) - parseInt(A / K);
  if (A % K === 0) result += 1;
  return result;
}

// console.log(solution(6, 11, 2));
// console.log(solution(0, 1, 11));
// console.log(solution(5, 7, 20));
// console.log(solution(0, 0, 11));

console.log(solution(0, 0, 2));
