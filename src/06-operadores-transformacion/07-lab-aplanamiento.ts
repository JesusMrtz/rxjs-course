import { fromEvent, of, tap, exhaustMap } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


/** Creando un formulario */
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const btnSubmit = document.createElement('button');


/** Configuraciones a los campos */
inputEmail.type = 'email';
inputEmail.placeholder = 'Write your email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

btnSubmit.innerHTML = `Ingresar`;

form.append(inputEmail, inputPassword, btnSubmit);

document.querySelector('body').append(form);

/** Helpers */
function requestPetitionHTTP(userPassword) {
  return ajax.post('https://reqres.in/api/login', userPassword).pipe(
    map(({ response }) => response['token']),
    catchError((error) => of('xx'))
  );
}

/** Observables */

/***
 * Aqui hicimos una pequeña prueba para ver las diferencias entre los operadores de aplanamiento, solo comente y descomente que operador desea ver en acción 'mergeMap', 'switchMap' 'exhaustMap'
 */
const submitForm$ = fromEvent<SubmitEvent>(form, 'submit').pipe(
  tap((event) => event.preventDefault()),
  map( (event) => ({
    email: event.target[0].value,
    password: event.target[1].value
  })),
  // mergeMap(requestPetitionHTTP)
  // switchMap(requestPetitionHTTP)
  exhaustMap(requestPetitionHTTP)
);

submitForm$.subscribe({
  next: (token) => console.log(token)
});