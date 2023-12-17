import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { OtherNoveltyRepository } from '../domain/repository/otherNovelty.repository';
import { OtherNoveltyModel } from '../model/otherNovelty';
import { Const } from './const';

@Injectable({
  providedIn: 'root',
})

export class OtherNoveltyService implements OtherNoveltyRepository {

  constructor(private http: HttpClient) {}
  
  saveOtherNoveltie(request?:OtherNoveltyModel): Observable<any> {
    let body = request;
    console.log(body);
    const url = `${Const.API_NOVELTIES}/othernovelties/add`;
    return this.http.post<any>(url,body).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
    //throw new Error('Method not implemented.');
  }

  updateStatusOtherNovelty(noveltiesId: string, status: string): Observable<any> {
    const url = `${Const.API_NOVELTIES}/othernovelties/pending/${noveltiesId}/${status}`;
  
    return this.http.put<any[]>(url,{});
  }

}
