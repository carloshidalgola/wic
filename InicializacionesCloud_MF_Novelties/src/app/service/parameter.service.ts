import { Injectable, NgZone } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { catchError, map, timeout } from 'rxjs/operators';

import { ParameterConsultTypeModel, ParameterModel } from '../model/parameter';

import { ParameterRepository } from '../domain/repository/parameter.repository';
import { Const } from './const';

@Injectable({
  providedIn: 'root',
})
// export class ParameterService implements ParameterRepository {
export class ParameterService implements ParameterRepository {

  constructor(
    private _zone: NgZone,
  ) {}

  getServerSentEvent(url: string): Observable<any> {
    return Observable.create((observer: { next: (arg0: MessageEvent<any>) => void; error: (arg0: Event) => void; }) => {
      const eventSource = this.getEventSource(url);
      eventSource.onmessage = event => {
        this._zone.run(() => {
          observer.next(event);
        });
      };
      eventSource.onerror = error => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }

  private getEventSource(url: string): EventSource {
    return new EventSource(url);
  }

  getListParameter(type:String): Observable<any> {

    const url = Const.API_PARAMETERS + `types/${type}`;
    var parameterList = new Array();

    return Observable.create((observer: { next: (arg0: any) => void; error: (arg0: string) => any; }) => {
      const eventSource = new EventSource(`${url}`);
      eventSource.onmessage = (event) => {
        const json = JSON.parse(event.data);
        parameterList.push(new ParameterModel(
          json['code'],
          json['description'],
          json['textValue'],
          json['numberValue'],
          json['order'],
          json['parentId']
        ));

        observer.next(parameterList);
      };
      eventSource.onerror = (error) => {
        observer.error('eventSource.onerror:' + error)
      };
      return () => eventSource.close();
    });
  }
}
