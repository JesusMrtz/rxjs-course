import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<PointerEvent>(document, 'click');

/**
 * Combinamos las emisiones del click y del keyup con la ayuda del método 'merge' 
 * Si los dos se disparan al mismo tiempo, entonce se visualizará primero que se puso en el merge
 */
merge(
  keyup$.pipe( map( ({ type }) => type) ), 
  click$.pipe( map( ({ type }) => type) )
).subscribe(console.log);