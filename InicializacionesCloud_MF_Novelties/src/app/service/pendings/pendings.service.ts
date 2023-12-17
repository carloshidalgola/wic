import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pending } from 'src/app/model/pending';
import { micros_uri } from 'src/app/util/contantes.micros';

@Injectable({
  providedIn: 'root'
})

export class PendingsService {

  private pendings = new BehaviorSubject<Pending | null>(null);
  pendings$ = this.pendings.asObservable();

  @Output() Pendiente: EventEmitter<any> = new EventEmitter();
  constructor(public http: HttpClient) { }
  getPendings(){
    const apiUrl = environment.url_microservice_novelties+'/novelties/novelties/pending'
    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJYVDgwNTIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTk2MTcxODgxLCJhdXRob3JpdGllcyI6WyJBTEwiXSwianRpIjoiYzJmYmY4OGQtMjk1Mi00YTMzLThjNzUtYjEwZGM5M2NjNzU0IiwidXNlcmluZm8iOnsidXNlcm5hbWUiOiJYVDgwNTIiLCJuYW1lIjoiRmFiaWFuIEphcmFtaWxsbywgU2FtbWlyIiwidGl0bGUiOm51bGwsImRlcGFydG1lbnQiOm51bGwsImRpdmlzaW9uIjpudWxsLCJkZWxpdmVyeU9mZmljZU5hbWUiOm51bGwsIm1vYmlsZSI6bnVsbCwiZW1haWwiOiJzZmFiaWFuakByZWRlYmFuLmNvbS5jbyIsImdyb3VwcyI6WyJSRURFQkFOX0RFVl9JTklDSUFMSVpBQ0lPTkVTX1dFQiJdLCJzdXBlcnZpc29yIjpudWxsLCJzdXBlcnZpc29yVXNlck5hbWUiOm51bGwsImFwcGxpY2F0aW9uT3JpZ2luIjoic3BhIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFMTCJ9XX0sImNsaWVudF9pZCI6InNwYSJ9.c0PLudB4oIBTsHZQCWgcNrzw-FOBtzpWsanraOVwhq0'
    return this.http.get<any[]>(apiUrl
      , {
      headers:{
        Authorization: Token
      }
    }
    );
  }
  getOtherNoveltiesPendings(){
    const apiUrl = environment.url_microservice_novelties + micros_uri.uri_other_novelties_pendings
    const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJYVDgwNTIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTk2MTcxODgxLCJhdXRob3JpdGllcyI6WyJBTEwiXSwianRpIjoiYzJmYmY4OGQtMjk1Mi00YTMzLThjNzUtYjEwZGM5M2NjNzU0IiwidXNlcmluZm8iOnsidXNlcm5hbWUiOiJYVDgwNTIiLCJuYW1lIjoiRmFiaWFuIEphcmFtaWxsbywgU2FtbWlyIiwidGl0bGUiOm51bGwsImRlcGFydG1lbnQiOm51bGwsImRpdmlzaW9uIjpudWxsLCJkZWxpdmVyeU9mZmljZU5hbWUiOm51bGwsIm1vYmlsZSI6bnVsbCwiZW1haWwiOiJzZmFiaWFuakByZWRlYmFuLmNvbS5jbyIsImdyb3VwcyI6WyJSRURFQkFOX0RFVl9JTklDSUFMSVpBQ0lPTkVTX1dFQiJdLCJzdXBlcnZpc29yIjpudWxsLCJzdXBlcnZpc29yVXNlck5hbWUiOm51bGwsImFwcGxpY2F0aW9uT3JpZ2luIjoic3BhIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFMTCJ9XX0sImNsaWVudF9pZCI6InNwYSJ9.c0PLudB4oIBTsHZQCWgcNrzw-FOBtzpWsanraOVwhq0'
    return this.http.get<any[]>(apiUrl
      , {
      headers:{
        Authorization: Token
      }
    }
    );
  }
}




