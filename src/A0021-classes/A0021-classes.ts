// # Classe/Tipo Empresa
export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: /*readonly*/ Colaborador[] = []; // % Classes no typescript tambem funcionam como tipo
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  /*public não necessário*/
  public adicionaColaborador(...colaborador: Colaborador[]): void {
    colaborador.map((item) => {
      this.colaboradores.push(item);
    });
    // this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// # Classe/Tipo Colaborador
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');

empresa1.adicionaColaborador(colaborador1, colaborador2, colaborador3);
empresa1.adicionaColaborador({
  nome: 'Fernando',
  sobrenome: 'Alves',
});

empresa1.mostrarColaboradores();
