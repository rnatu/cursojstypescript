interface Contructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function (target: Contructor) {
    console.log('Sou o decorador e recebi', target);
    //% classe anonima
    return class extends target {
      cor: string;
      nome: string;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(...args: any[]) {
        //# super é a execução do construtor da classe 'pai'
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(value: string): string {
        return (
          value.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2
        );
      }
    };
  };
}

function outroDecorador(valor: string) {
  return function (target: Contructor) {
    console.log('Sou o outro decorador e recebi ' + valor);
    return target;
  };
}
//função decoradora
@outroDecorador('Oiieee') //# 2
@inverteNomeECor('Outra coisa', 'Valor2') //# 1
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Papagaio', 'Verde');
console.log(animal);
