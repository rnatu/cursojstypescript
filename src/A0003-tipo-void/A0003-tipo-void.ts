function semRetorno(...args: string[]): void {
  console.log(args.join('--'));
}

semRetorno('Renato', 'Xavier');

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otavio',

  exibirNome(): void {
    console.log(this.nome + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
