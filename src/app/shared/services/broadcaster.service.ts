import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IBroadcastEvent } from '../interfaces/braodCasterInterface';

@Injectable({
  providedIn: 'root',
})
export class BroadcasterService {
  private eventBus: Subject<IBroadcastEvent>;
  public leaveStepper: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.eventBus = new Subject<IBroadcastEvent>();
  }

  public broadcast(key: string, data?: any): void {
    this.eventBus.next({ key, data });
  }

  public on<T>(key: string): Observable<T> {
    return this.eventBus
      .asObservable()
      .pipe(filter((event) => event.key === key))
      .pipe(map((event) => <T>event.data));
  }
}
