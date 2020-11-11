// typeof diferente do javascript, estimula o tipo referente á classe, seta o tipo dinamicamente
// cria um tipo a partir do tipo de outro objeto
type CoresObj = typeof coresObj;

// cria um tipo, utilizando somente as chaves de um objeto
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('roxo', coresObj));
