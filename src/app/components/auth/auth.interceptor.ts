import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"; 
import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { UserAuth } from "../../services/user-auth";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private userauth : UserAuth,
        private router : Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        const token = this.userauth.getToken(); 
        req = this.addToken(req, token);
        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    if(err.status === 401) {
                        this.router.navigate(['/login']);
                    } else if(err.status === 403) {
                        this.router.navigate(['/forbidden']);
                    }
                    return throwError(err);
                }  
            )   
        )
    }

    private addToken(requsert: HttpRequest<any>, token: string) {
        return requsert.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    
}