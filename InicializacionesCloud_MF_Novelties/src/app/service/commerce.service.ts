import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Const } from './const';

/* Models */
import { Commerce } from 'src/app/model/commerce';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  apiUrl: string = '/commerce';

  constructor(
    private http: HttpClient,
  ) { }

  private commerceData = new BehaviorSubject<Commerce | null>(null);
  commerceData$ = this.commerceData.asObservable();

  getCommerceData(codeType: string, codeId: string) {
    const apiUrl = Const.API_COMMERCE +`${codeType}/${codeId}`;
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJYVDgwNTIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTk2MTcxODgxLCJhdXRob3JpdGllcyI6WyJBTEwiXSwianRpIjoiYzJmYmY4OGQtMjk1Mi00YTMzLThjNzUtYjEwZGM5M2NjNzU0IiwidXNlcmluZm8iOnsidXNlcm5hbWUiOiJYVDgwNTIiLCJuYW1lIjoiRmFiaWFuIEphcmFtaWxsbywgU2FtbWlyIiwidGl0bGUiOm51bGwsImRlcGFydG1lbnQiOm51bGwsImRpdmlzaW9uIjpudWxsLCJkZWxpdmVyeU9mZmljZU5hbWUiOm51bGwsIm1vYmlsZSI6bnVsbCwiZW1haWwiOiJzZmFiaWFuakByZWRlYmFuLmNvbS5jbyIsImdyb3VwcyI6WyJSRURFQkFOX0RFVl9JTklDSUFMSVpBQ0lPTkVTX1dFQiJdLCJzdXBlcnZpc29yIjpudWxsLCJzdXBlcnZpc29yVXNlck5hbWUiOm51bGwsImFwcGxpY2F0aW9uT3JpZ2luIjoic3BhIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFMTCJ9XX0sImNsaWVudF9pZCI6InNwYSJ9.c0PLudB4oIBTsHZQCWgcNrzw-FOBtzpWsanraOVwhq0"

    return this.http.get(apiUrl, {
      headers: {
        Authorization: token,
      }
    })
    .pipe(
      tap((res: any) => {
        this.commerceData.next(res);
      }),
      catchError(() => {
        return of({});
      })
    );
  }

  getDataCommerceOtherNovelty(codeId: string) {
    const apiUrl = Const.API_COMMERCE +`${codeId}`;
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJYVDgwNTIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTk2MTcxODgxLCJhdXRob3JpdGllcyI6WyJBTEwiXSwianRpIjoiYzJmYmY4OGQtMjk1Mi00YTMzLThjNzUtYjEwZGM5M2NjNzU0IiwidXNlcmluZm8iOnsidXNlcm5hbWUiOiJYVDgwNTIiLCJuYW1lIjoiRmFiaWFuIEphcmFtaWxsbywgU2FtbWlyIiwidGl0bGUiOm51bGwsImRlcGFydG1lbnQiOm51bGwsImRpdmlzaW9uIjpudWxsLCJkZWxpdmVyeU9mZmljZU5hbWUiOm51bGwsIm1vYmlsZSI6bnVsbCwiZW1haWwiOiJzZmFiaWFuakByZWRlYmFuLmNvbS5jbyIsImdyb3VwcyI6WyJSRURFQkFOX0RFVl9JTklDSUFMSVpBQ0lPTkVTX1dFQiJdLCJzdXBlcnZpc29yIjpudWxsLCJzdXBlcnZpc29yVXNlck5hbWUiOm51bGwsImFwcGxpY2F0aW9uT3JpZ2luIjoic3BhIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFMTCJ9XX0sImNsaWVudF9pZCI6InNwYSJ9.c0PLudB4oIBTsHZQCWgcNrzw-FOBtzpWsanraOVwhq0"

    return this.http.get(apiUrl, {
      headers: {
        Authorization: token,
      }
    })
    .pipe(
      tap((res: any) => {
        this.commerceData.next(res);
      }),
      catchError(() => {
        return of({});
      })
    );
  }

  getDataCommerceByCode(codeId: string) {
    const apiUrl = Const.API_COMMERCE +`findByCode/${codeId}`;
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJYVDgwNTIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNTk2MTcxODgxLCJhdXRob3JpdGllcyI6WyJBTEwiXSwianRpIjoiYzJmYmY4OGQtMjk1Mi00YTMzLThjNzUtYjEwZGM5M2NjNzU0IiwidXNlcmluZm8iOnsidXNlcm5hbWUiOiJYVDgwNTIiLCJuYW1lIjoiRmFiaWFuIEphcmFtaWxsbywgU2FtbWlyIiwidGl0bGUiOm51bGwsImRlcGFydG1lbnQiOm51bGwsImRpdmlzaW9uIjpudWxsLCJkZWxpdmVyeU9mZmljZU5hbWUiOm51bGwsIm1vYmlsZSI6bnVsbCwiZW1haWwiOiJzZmFiaWFuakByZWRlYmFuLmNvbS5jbyIsImdyb3VwcyI6WyJSRURFQkFOX0RFVl9JTklDSUFMSVpBQ0lPTkVTX1dFQiJdLCJzdXBlcnZpc29yIjpudWxsLCJzdXBlcnZpc29yVXNlck5hbWUiOm51bGwsImFwcGxpY2F0aW9uT3JpZ2luIjoic3BhIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkFMTCJ9XX0sImNsaWVudF9pZCI6InNwYSJ9.c0PLudB4oIBTsHZQCWgcNrzw-FOBtzpWsanraOVwhq0"

    return this.http.get(apiUrl, {
      headers: {
        Authorization: token,
      }
    })
    .pipe(
      tap((res: any) => {
        this.commerceData.next(res);
      }),
      catchError(() => {
        return of({});
      })
    );
  }
}
