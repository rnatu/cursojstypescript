const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor'; // não pode ser alterada a chave pois é readonly no objeto
objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';
console.log(objetoA);

// Module mode
export default 1;
