import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { micros_uri } from "../util/contantes.micros";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  isEnabledToSearch(): any {
    let url = environment.url_microservice_novelties + micros_uri.uri_novelties + "/is-enabled-to-search";
    //TODO: This token will be get from current user
    const headers = {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJYVDgwNTIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTk2MTcxODgxLCJhdXRob3JpdGllcyI6WyJBTEwiXSwianRpIjoiYzJmYmY4OGQtMjk1Mi00YTMzLThjNzUtYjEwZGM5M2NjNzU0IiwidXNlcmluZm8iOnsidXNlcm5hbWUiOiJYVDgwNTIiLCJuYW1lIjoiRmFiaWFuIEphcmFtaWxsbywgU2FtbWlyIiwidGl0bGUiOm51bGwsImRlcGFydG1lbnQiOm51bGwsImRpdmlzaW9uIjpudWxsLCJkZWxpdmVyeU9mZmljZU5hbWUiOm51bGwsIm1vYmlsZSI6bnVsbCwiZW1haWwiOiJzZmFiaWFuakByZWRlYmFuLmNvbS5jbyIsImdyb3VwcyI6WyJSRURFQkFOX0RFVl9JTklDSUFMSVpBQ0lPTkVTX1dFQiJdLCJzdXBlcnZpc29yIjpudWxsLCJzdXBlcnZpc29yVXNlck5hbWUiOm51bGwsImFwcGxpY2F0aW9uT3JpZ2luIjoic3BhIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFMTCJ9XX0sImNsaWVudF9pZCI6InNwYSJ9.c0PLudB4oIBTsHZQCWgcNrzw-FOBtzpWsanraOVwhq0'
    }
    return this.http.get(url, {headers: headers})
  }
  isEnabledToSearchOtherNovelties(): any {
    let url = environment.url_microservice_novelties + micros_uri.uri_other_novelties_enabled_search;
    //TODO: This token will be get from current user
    const headers = {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJYVDgwNTIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTk2MTcxODgxLCJhdXRob3JpdGllcyI6WyJBTEwiXSwianRpIjoiYzJmYmY4OGQtMjk1Mi00YTMzLThjNzUtYjEwZGM5M2NjNzU0IiwidXNlcmluZm8iOnsidXNlcm5hbWUiOiJYVDgwNTIiLCJuYW1lIjoiRmFiaWFuIEphcmFtaWxsbywgU2FtbWlyIiwidGl0bGUiOm51bGwsImRlcGFydG1lbnQiOm51bGwsImRpdmlzaW9uIjpudWxsLCJkZWxpdmVyeU9mZmljZU5hbWUiOm51bGwsIm1vYmlsZSI6bnVsbCwiZW1haWwiOiJzZmFiaWFuakByZWRlYmFuLmNvbS5jbyIsImdyb3VwcyI6WyJSRURFQkFOX0RFVl9JTklDSUFMSVpBQ0lPTkVTX1dFQiJdLCJzdXBlcnZpc29yIjpudWxsLCJzdXBlcnZpc29yVXNlck5hbWUiOm51bGwsImFwcGxpY2F0aW9uT3JpZ2luIjoic3BhIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFMTCJ9XX0sImNsaWVudF9pZCI6InNwYSJ9.c0PLudB4oIBTsHZQCWgcNrzw-FOBtzpWsanraOVwhq0'
    }
    return this.http.get(url, {headers: headers})
  }
}
