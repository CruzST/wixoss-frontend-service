import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { InterceptorMessageServiceService } from '../services/interceptor-message/interceptor-message-service.service';

@Injectable()
export class ErrorCatchingInterceptorInterceptor implements HttpInterceptor {

  constructor(private interceptorMsgService: InterceptorMessageServiceService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMsg: string;
                    if (error.error instanceof ErrorEvent) {
                        // Client Side Error
                        errorMsg = `Error: ${error.error.message}`;
                    } else {
                        // Server Side error
                        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                        
                    }
                    this.handleError(error);
                    console.error(error)
                    return throwError(() => error);
                })
            )
    }

    private handleError(error: HttpErrorResponse): boolean {
        let flag: boolean = false;
        if (error) {
            this.interceptorMsgService.setStatus(error.status);  
        }
        return flag;
    }
}

