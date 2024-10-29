import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 3;
  const got = mut.div(9, 3);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = -3;
  const got = mut.div(-6, 2);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 0;
  const got = mut.div(0, 2);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = Infinity;
  const got = mut.div(2, 0);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = true;
  const got = mut.containsNumbers("123");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = false;
  const got = mut.containsNumbers("abc");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = true;
  const got = mut.containsNumbers("abc1");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = false;
  const got = mut.containsNumbers("@#!");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- success', () => {
  const expected = false;
  const got = mut.containsNumbers("文字");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- failure', () => {
  const expected = false;
  const got = mut.containsNumbers(" ");
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- failure', () => {
  const expected = false;
  const got = mut.containsNumbers("Hello User");
  expect(got).toBe(expected);
});