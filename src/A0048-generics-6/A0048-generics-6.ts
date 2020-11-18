export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  // return { ...obj1, ...obj2 };
  return Object.assign(obj1, obj2);
}

const obj1 = {
  chav1: 'valor1',
  chav2: 'valor2',
};

const obj2 = {
  chav3: 'valor3',
  chav4: 'valor4',
};

const união = unirObjetos(obj1, obj2);
console.log(união);
