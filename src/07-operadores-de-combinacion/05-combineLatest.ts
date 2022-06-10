import { fromEvent, combineLatest, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

// const keyup$ = fromEvent( document, 'keyup');
// const click$ = fromEvent( document, 'click');

// combineLatest( 
//     keyup$.pipe( pluck('type') ), 
//     click$.pipe( pluck('type') )
// ).subscribe( console.log );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*********';
input2.type = 'password'

document.querySelector('body').append(input1, input2);


// Helper
const getInputStream = ( elem: HTMLElement ) => fromEvent( elem, 'keyup' ).pipe( pluck('target','value') );

/***
 * Combino dos observables con el input y hasta que los dos emita al menos el valor... se obtiene en el subscribe los últimos valores agregados
 */
combineLatest([
  getInputStream( input1 ), 
  getInputStream( input2 ),
]).subscribe( console.log )
