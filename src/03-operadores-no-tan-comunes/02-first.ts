import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

// Se obtiene la primera emisión con el operador "first" que cumpla la condición de que clientY sea mayor o igual a 150 y con eso se completará el observable
click$.pipe(
  tap<PointerEvent>(console.log),
  first(({ clientY }) => clientY >= 150),
  map(({ clientX, clientY }) => {
    return {
      clientY,
      clientX
    };
  })
).subscribe({
  next: value => console.log('Next: ', value),
  complete: () => console.log('Complete')
});