import { from, reduce, scan } from 'rxjs';
import { map } from 'rxjs/operators';
const numbers: number[] = [1, 2, 3, 4, 5];

function cumulativeTotal(cumulativeTotal:  number, currentValue: number): number {
  return cumulativeTotal + currentValue;
}

/**
 * LA diferencia es que el reduce muestra el único valor del resultado cuando el observable se finaliza
 */
// from(numbers).pipe(
//   reduce(cumulativeTotal)
// ).subscribe(console.log);


/**
 * En cambio scan lo muestra cada vez que el observable envie una emisión
 */
// from(numbers).pipe(
//   scan(cumulativeTotal)
// ).subscribe(console.log);


/**
 * Estamos realizando una simulacioón del patrón REDUX utilizando el operador scan
 */

interface User {
  id?: string;
  authenticated?: boolean;
  token?: string;
  age?: number;
}

const user: User[] = [
  {
    id: '1',
    authenticated: false,
    token: null
  },
  {
    id: '2',
    authenticated: true,
    token: 'ABC'
  },
  {
    id: '3',
    authenticated: true,
    token: 'ABC12345'
  },
];


const state$ = from(user).pipe(
  scan<User, User>((acc, current) => {
    return {...acc, ...current}
  }, { age: 33 }),
  map((state) => state.id)
);


state$.subscribe(console.log);