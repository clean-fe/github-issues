import { test, expect, describe } from 'vitest';
import { go, pipe, setTpl } from '../../src/utils';

describe('pipe 함수 사용 테스트', () => {
  test('동기 파이프 테스트', () => {
    const plusPipe = pipe(
      (x) => x + 2,
      (x) => x + 3,
      (x) => x + 4,
    );
    expect(plusPipe(1)).toBe(10);
  });

  test('비동기 파이프 테스트', async () => {
    const asyncPipe = pipe(
      (x) =>
        new Promise((res, rej) => {
          res(x + 2);
        }),
      (x) => x + 3,
      (x) => x + 4,
    );
    expect(await asyncPipe(1)).toBe(10);
  });
});

describe('go 함수 사용 테스트', () => {
  test('객체 프로퍼티 가지고 놀다가 합을 뱉어버리기', () => {
    const result = go(
      { a: 1, b: 2 },
      (obj) => ({ a: obj.a * 2, b: obj.b * 2 }),
      (obj) => obj.a + obj.b,
    );
    expect(result).toBe(6);
  });

  test('비동기도 처리할 수 잇는 지 확인해보기', async () => {
    const result = await go(
      { a: 1, b: 2 },
      (obj) => new Promise((res) => res(obj.a + obj.b)),
      (n) => `${n}이 결과로 나와버려쓰`,
    );
    expect(result).toBe('3이 결과로 나와버려쓰');
  });
});
