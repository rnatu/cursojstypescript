export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  // % apenas o contructor de sala está sendo criado, os outros são só os parametros já existentes na classe Pessoa
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getConsoleBefore(): string {
    console.log('FAZENDO ALGO ANTES');
    const result = super.getNomeCompleto();
    return result + ' Heeeeeeeeeeeeey';
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
console.log(pessoa.getNomeCompleto());

const aluno = new Aluno('Aline', 'Fernandes', 30, '000.000.000-00', '0001');
console.log(aluno.getConsoleBefore());
console.log(aluno);
