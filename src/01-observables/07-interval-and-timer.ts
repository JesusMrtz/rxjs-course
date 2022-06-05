import { interval, timer } from "rxjs";

const interval$ = interval(1000);

const todayWith5Seconds = new Date();
todayWith5Seconds.setSeconds(todayWith5Seconds.getSeconds() + 5);


/********** TIMER *************/
// Inicia la emisión de valores a los 2 segundos y se completará
// const timer$ = timer(2000);

// Inicia la emisión de valores a los 2 segundos y este continúa, Jamás se completará
// const timer$ = timer(2000, 1000);

// Inicia la emisión a la fecha de hoy más 5 segundos y jamás se completará
const timer$ = timer(2000, 1000);

/**********END TIMER **********/

console.log('Inicio del interval');

// interval$.subscribe({
//   next: (value) => console.log('Next: ', value),
//   complete: () => console.log('Interval completado')
// });

timer$.subscribe({
  next: (value) => console.log('Next: ', value),
  complete: () => console.log('Timer completado')
})

console.log('Fin del interval');