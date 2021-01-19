// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/training6FK578-9PV/
function solution(A) {
  let result = 1;
  let findNumber = {};
  for (let value of A) {
    findNumber[value] = true;
    if (value === result) {
      let i = value;
      while (i in findNumber) {
        result++;
        i++;
      }
    }
  }

  return result;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
