import {Injectable} from "@angular/core";
import {Observable, Subject, tap} from "rxjs";
import {UserQueuedWord} from "@model";
import {QueueService} from "@services";
import {CurrentUserService} from "@auth";

@Injectable({ providedIn: 'root' })
export class QueueStateService {

  private _queueState$ = new Subject<UserQueuedWord[]>();
  queueState$ = this._queueState$.asObservable();

  constructor(
    private _queueService: QueueService,
    private _currentUser: CurrentUserService,
  ) {
    this._currentUser.currentUserId$.subscribe(_ => {
      this.getState();
    });
  }

  getState(): void {
    this._queueService.getState().subscribe((queue: UserQueuedWord[]) => {
      const sorted = queue.sort((a, b) => a.position - b.position);
      this._queueState$.next(sorted);
    })
  }

  updateState(queueStateUpdate: UserQueuedWord): Observable<UserQueuedWord> {
    return this._queueService.updateLocalData(queueStateUpdate).pipe(
      tap(() => {
        this.getState();
      })
    );
  }

  updateStateBulk(queueStateUpdate: UserQueuedWord[]): Observable<unknown> {
    return this._queueService.updateLocalDataBulk(queueStateUpdate).pipe(
      tap(() => {
        this.getState();
      })
    );
  }
}
