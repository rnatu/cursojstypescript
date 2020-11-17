interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string> = {
  nome: 'Renato',
  sobrenome: 'Xavier',
  idade: 29,
};
console.log(aluno1);

const aluno2: PessoaProtocolo<number> = {
  nome: 123,
  sobrenome: 456,
  idade: 29,
};
console.log(aluno2);

const aluno3: PessoaProtocolo = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 29,
};
console.log(aluno3);

const aluno4: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 29,
};
console.log(aluno4);
