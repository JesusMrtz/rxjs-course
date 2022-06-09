import { interval, take, fromEvent, concatMap } from 'rxjs';


/**
 * el operador 'concatMap' ejecuta los observables secuencialmente y los concatenará para el subscribe,
 * en ese ejemplo cuando damos '5' veces click el concatmap obtendrá los primeros 3 elementos del intervalo 5 veces de manera secuencial
 */
const interval$ = interval(500).pipe(
  take(3)
);

const click$ = fromEvent(document, 'click');

click$.pipe(
  concatMap(() => interval$)
).subscribe({
  next: (value) => console.log('Inicio: ', value),
  complete: () => console.log('Has finalizado el observable')
});