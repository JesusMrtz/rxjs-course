import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

interface Names {
  name: string;
}

const names: Names[] = [
  {
    name: 'Jesus'
  },
  {
    name: 'Miguel'
  },
  {
    name: 'Jesus'
  },
  {
    name: 'Karely'
  },
  {
    name: 'Karely'
  },
  {
    name: 'Miguel'
  },
]


from(names).pipe(
  distinctUntilKeyChanged('name')
)
.subscribe(console.log);