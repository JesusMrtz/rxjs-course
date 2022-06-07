import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

/**
 * Envia la última emisión que se realizó después de que pase 1 segundo
 */
// const click$ = fromEvent(document, 'click').pipe(
//   debounceTime(1000)
// );
// click$.subscribe(console.log);


/**
 * Creamos un input donde se escribirá algo y después de 1 segundo gracias al operador 'debounceTime' se obtendrá el valor de la última emisión del input.
 * Se pone el distinctUntilChanged para evitar que el actual valor se repita al último emitido (Esta conbinación es muy util para realizar peticiones HTTPS)
 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
  debounceTime(1000),
  map((response) => (response.target as HTMLInputElement).value),
  distinctUntilChanged()
);


input$.subscribe(console.log);