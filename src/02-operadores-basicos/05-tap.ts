import { range, tap } from 'rxjs';

// Se usa tap para depurar la información del observable, su return no afecta los valores
const numbers$ = range(1, 5).pipe(
  tap((value) => console.log('Antes: ', value))
);

numbers$.subscribe((value) => console.log('Subscribe: ', value));