import { test, expect, describe } from 'vitest';
import { pipe, go } from '../../utils/index.js';

describe('pipe 함수 사용 테스트', () => {
  test('동기 파이프 함수를 이용하여 함수를 저장해두었다가 사용할 수 있다.', () => {
    const plusPipe = pipe(
      (x) => x + 2,
      (x) => x + 3,
      (x) => x + 4,
    );
    expect(plusPipe(1)).toBe(10);
  });

  test('비동기 파이프 함수를 이용하여 함수를 저장해두었다가 사용할 수 있다.', async () => {
    const asyncPlusPipe = pipe(
      (x) =>
        new Promise((res, rej) => {
          res(x + 2);
        }),
      (x) => x + 3,
      (x) => x + 4,
    );
    expect(await asyncPlusPipe(1)).toBe(10);
  });
});

describe('go 함수 사용 테스트', () => {
  test('객체를 첫번째 매개변수로 받아 값을 활용할 수 있다.', () => {
    const result = go(
      { a: 1, b: 2 },
      (obj) => ({ a: obj.a * 2, b: obj.b * 2 }),
      (obj) => obj.a + obj.b,
    );
    expect(result).toBe(6);
  });

  test('비동기 함수가 끼어있는 상황에서도 객체를 첫번쨰 매개변수로 받아 값을 활용할 숭 있따.', async () => {
    const result = await go(
      { a: 1, b: 2 },
      (obj) => new Promise((res) => res(obj.a + obj.b)),
      (n) => `${n}이 결과로 나와버려쓰`,
    );
    expect(result).toBe('3이 결과로 나와버려쓰');
  });
});
