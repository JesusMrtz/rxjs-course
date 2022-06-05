import { Observable, Observer } from 'rxjs';

// Creando un observer y enviarlo a la subscripción
const observer: Observer<number> = {
  next: (value) => console.log('Next: ', value),
  error: (error) => console.warn('Error: ', error),
  complete: () => console.info('Se ha completado la subscripción correctamente')
}


const interval$ = new Observable<number>(subscriber => {
  let counter = 1;
  
  /**
   * Guardamos el interval en una variable para que después de llamar la desuscripción, este finialice y evite fugas de memoria.
   */
  const interval = setInterval(() => {
    subscriber.next(counter++),
    console.log(counter);
  }, 1000);

  /** 
   * Si hay un complete, ya no es necesario la desubscripción y la limpieza del setInterval
   */
  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  /**
   * Aquí limpiamos los intervalos para evitar fugas de memoria, porque si no se limpia a pesar de que se desubscriba la subscripción, seguirá funcionando el setInterval
   */
    return () => {
      clearInterval(interval);
      console.log('Intervalo destruido');
    };
});


const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

/**
 * Aquí concatenamos las desubscripciones para llamar a un solo unsubscribe()
 */
subscription1.add(subscription2.add(subscription3));


setTimeout(() => {
  //subscription1 .unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log('Completado TimeOut')
}, 6000);