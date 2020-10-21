// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => {
    return ac * valor;
  }, 1);
}
const result = multiplicaArgs(1, 2, 3);
console.log(result);

export function concatenaString(...args: string[]): string {
  return args.join('');
}
console.log(concatenaString('a', 'b', 'c'));

export function maiusculo(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}
console.log(maiusculo('a', 'b', 'c'));
