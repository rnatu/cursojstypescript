/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />

console.log(MeuNamespace.nomeDoNamespace);
console.log(constDoNamespace);

//# gera um 'bundle' do arquivo original ts para um js, podendo ser utilizado como mostrado acima
//npx tsc src/A0060-namespaces/index.ts --outfile src/A0060-namespaces/index.js
