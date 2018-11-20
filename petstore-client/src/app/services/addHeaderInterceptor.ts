import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Rx";

export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user: any = JSON.parse(localStorage.getItem('user'));
    if(user){
      req = req.clone({ headers: req.headers.set('Authorization', 'Basic ' + user.authToken) });
    }

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(req);
  }
}
