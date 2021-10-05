import sum from './sum';

test('덧셈 함수 테스트', () => {
  expect(sum(1, 2)).toBe(3);
});

//toEqual은 재귀적으로 array, object의 모든 field를 체크한다.
test('object assignment', () => {
  const obj: { [key: string]: number } = { one: 1 };
  obj['two'] = 2;
  expect(obj).toEqual({ one: 1, two: 2 });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
