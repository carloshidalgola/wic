import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarParameters } from 'src/app/model/ComponentsModels/sidebarParameters';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarInitParams: SidebarParameters = {
    position: 'end',
    mode: 'over',
    disableClose: true,
  };

  private sidebarSwitch = new BehaviorSubject<boolean>(false);
  sidebarSwitch$ = this.sidebarSwitch.asObservable();

  private sidebarParams = new BehaviorSubject<SidebarParameters>(this.sidebarInitParams);
  sidebarParams$ = this.sidebarParams.asObservable();

  private sidebarContent = new BehaviorSubject<any>(null);
  sidebarContent$ = this.sidebarContent.asObservable();

  /* To Comunicate data between Sidebar and ChildComponent */
  private dataToSidebar = new BehaviorSubject<any>(null);
  dataToSidebar$ = this.dataToSidebar.asObservable();

  private dataToChildComponent = new BehaviorSubject<any>(null);
  dataToChildComponent$ = this.dataToChildComponent.asObservable();

  constructor() { }

  public openSidebar() {
    this.sidebarSwitch.next(true);
  }

  public closeSidebar() {
    this.sidebarSwitch.next(false);
  }

  public setSidebarParams(
    position: 'start'|'end' = 'end',
    mode: 'over'|'push'|'side' = 'over',
    disableClose: boolean = false,
  ) {
    const params: SidebarParameters = {
      position: position,
      mode: mode,
      disableClose: disableClose,
    };

    this.sidebarParams.next(params);
  }

  public setSidebarContent(component: any) {
    this.sidebarContent.next(component);
  }



  /* To Comunicate data between Sidebar and ChildComponent */
  public getDataToSidebar(data: any) {
    this.dataToSidebar.next(data);
  }
  
  public getDataToChild(data: any) {
    this.dataToChildComponent.next(data);
  }
}