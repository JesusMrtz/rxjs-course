import { fromEvent } from "rxjs";
import { mapTo } from 'rxjs/operators';

/***
 * Se crea un onservable de "fromEvent" cada vez que se deje de pulsar una tecla en el document y información pasa por el mapTo y se convierte en un string que dice 'Tecla presionada'
 * 
 * NOTA: este operador mapTo ya se encuentra deprecado y se debe usar en su lugar map()
 * 
 * */
const keyUpMapTo$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  mapTo(() => 'Tecla presionada')
);

keyUpMapTo$.subscribe(console.log)