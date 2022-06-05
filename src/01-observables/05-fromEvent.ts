import { fromEvent } from 'rxjs';

/**
 * Eventos del evento
 */
const clickObservable$ = fromEvent<PointerEvent>(document, 'click');
const keyUpObservable$ = fromEvent<KeyboardEvent>(document, 'keyup');



clickObservable$.subscribe({
  next: (event) => {
    console.log(event.x);
    console.log(event.y);
  }
});

keyUpObservable$.subscribe({
  next: (event) => {
    console.log(event.key);
  }
});