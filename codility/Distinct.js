// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/training34CC3B-T3D/
function solution(A) {
  let set = new Set();

  for (let value of A) {
    set.add(value);
  }
  return set.size;
}

console.log(solution([2, 1, 1, 2, 3, 1]));
