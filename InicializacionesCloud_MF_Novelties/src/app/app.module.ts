import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DomainModule } from './domain/domain.module';
import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app.routing.module';
import { Const } from './service/const';
import { CommonComponentsModule } from './views/common-components/common-components.module';
import { MaterialAngularModule } from './views/pages/material-angular.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfiguracionComponent
  ],
  imports: [
    DomainModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonComponentsModule,
    WebcamModule,
    MaterialAngularModule,
    RouterModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initCommonConfig,
    deps: [Const],
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initCommonConfig(c: Const) {
  return () => c.loadCommonConfig();
}
