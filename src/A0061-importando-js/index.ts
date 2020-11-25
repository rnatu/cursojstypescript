//# se for importar de um arquivo js a linha abaixo precisa estar habilitada no tsconfig.json
// "allowJs": true
import { soma } from './modulo';

// fazendo o typecasting para number
const result = soma(10, 20) as number;
console.log(result);
