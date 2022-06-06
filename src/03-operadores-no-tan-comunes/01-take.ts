import { of } from 'rxjs';
import { take } from 'rxjs/operators'

// Vamos a limitar las emisiones a 3 con el operador take
const numbers$ = of(1, 2, 3, 4, 5).pipe(
  take(3)
);

numbers$.subscribe({
  next: (value) => console.log('Next: ', value),
  complete: () => console.log('Se ha completado los valores')
});