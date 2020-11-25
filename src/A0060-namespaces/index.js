/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
  MeuNamespace.nomeDoNamespace = 'Luiz';
  var PessoaDoNamespace = /** @class */ (function () {
    function PessoaDoNamespace(nome) {
      this.nome = nome;
    }
    return PessoaDoNamespace;
  })();
  MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var pessoa = new PessoaDoNamespace('Felipe');
  // console.log(pessoa);
  var OutroNamespace;
  (function (OutroNamespace) {
    OutroNamespace.nomeDoOutroNamespace = 'Renato';
  })(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (OutroNamespace =
      MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {})),
  );
})(MeuNamespace || (MeuNamespace = {}));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var constDoNamespace = 'Valor da const fora do namespace';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Roberto');
// console.log(pessoaDoNamespace);
// console.log(MeuNamespace.nomeDoNamespace);
// console.log(MeuNamespace.OutroNamespace.nomeDoOutroNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MeuNamespace.nomeDoNamespace);
console.log(constDoNamespace);
//# gera um 'bundle' do arquivo original ts para um js, podendo ser utilizado como mostrado acima
//npx tsc src/A0060-namespaces/index.ts --outfile src/A0060-namespaces/index.js
