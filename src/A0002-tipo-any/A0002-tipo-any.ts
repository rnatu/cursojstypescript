// Utilize any apenas em último caso
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

// Module mode
export default 1;
