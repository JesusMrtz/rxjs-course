import { fromEvent, pluck } from "rxjs";

// Crear un observable con el "fromEvent" y obtener un único valor con el pluck
const observableKeyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  pluck('target', 'baseURI')
);

// Visualizar el valor baseURI
observableKeyUp$.subscribe({
  next: (value) => console.log('pluck: ', value)
});