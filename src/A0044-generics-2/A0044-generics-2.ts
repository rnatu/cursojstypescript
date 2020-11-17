type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromisse(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));

minhaPromisse().then((result) => console.log(result + 2));
