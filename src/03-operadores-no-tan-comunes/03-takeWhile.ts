import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


// Se enviaran emisiones hasta que y deje de ser menor o igual a 150, se envia un tercer parametro al "takeWhile" para que envie la emisión que completó el observable.
// Por dejecto es false y no enviará la emisión que terminó el observable
const click$ = fromEvent<MouseEvent>(document, 'click')
.pipe(
  map( ({ x, y } ) => ({ x, y })),
  takeWhile(({ y }) => y <= 150, true)
)
.subscribe({
  next: (value) => console.log('Next: ', value),
  complete: () => console.log('Complete')
})