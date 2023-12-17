import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


import { catchError, map, timeout } from 'rxjs/operators';
import { NoveltiesRepository } from '../domain/repository/novelties.repository';
import { Const } from './const';

@Injectable({
  providedIn: 'root',
})
// export class ParameterService implements ParameterRepository {
export class NoveltiesService implements NoveltiesRepository {

  constructor(private http: HttpClient) {}

  uploadFile(noveltiesId: string, archivo: any): Observable<any> {

    const paramFD: FormData = new FormData();
    paramFD.append('archivo', archivo);
    paramFD.append('noveltiesId', noveltiesId);

    const url = `${Const.API_FILES}/uploadImages`;

    const req = new HttpRequest('POST', url, paramFD, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

}
