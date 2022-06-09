import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, distinctUntilKeyChanged } from 'rxjs/operators';
import { GithubUsersResponse } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';



const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


function showUsers(users: GithubUser[]) {
  orderList.innerHTML = '';
  users.forEach(createElementUser);
}

function createElementUser(user: GithubUser) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const link = document.createElement('a');

  img.src = user.avatar_url;

  link.href = user.html_url;
  link.text = 'Ver página';
  link.target = '_blank';

  li.append(img);
  li.append(user.login + ' ');
  li.append(link);

  return orderList.append(li);
}

/**
 * Estamos aplanando todos los resultados de los observables para tener una sola via de los subscribe con el operador 'mergeAll' y después obtener únicamente los items con el operador 'map'
 * Con el operador 'distinctUntilKeyChanged' verificamos si los resultados obtenidos del JSON son diferentes al anterior, y si son iguales, no pintarlos
 */
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup').pipe(
  debounceTime(500),
  map((value) => (value.target as HTMLInputElement).value),
  map<string, Observable<GithubUsersResponse>>( (query) => ajax.getJSON(`https://api.github.com/search/users?q=${query}`) ),
  mergeAll(),
  distinctUntilKeyChanged('items', (x, y) => JSON.stringify(x) === JSON.stringify(y)),
  map((value) => value.items)
);

input$.subscribe( showUsers )