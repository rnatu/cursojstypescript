export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.contador--;
    const deletedElement = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return deletedElement;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }

  esvaziarPilha(): void {
    while (!this.isEmpty()) {
      console.log(this.pop());
    }
  }
}

const pilha = new Pilha<number | string>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.mostrarPilha();
console.log('--------');

pilha.esvaziarPilha();

console.log('--------');
pilha.push('string 1');
pilha.mostrarPilha();
