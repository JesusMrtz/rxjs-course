import { from } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
 (() =>{
  const names = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

  const names$ = from(names).pipe(
    map( (value) => `${value.charAt(0).toUpperCase()}${value.substring(1)}` )
  ).subscribe(console.log)
})();
