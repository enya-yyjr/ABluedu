// 문제 링크( 코딜리티 회원가입 필요) :https://app.codility.com/c/run/trainingMVM8PZ-X6W/
function solution(A) {
  const ALen = A.length;
  A.sort((a, b) => a - b);
  return Math.max(
    A[ALen - 1] * A[ALen - 2] * A[ALen - 3],
    A[0] * A[1] * A[ALen - 1]
  );
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-3, -1, -2, -2, -5, -6, 1]));
