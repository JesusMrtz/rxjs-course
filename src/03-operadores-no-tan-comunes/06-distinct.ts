import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

/**
 * Es subscribe solo emitira los valores sin repetirlos gracias al "disctinct"
 */
// const numbers$ = of(1, 1, 2, 4,2, 3, 1, 5, 6, 1, 3).pipe(
//   distinct()
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


/** El subscribe solo emitirá los valores sin repetir la propiedad 'name' del objeto */
from(names).pipe(
  distinct( ( { name } ) => name )
)
.subscribe(console.log);