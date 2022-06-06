import { interval, fromEvent, takeUntil } from 'rxjs';

/******* Se crea un button en el html */
const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

/***** Se crea dos observable */
const counter$ = interval(1000);
const clickButton$ = fromEvent<PointerEvent>(button, 'click');

/****** El interval empieza a emitir hasta que cuando le damos click al button, este completará el primer observable */
counter$.pipe(
  takeUntil(clickButton$)
)
.subscribe({
  next: (value) => console.log('Next: ', value),
  complete: () => console.log('Counter$ completado')
});