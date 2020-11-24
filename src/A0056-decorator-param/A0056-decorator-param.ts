function decorador(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    @decorador idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();

    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Fernando', 'Brito', 20);

// # alterar o metodo como baixo não irá funcionar se no decorator do metodo for setado como writable: false
// pessoa.metodo = () => 'EIIIIIIIIIIIIII';

const metodo = pessoa.metodo('Esse é meu nome completo');
console.log('');
console.log(metodo);
