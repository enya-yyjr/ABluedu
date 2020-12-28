const readline = require('readline');
const std = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* 문자형 숫자를 두개 입력받아 숫자로 변환한후 두개를 더해서 출력하는 예제  */
std
  .on('line', (line) => {
    input = line.split(' ').map((el) => Number(el));
    console.log(input[0] + input[1]);
    std.close();
  })
  .on('close', () => process.exit());
let firstInput;
let secondInput;
// 여러 번 입력을 받아야 하는 경우
std.on('line', function (line) {
  if (count === 0) firstInput = line.split(' ').map((el) => Number(el));
  else if (0 < count && count <= 4) {
    // 0번째에서 4번째 사이에 입력
    secondInput = line.split(' ').map((el) => Number(el));
  }
  count++;

  if (4 < count) {
    std.close();
  }
});
