import { interval, fromEvent, takeUntil, skip } from 'rxjs';

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);

/** Se va a detener el interval cuando el usuario de 2 click en el boton ya que se está utilizando el skip para iniciar hasta el segundo click */
const clickButton$ = fromEvent<PointerEvent>(button, 'click').pipe(
  skip(1)
);


counter$.pipe(
  takeUntil(clickButton$)
)
.subscribe({
  next: (value) => console.log('Next: ', value),
  complete: () => console.log('Counter$ completado')
});