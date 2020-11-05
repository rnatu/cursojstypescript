export class Pessoa {
  //% atributos estáticos
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  //% métodos estáticos
  static falaOi(): void {
    console.log('Oi');
  }

  //% factory method
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Luiz', 'Miranda', 30, '123.456.789-10');
console.log(pessoa1.cpf);
Pessoa.falaOi();

const pessoa2 = Pessoa.criaPessoa('Fernando', 'Souza');
console.log(pessoa2);

pessoa2.metodoNormal();
//Ou
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
