import { endWith, of, startWith } from 'rxjs';

/**
 * lo que se visualizará en el subscribe es
 * startWith      Observable  endWith
 * 'a', 'b', 'c', 1, 2, 3, 'x', 'y', 'z'
 */
const number$ = of(1, 2, 3).pipe(
  startWith('a', 'b', 'c'),
  endWith('x', 'y', 'z')
);

number$.subscribe(console.log)