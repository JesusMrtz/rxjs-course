import { Observable, Observer } from 'rxjs';

// Creando un observer y enviarlo a la subscripción
const observer: Observer<string> = {
  next: (value) => console.log('Siguiente [next]: ', value),
  error: (error) => console.error('Error [obs]: ', error),
  complete: () => console.info('Se ha completado la subscripción correctamente')
}

// Crear un observador
const observable$ = new Observable<string>(subscriber => {
  // Emitir el valor que enviará a sus subscriptores
  subscriber.next('Hola');
  subscriber.next('Mundo');
  subscriber.next('Soy');
  
  // Forzar el error
  //subscriber.error('Valío madres');

  // Aqui decimos que finalizamos de enviar información a los subscriptores y la demás información no aparecerá
  subscriber.complete();
  subscriber.next('Jesus');
  subscriber.next('Martínez');
});


/**
 * Así se subscribe a un observable, pero pasarle los parametros de next, error y complete de manera separa ya se encuentra deprecada, es mejor enviarle un observer
 */
// observable$.subscribe(
//   (value) => console.log('Next: ', value),
//   (error) => console.error('Error en el observable: ', error),
//   () => console.log('Se ha completado la subscripción correctamente')
// );

observable$.subscribe( observer );