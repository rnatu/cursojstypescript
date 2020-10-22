/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
let x;
if (x === undefined) x = 2;
console.log(x * 2);

//% undefined
export function createPerson(
  firstname: string,
  lastname?: string,
): { firstname: string; lastname?: string } {
  return {
    firstname,
    lastname,
  };
}

const person1 = createPerson('Renato');
person1.lastname === undefined
  ? console.log('Preenchido seu primeiro nome')
  : console.log('Preenchido nome completo');

//% null

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const result = squareOf('abcdef');
if (result === null) {
  console.log('Conta inválida');
} else {
  console.log(result * 100);
}
