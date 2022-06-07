import { fromEvent, asyncScheduler } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, throttleTime } from 'rxjs/operators';

/**
 * Envia la primera emisión e ignora las demás hasta que pase un segundo
 */
// const click$ = fromEvent(document, 'click').pipe(
//   throttleTime(1000)
// );
// click$.subscribe(console.log);


/**
 * Creamos un input donde se escribirá algo y se enviará la primera emisión pero después de que pase 1 segundo se enviará la siguiente emision ignorando todas las demás anterior.
 * Se envia un asyncSheduler y un objeto como parametros opcionales para traer siempre el primero y el último valor gracias a las propiedades 'leading' que trae siempre la primera emisión y el 'trailing' que trae siempre la última emisión
 * Se pone el distinctUntilChanged para evitar que el actual valor se repita al último emitido (Esta conbinación es muy util para realizar peticiones HTTPS)
 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  map((response) => (response.target as HTMLInputElement).value),
  distinctUntilChanged()
);


input$.subscribe(console.log);