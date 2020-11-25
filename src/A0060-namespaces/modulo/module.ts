/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pessoa = new PessoaDoNamespace('Felipe');
  // console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoOutroNamespace = 'Renato';
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const constDoNamespace = 'Valor da const fora do namespace';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Roberto');
// console.log(pessoaDoNamespace);

// console.log(MeuNamespace.nomeDoNamespace);

// console.log(MeuNamespace.OutroNamespace.nomeDoOutroNamespace);
