import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


/**
 * Creamos un obserevable con el evento click y gracias al 'auditTime' se obtene el último valor cuando pasa cierta cantidad de tiempo
 */
const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
  tap((value) => console.log('Value: ', value.x)),
  auditTime(5000),
  map(({ x }) => x)
).subscribe(({
  next: (value) => console.log('Audit Time: ', value)
}))