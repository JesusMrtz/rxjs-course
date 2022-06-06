import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

/***
 * Emite valores siempre y cuando la emisión no sea la misma que la anterior.
 */
// const numbers$ = of(1, 1, 2, 4,2, 3, 1, 5, 6, 1, 3).pipe(
//   distinctUntilChanged()
// ).subscribe(console.log);

interface Names {
  name: string;
}

const names: Names[] = [
  {
    name: 'Jesus'
  },
  {
    name: 'Miguel'
  },
  {
    name: 'Jesus'
  },
  {
    name: 'Karely'
  },
  {
    name: 'Karely'
  },
  {
    name: 'Miguel'
  },
]

/**
 * Emite valores siempre y cuando la emisión  no sea la misma que la anterior.
 * En este caso que no sea la misma que la propiedad "name"
 */
from(names).pipe(
  distinctUntilChanged((anterior, actual) => anterior.name === actual.name)
)
.subscribe(console.log);