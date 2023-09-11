import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this._addAuthToken(request));
  }

  private _addAuthToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const token = this.authService.getToken();

    return request.clone({
      setHeaders: {
        Authorization: `Basic ${token}`
      }
    })
  }
}
