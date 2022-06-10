import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs';
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';


const body = document.querySelector('body');

/**
 * Mostrar un loading para esperar a que finalice la carga del http.. este se remueve
 */
ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
  startWith(true)
)
.subscribe(
  {
    next: (response) => {
      (response === true) ? body.append(loadingDiv) : body.querySelector('.loading').remove();
    }
  }
)