// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/training2E59CC-5TU/
function solution(A) {
  let count = 0;
  let weight = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) weight++;
    else count += weight;
  }
  return count > 1000000000 ? -1 : count;
}

console.log(solution([0, 1, 0, 1, 1]));
