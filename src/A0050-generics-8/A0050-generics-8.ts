/* eslint-disable @typescript-eslint/no-unused-vars */
//# Record - seta o tipo da chave e dos valores (ex: tipo da chave string, tipo dos valores string ou number)
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto1);
console.log('');

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//# Required - seta o tipo das chaves como required
type PessoaRequired = Required<PessoaProtocol>;
//# Partial - seta o tipo das chaves como opicional
type PessoaPartial = Partial<PessoaRequired>;
//# Readonly - seta o tipo das chaves como readonly
type PessoaReadonly = Readonly<PessoaRequired>;
//# Pick - escolhe quais chaves quer obter
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto2);
console.log('');

//# Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
// Exclude - Todos os tipos que estão em ABC que não estão em CDE -> 'A' e 'B' no caso
type TipoExclude = Exclude<ABC, CDE>;

// Exclude - Todos os tipos que estão em ABC que e estão em CDE -> 'C' no caso
type TipoExtract = Extract<ABC, CDE>;

// exemplos de utilização
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asfd9p8a7sdf90a8s76f9as',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);
console.log('');

// Module mode
export default 1;
