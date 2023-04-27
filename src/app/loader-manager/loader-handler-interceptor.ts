import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,

} from '@angular/common/http';
import {

  finalize,

  Observable,

} from 'rxjs';
import {  LoadingController } from '@ionic/angular';


@Injectable()
export class LoaderManagerInterceptor implements HttpInterceptor {
  loading = this.loadingController.create({
    spinner: 'circles',
  });
  constructor(private loadingController: LoadingController) {}

  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.startLoading()
    return next.handle(httpRequest).pipe(
      finalize(async () => {
       await this.stopLoading()
      })
    );
  }

  async startLoading() {
    const loader = await this.loading;
    await loader.present()
  }

  async stopLoading() {
    const loader = await this.loading;
    await loader.dismiss()
  }
}
