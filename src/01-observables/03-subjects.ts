import { Observable, Observer, Subject } from 'rxjs';

// Creando un observer y enviarlo a la subscripción
const observer: Observer<any> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Se ha completado la subscripción correctamente')
}


const observer$ = new Observable<number>(subscriber => {
  const intervalID = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  return (() => {
    clearInterval(intervalID);
    console.log('Intervalo destruido');
  });
});


// const subscription1 = observer$.subscribe(rnd => console.log('Subs1: ', rnd));
// const subscription2 = observer$.subscribe(rnd => console.log('Subs2: ', rnd));

/**
 * Se crea un subject y se utiliza como observable para que la información de la subscription1 y subscription2 sea la misma.
 */
const subject$ = new Subject();
const intervalSubjectSubscription = observer$.subscribe(subject$);

// const subscription1 = subject$.subscribe(observer);
// const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  /**
   * el subject también se puede usar como un observer y se puede completar, pero el interval dentro del observer padre no se ha limpiado y se necesita desusbscribirse del observer padre
  */
  subject$.complete();
  // Se desubscribe el observer padre para limpiar el interval para que no haya fugas de memoria.
  intervalSubjectSubscription.unsubscribe();
}, 3500);