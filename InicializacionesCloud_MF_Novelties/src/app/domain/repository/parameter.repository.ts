import { Observable } from "rxjs";

export abstract class ParameterRepository {
    abstract getListParameter(type: string): Observable<any>;
}

