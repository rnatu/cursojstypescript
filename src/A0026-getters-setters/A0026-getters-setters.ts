export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-10');
pessoa.cpf = '111.222.333-99';
console.log(pessoa.cpf);
