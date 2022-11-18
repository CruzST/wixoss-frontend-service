import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorMessageServiceService {

  message = new Subject<string>();
  status = new Subject<number>();


  setMessage(message: string): void {
    this.message.next(message);
  }

  setStatus(status: number): void {
    this.status.next(status)
  }
}
