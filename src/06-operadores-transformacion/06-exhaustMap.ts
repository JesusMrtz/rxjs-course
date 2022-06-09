import { interval, take, fromEvent, exhaustMap } from 'rxjs';
/**
 * el operador 'exhaustMap' ejecuta los observables que inició y hasta finalizar, si el usuario da varios click, este los ignorará hata finalizar con el observable en curso,
 * Es util cuando nosotros tenemos elementos están lanzando eventos rápidamente o cuando usuario da doble submit a un formulario
 */
const interval$ = interval(500).pipe(
  take(3)
);

const click$ = fromEvent(document, 'click');

click$.pipe(
  exhaustMap(() => interval$)
).subscribe({
  next: (value) => console.log('Inicio: ', value),
  complete: () => console.log('Has finalizado el observable')
});