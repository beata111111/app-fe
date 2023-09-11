import {Injectable} from "@angular/core";
import {iif, mergeMap, Observable, of, tap} from "rxjs";
import {QueueIndexDbService} from "./queue.indexDb.service";
import {UserQueuedWord} from "@model";
import {QueueHttpService} from "@services";

@Injectable({ providedIn: 'root' })
export class QueueService {

  constructor(
    private _queueIndexDbService: QueueIndexDbService,
    private _queueHttpService: QueueHttpService,
  ) {
  }

  getState(): Observable<UserQueuedWord[]> {
    return this.getLocalData().pipe(
      mergeMap(v => iif(() => !!v.length, of(v), this._loadData()))
    );
  }

  getLocalData(): Observable<UserQueuedWord[]> {
    return this._queueIndexDbService.getQueue();
  }

  setLocalData(queue: UserQueuedWord[]): void {
    this._queueIndexDbService.setQueue(queue);
  }

  updateLocalData(queueUpdate: UserQueuedWord): Observable<UserQueuedWord> {
    return this._queueIndexDbService.updateQueue(queueUpdate);
  }


  updateLocalDataBulk(queueStateUpdate: UserQueuedWord[]): Observable<unknown> {
    return this._queueIndexDbService.updateQueueBulk(queueStateUpdate);
  }

  private _loadData(): Observable<UserQueuedWord[]> {
    return this._loadQueue().pipe(
      tap(queue => {
        this.setLocalData(queue)
      })
    );
  }

  private _loadQueue(): Observable<UserQueuedWord[]> {
    return this._queueHttpService.getQueue();
  }

}
