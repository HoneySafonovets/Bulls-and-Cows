import { describe, test, expect } from 'vitest';
// import { generateSecret } from './game.ts';

describe('generateSecret', () => {
  test('генерирует секрет заданной длины с детерминированным random', () => {
    const secret = generateSecret(4, 10, () => 0);
    expect(secret).toBe('0123'); // ожидаемый результат при таком random
  });
});
