import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MockInterceptor } from './mock.interceptor';

@NgModule({})
export class DelonMockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonMockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: DelonMockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
    };
  }
}
