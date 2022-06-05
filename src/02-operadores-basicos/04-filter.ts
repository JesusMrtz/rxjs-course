import { filter, range, from, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

interface Character {
  type: string;
  name: string;
}

const heroes: Character[] = [
  {
    type: 'Hero',
    name: 'Batman'
  },
  {
    type: 'Hero',
    name: 'Spiderman'
  },
  {
    type: 'Hero',
    name: 'Darevil'
  },
  {
    type: 'Villian',
    name: 'Joker'
  },
  {
    type: 'Villian',
    name: 'Dr. Octopus'
  }
];

// Creamos un observable con "range" y filtramos únicamente los valores impares con el operador "filter"
// const observableRange$ = range(1, 10).pipe(
//   filter((value) => value % 2 === 1)
// );


// Creamos un observable con "range" y filtramos únicamente los valores imporares con el operador "filter" y también imprimimos el index
// const observableRange$ = range(20, 10).pipe(
//   filter((value, index) => {
//     // console.log('Index: ', index);
//     return value % 2 === 1
//   })
// );

// observableRange$.subscribe(console.log);

// Creamos un observable con from dejando un arreglo de Heroes y filtrando todos los vilanes
// const observableOfVillians$ = from(heroes).pipe(
//   filter((value) => value.type === 'Villian')
// );

// observableOfVillians$.subscribe(console.log);


// Creamos un observable cuando se presiona una tecla en el document, obtenemos únicamente la propiedad "code" con el operador "pluck()" y solo emitimos el valor si se presiona la tecla "enter"
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  pluck('code'),
  filter((value) => value === 'Enter')
);

keyUp$.subscribe(console.log);