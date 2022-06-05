import { from, Observer } from 'rxjs';
const observer: Observer<Response> = {
  next: async (response) => {
    const data = await response.json();
    console.log(data);
  },
  error: () => null,
  complete: () => console.log('Complete')
}


// Convierte un array de número en un observable que muestra cada uno de los valores por separado
// const fromObservable$ = from([1, 2, 3, 4]);

// Convierte un string en un observable que muesta cada uno de los caracteres por separado
// const fromObservable$ = from('Jesús Martínez Torres');

// Convierte una petición fetch para después obtener la data
// const fromObservable$ = from<Promise<Response>>(fetch('https://api.github.com/users/klerith'));


// fromObservable$.subscribe(observer);


const myGenerator = function*() {
  yield 1;
  yield 2;
  yield 3; 
  yield 4;
  yield 5;
}

const myIterable = myGenerator();

from(myIterable).subscribe({
  next : (value) => console.log('Next: ', value)
});