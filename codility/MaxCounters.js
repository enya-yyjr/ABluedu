// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/trainingUUFBXB-2SZ/

function solution(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let X of A) {
    if (X <= N) {
      if (counters[X - 1] < lastMax) {
        counters[X - 1] = lastMax;
      }
      counters[X - 1]++;
      if (max < counters[X - 1]) {
        max = counters[X - 1];
      }
    } else {
      lastMax = max;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < lastMax) {
      counters[i] = lastMax;
    }
  }

  return counters;
}
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
