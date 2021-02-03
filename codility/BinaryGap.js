// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/programmers/lessons/1-iterations/binary_gap/start/
function solution(N) {
  const stringArray = N.toString(2).split('');
  let count = 0;
  let max = 0;
  for (let char of stringArray) {
    if (char === '1') {
      if (count > max) {
        max = count;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return max;
}
// 이렇게 간소화할 수도 있다.
// function solution(N) {
//   const binary = N.toString(2);
//   const trimmed = binary.substr(0, binary.lastIndexOf('1') + 1);
//   return Math.max(...trimmed.split('1').map((item) => item.length));
// }

// console.log(solution(9));
// console.log(solution(529));
// console.log(solution(20));
// console.log(solution(32));
// console.log(solution(1041));
// console.log(solution(32));
console.log(solution(1376796946));
