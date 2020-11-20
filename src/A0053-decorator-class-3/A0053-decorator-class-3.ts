function inverteNomeECor(param1: string, param2: string) {
  // Closure
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <T extends new (...args: any[]) => any>(target: T): T {
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
//função decoradora

@inverteNomeECor('Outra coisa', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Papagaio', 'Verde');
console.log(animal);
