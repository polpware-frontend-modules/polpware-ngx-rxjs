import { Observable } from 'rxjs';

declare function toPromise<T>(item: Observable<T>): Promise<T>;

export { toPromise };
