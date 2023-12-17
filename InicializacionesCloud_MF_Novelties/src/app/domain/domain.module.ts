import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ParameterRepository } from './repository/parameter.repository';
import { ParameterService } from 'src/app/service/parameter.service';
import { NoveltiesRepository } from './repository/novelties.repository';
import { NoveltiesService } from '../service/novelties.service';
import { FileRepository } from './repository/file.repository';
import { FileService } from '../service/file.service';

const DATA_SERVICES = [
  // {
  //   provide: AuthenticationRepository,
  //   useClass: AuthenticationService,
  // },
  { provide: ParameterRepository, useClass: ParameterService },
  { provide: NoveltiesRepository, useClass: NoveltiesService },
  { provide: FileRepository, useClass: FileService },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DomainModule {
  constructor(@Optional() @SkipSelf() parentModule: DomainModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DomainModule,
      providers: [...DATA_SERVICES],
    } as ModuleWithProviders<any>;
  }
}
