// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/training6HGX59-2QT/
function solution(A, K) {
  if (A.length === 0) return [];
  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));
