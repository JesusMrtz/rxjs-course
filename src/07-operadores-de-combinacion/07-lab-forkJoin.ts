import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';



const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER    = 'klerith';

/**
 * La función 'forkJoin' hace las peticiones de manera simultanea y cuando las tres finalicen, se envia la emisión al subscribe.
 * Si una petición falla, todo el forkJoin va a fallar, es necesario poner utilizar el operador 'catchError'
 */
forkJoin({
    usuario: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }`
    ),
    repos: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/repos`
    ).pipe(
        catchError( err => of([]) )
    ),
    gists: ajax.getJSON(
        `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
    )
}).pipe(
    catchError( err => of(err) )
)
.subscribe( console.log );





