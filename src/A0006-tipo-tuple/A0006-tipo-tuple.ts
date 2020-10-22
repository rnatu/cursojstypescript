const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Laura', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Ricardo']; //com opcional
const dadosCliente4: [number, string, ...string[]] = [1, 'Bia', 'Ana', 'Alan'];
const dadosCliente5: readonly [number, string] = [1, 'Felipe']; //impedinto push ou pop na tuple

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Renato';
dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);

// Module mode
export default 1;
