import { of } from 'rxjs';
import { ajax, AjaxError  } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';


const url: string = 'https://api.github.cXXXom/users?per_page=5';

/**
 * Se consume una URL se obtiene únicamente la propiedad 'response' de la respuesta con el operador 'pluck' y si hay un error en la petición se envia un nuevo observable de array vacio con el operador 'catchError'
 */
ajax(url).pipe(
  pluck('response'),
  catchError((error: AjaxError) => {
    console.warn('Error en: ', error);
    return of([]);
  })
).subscribe(console.log);