// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/trainingETWZME-STA/
function solution(A) {
  let result = {};
  for (let value of A) {
    if (value in result) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }
  }
  for (let key in result) {
    if (result[key] % 2 === 1) {
      return Number(key);
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
console.log(solution([2, 4, 3, 4, 2]));
console.log(solution([1, 1, 3, 3, 5]));
console.log(solution([6]));
