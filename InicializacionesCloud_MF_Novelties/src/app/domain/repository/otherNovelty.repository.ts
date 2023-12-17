import { Observable } from "rxjs";
import { OtherNoveltyModel } from "src/app/model/otherNovelty";

export abstract class OtherNoveltyRepository {
    
    abstract updateStatusOtherNovelty(noveltiesId: string, status: string): Observable<any>;

    abstract saveOtherNoveltie(request?:OtherNoveltyModel): Observable<any>;

}

