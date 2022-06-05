import { interval, reduce, take, tap } from 'rxjs';

function totalReducer(accumulate: number, actualValue: number): number {
  return accumulate + actualValue;
}

// Crear un observable interval, tomar solamente 6 valores y sumarlo con el reduce 
const interval$ = interval(1000).pipe(
  take(6),
  tap(console.log),
  reduce(totalReducer)
);

interval$.subscribe({
  next: (value) => console.log('Next: ', value),
  complete: () => console.log('Se ha completado el observer')
});