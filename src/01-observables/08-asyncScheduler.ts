import { asyncScheduler, last } from 'rxjs';

 const sayHello = () => console.log('Hola Mundo');
 const sayHello2 = (name: string) => console.log(`Hola mi nombre es ${name} `);
 const sayHello3 = (name: string, lastName: string, age?: number) => console.log(`Hola mi nombre es ${name} ${lastName} - ${age}`);

 /** Usando el asyncScheduler como setTimeOut */

 // LLamamos la función sayHello y se ejecutará en 2 segundos
//  asyncScheduler.schedule(sayHello, 2000);

// Llamamos la función sayHello2 pasandolé el parametro name como "Jesús" y se ejecutará en 2 segundos
// asyncScheduler.schedule(sayHello2, 2000, 'Jesus' );

//Llamamos la función shayHello3 pasandolé más de un parametro de manera diferente y se ejecutará en 2 segundos
// asyncScheduler.schedule(sayHello3.bind(this, 'Jesus'), 2000, 'Oscar');
// asyncScheduler.schedule(sayHello3.bind(this, 'Jesús', 'Martinez'), 2000, 17);

/*** FIN de usar el asynScheduler como setTimeOut */


/** Usando el asyncScheduler como setInterVal */

// Creamos un asyncScheduler que se ejecutará cuando pase 3 segundos y se irá llamando de manera recursiva cada segundo
const subscription = asyncScheduler.schedule(function(state) {
  console.log('State: ', state);
  this.schedule(state + 1, 1000);
}, 3000, 0);

// Aqui nos desuscribimos del asycScheduler a los 6 segundos y no importan cuantas veces que haya llamado, este desuscribirá a todos antes llamado
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 6000);

// Aqui nos desuscribimos tambien el asyncScheduler a los 6 segundo, pero usando un asyncSheduler como setTimeOut
asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);

/*** FIN de usar el asyncScheduler como setInterval */