// type Pessoa = {
//   nome: string;
// };

// # declaration merge - interfaces sendo unidas com o mesmo nome declarado
interface Pessoa {
  readonly nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  //colocando readonly para a propriedade e para o array, para que metodos como push não funcionem
  readonly enderecos: readonly string[];
}

interface Pessoa {
  //utilização de readonly em uma propriedade opcional
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Renato',
  sobrenome: 'Xavier',
  enderecos: ['Av. Brasil'],
  idade: 29,
};

console.log(pessoa);
