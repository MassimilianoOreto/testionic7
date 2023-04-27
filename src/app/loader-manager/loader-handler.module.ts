import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoaderManagerInterceptor} from "./loader-handler-interceptor";


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderManagerInterceptor,
      multi: true,
    },
  ],
})
export class LoaderHandlerModule {}
