/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado */
// Type assertion
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const body4 = (document.querySelector('body') as unknown) as number;

// Non-null assertion (!)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
