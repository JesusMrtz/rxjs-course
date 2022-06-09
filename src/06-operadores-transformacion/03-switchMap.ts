import { fromEvent } from 'rxjs';
import {map, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';



// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );
/**
 * El operador 'switchMap' cancela todas las emisiones anteriores y solamente se queda con el último valor emitido
 */

const url = 'https://httpbin.org/delay/1?arg='; // + fernando

input$.pipe(
  map((response) => (response.target as HTMLInputElement).value),
  switchMap( texto => ajax.getJSON(url + texto)  )
).subscribe( console.log );












