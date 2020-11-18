export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const result = args.reduce((ac, value) => {
    if (isNumber(ac) && isNumber(value)) {
      return ac + value;
    }
    return ac;
  }, 0);
  return result;
}

console.log(soma(1, 2, 3));
console.log(soma('a', 'b', 'c'));
console.log(soma(...[1, 2, 3, 'a', 'b', 'c', 1]));
