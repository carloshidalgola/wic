import { Observable } from "rxjs";

export abstract class FileRepository {
    abstract downloadTemplate(nameFile:string): Observable<any>;
    abstract unificarImagen(codeNovelty:string): Observable<any>;
}

