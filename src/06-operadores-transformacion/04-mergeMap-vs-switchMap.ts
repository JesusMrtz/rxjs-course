import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

/**
 * La diferencia entre el operador 'mergeMap' y 'switchMap' es que el switchMap solo mantiene una subscripción interna activa, mientras que el mergeMap puede mantener todas las que queramos simultaneamente.
 */
click$.pipe(
  //mergeMap(() => interval$),
  switchMap(() => interval$)
).subscribe(console.log);