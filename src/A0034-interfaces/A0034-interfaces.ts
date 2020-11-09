interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Agora tá ok',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};
console.log(pessoaObj.nomeCompleto());

const pessoa = new Pessoa('Renato', 'Silva');
console.log(pessoa.nomeCompleto());
