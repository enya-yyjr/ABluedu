// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/trainingQ42557-NVC/
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] < 0) continue;
    for (let j = i + 1; j < A.length - 1; j++) {
      if (A[i] + A[j] > A[j + 1]) {
        return 1;
      }
    }
  }
  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));
