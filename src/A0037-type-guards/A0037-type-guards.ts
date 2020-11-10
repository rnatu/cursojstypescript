function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('a', 'b'));
export default 1;

type Pessoa = { nome: string; tipo: 'pessoa' };

type Animal = { cor: string; tipo: 'animal' };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

export class Mamimero implements Animal {
  tipo: 'animal' = 'animal';
  constructor(public cor: string) {}
}

const aluno1 = new Aluno('Fernando');
const mamifero1 = new Mamimero('Branco');

function mostraInfo(obj: PessoaOuAnimal) {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      return;
  }
}

mostraInfo(aluno1);
mostraInfo(mamifero1);
