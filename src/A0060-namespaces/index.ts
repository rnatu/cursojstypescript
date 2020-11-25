/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Felipe');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoOutroNamespace = 'Renato';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Roberto');
console.log(pessoaDoNamespace);

console.log(MeuNamespace.nomeDoNamespace);

console.log(MeuNamespace.OutroNamespace.nomeDoOutroNamespace);

//Module Mode
export default 1;
