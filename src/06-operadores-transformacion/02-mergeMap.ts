import { fromEvent, interval } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

/**
 * Cuando el observable padre 'mousedown$' empieza a enviar su primera emisión, el operador 'mergeMap' recibe un nuevo observable para calcular el tiempo cuando cuando el usuario deje de apretar el click gracias al operador 'takeUntil'
 */
mousedown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseup$)
  ))
).subscribe(console.log);