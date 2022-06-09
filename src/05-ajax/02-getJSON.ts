import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

/**
 * Se consume la URL con el observable 'ajax' y con el método 'getJSOn' enviar los headers necesarios para que funcione el consumo de la URL
 */
const ajax$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'mi-token': 'abc1234'
});

ajax$.subscribe(({
  next: (data) => console.log('Data: ', data)
}));