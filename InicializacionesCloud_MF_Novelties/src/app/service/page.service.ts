import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PageService {

  private headerTittle = new BehaviorSubject<String | null>(null);
  headerTittle$ = this.headerTittle.asObservable();

  constructor() { }

  setHeaderTittle(tittle: String) {
    this.headerTittle.next(tittle);
  }
}
