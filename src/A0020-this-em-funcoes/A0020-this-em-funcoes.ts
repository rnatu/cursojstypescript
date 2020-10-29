// # tipagem do this se for usado em uma função
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// # call ou apply é usado para definir quem vai ser o this na função
//oque muda entre os dois é a forma de escrita
funcao.call(new Date(), 'Renato', 30);
funcao.apply(new Date(), ['Renato', 30]);
