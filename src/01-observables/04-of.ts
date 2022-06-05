import { of } from "rxjs";

const observableOf$ = of<number[]>(1, 2, 3, 4, 5, 6);
// const observableOf$ = of([1, 2], {a: 1, b: 2}, function(){}, true, Promise.resolve(true));

/**
 * Cuando se subscribe al of, este se resuelve de manera sincrona
 */
console.log('Inicio del Of$');
observableOf$.subscribe({
  next: (value) => { console.log('next', value) },
  error: () => { null },
  complete: () => console.log('terminamos la secuencia')
});
console.log('Fin del Of$');