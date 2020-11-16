type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((pv, cv) => pv + cv, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(5));
console.log(adder(5, 6));
console.log(adder(1, 2, 3));

export default 1;
