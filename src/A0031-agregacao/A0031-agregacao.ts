export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    produtos.map((item) => {
      this.produtos.push(item);
    });
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    const total = this.produtos
      .reduce((acc, produto) => acc + produto.preco, 0)
      .toFixed(2);

    return parseFloat(total);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 18);
const produto3 = new Produto('Caneta', 1.7);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);

console.log(
  `Quantidade de produtos no carrinho: ${carrinhoDeCompras.quantidadeProdutos()}`,
);
console.log(`Valor total do carrinho: ${carrinhoDeCompras.valorTotal()}`);
