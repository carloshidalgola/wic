import { Observable } from "rxjs";

export abstract class NoveltiesRepository {
    abstract uploadFile(noveltiesId: string, archivo: any): Observable<any>;
}

