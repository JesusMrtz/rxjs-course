import { range } from "rxjs";

/**
 * El primer parámetro es desde que número quieres iniciar y el segundo es saber cuantas emisiones quieres
 */
const observableRange$ = range(-5, 10);

console.log('Inicio del Rage');
observableRange$.subscribe(console.log);
console.log('Fin del range');