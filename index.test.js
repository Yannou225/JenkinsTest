const calculate = require('./index.js');

test('addition de 1 + 2 = 3', () => {
    expect(calculate(1, 2, '+')).toBe(3);
});

test('soustraction de 5 - 3 = 2', () => {
    expect(calculate(5, 3, '-')).toBe(2);
});

test('multiplication de 4 * 2 = 8', () => {
    expect(calculate(4, 2, '*')).toBe(8);
});

test('division de 6 / 3 = 2', () => {
    expect(calculate(6, 3, '/')).toBe(2);
});

test('division par zéro', () => {
    expect(calculate(6, 0, '/')).toBe(null);
});


test('opération inconnue', () => {
    expect(calculate(6, 3, '%')).toBe(null);
});

test('entrées invalides', () => {
    expect(calculate('a', 3, '+')).toBe(null);
    expect(calculate(6, 'b', '+')).toBe(null);
    expect(calculate('a', 'b', '+')).toBe(null);
});

test('division de 10 / 3 = 3.334', () => {
    expect(calculate(10, 3, '/')).toBeCloseTo(3);
});