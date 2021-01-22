// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/trainingXFUTRA-HWM/

function solution(S) {
  if (S.length === 0) return 1;

  let arr = [];

  for (let i in S) {
    let c = S[i];
    if (c === '{' || c === '[' || c === '(') {
      arr.push(c);
    } else {
      if (arr.length === 0) return 0; //여는 괄호 없이 바로 닫는 괄호가 나온 경우

      if (c === '}' && arr.pop() !== '{') return 0;
      if (c === ']' && arr.pop() !== '[') return 0;
      if (c === ')' && arr.pop() !== '(') return 0;
    }
  }

  if (arr.length !== 0) return 0; //닫는 괄호가 모자란 경우

  return 1;
}
console.log(solution('{[()()]}'));
console.log(solution('([)()]'));
