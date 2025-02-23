//문제
// 오래전 유행했던 콜라 문제가 있습니다. 콜라 문제의 지문은 다음과 같습니다.
// 콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
// 단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.
// 우선 콜라 빈 병 20병을 가져가서 10병을 받습니다. 받은 10병을 모두 마신 뒤, 가져가서 5병을 받습니다. 5병 중 4병을 모두 마신 뒤 가져가서 2병을 받고, 또 2병을 모두 마신 뒤 가져가서 1병을 받습니다. 받은 1병과 5병을 받았을 때 남은 1병을 모두 마신 뒤 가져가면 1병을 또 받을 수 있습니다. 이 경우 상빈이는 총 10 + 5 + 2 + 1 + 1 = 19병의 콜라를 받을 수 있습니다.
// 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

// 내 풀이
// a는 빈병/ b는 마트가 줘야하는 병수/ n은 상빈이가 가지고있는 빈병의 갯수

function solution(a, b, n) {
  return method(a, b, n);
}
function method(a, b, bottle) {
  if (bottle < a) return 0;
  const newBottles = Math.floor(bottle / a) * b;
  //여기서 재귀적 반복을 구현하지 못함
  return newBottles + method(a, b, newBottles + (bottle % a));
}

//다른사람 풀이1
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const newBottles = Math.floor(n / a) * b;
    answer += newBottles;
    n = newBottles + (n % a);
  }
  return answer;
}

//다른사람 풀이2
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
