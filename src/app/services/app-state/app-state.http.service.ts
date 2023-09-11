import {Injectable} from '@angular/core';
import {User, UserQueuedWord, UserWordsBundle} from "@model";
import {BehaviorSubject, exhaustMap, Observable, Subject, withLatestFrom} from "rxjs";
import {AppHttpService} from "@services-tech";

@Injectable({ providedIn: 'root'})
export class AppStateHttpService {

  private _userUpdate = new Subject<User>();
  private _queueUpdates = new BehaviorSubject<UserQueuedWord[]>([]);
  private _userWordsUpdates = new BehaviorSubject<UserWordsBundle[]>([]);

  constructor(private _appHttpService: AppHttpService) {
    this._userUpdate.pipe(
      withLatestFrom(this._queueUpdates, this._userWordsUpdates),
      exhaustMap(([userUpdate, queueUpdates, userWordsUpdates]) => {
        this._queueUpdates.next([]);
        this._userWordsUpdates.next([]);
        const data = this._squashData(userUpdate, queueUpdates, userWordsUpdates);
        return this._saveData(data);
      })
    ).subscribe();
  }

  saveAppState(userUpdate: User, queueUpdate?: UserQueuedWord[], userWordsUpdate?: UserWordsBundle): void {
    if (queueUpdate) {
      this._queueUpdates.next([...this._queueUpdates.value, ...queueUpdate]);
    }
    if (userWordsUpdate) {
      this._userWordsUpdates.next([...this._userWordsUpdates.value, userWordsUpdate]);
    }
    this._userUpdate.next(userUpdate);
  }

  _saveData(data: {userUpdate: User, queueUpdates: UserQueuedWord[], userWordsUpdates: UserWordsBundle[]}): Observable<any> {
    const url = '/api/save-state';
    return this._appHttpService.makePOSTRequest<any>(url, data);
  }

  _squashData(userUpdate: User, queues: UserQueuedWord[], bundles: UserWordsBundle[]) {
    const queueUpdates: UserQueuedWord[] = [];
    queues.reverse().forEach(queue => {
      const existing = queueUpdates.find(q => q.wordId === queue.wordId)
      if (!existing) queueUpdates.push(queue);
    });

    const userWordsUpdates: UserWordsBundle[] = [];
    bundles.reverse().forEach(bundle => {
      const existing = userWordsUpdates.find(b => b.categoryId === bundle.categoryId && b.level === bundle.level)
      if (!existing) userWordsUpdates.push(bundle);
    });

    return {
      userUpdate,
      queueUpdates,
      userWordsUpdates
    }
  };
}
