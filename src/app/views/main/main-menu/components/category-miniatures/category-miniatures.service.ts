import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import * as solid from "@fortawesome/free-solid-svg-icons";

@Injectable({ providedIn: 'root' })
export class CategoryMiniaturesService {

  a =
    ["natu",
      "tour",
      "anim",
      "home",
      "tran",
      "foo2",
      "fash"]


  public minifiedCategories$ = new BehaviorSubject<string[]>([...this.a]);

  public add(category_id: string): void {
    const minifiedCategories = this.minifiedCategories$.value;
    const set = new Set([...minifiedCategories, category_id]);
    this.minifiedCategories$.next([...set]);
  }

  public remove(category_id: string): void {
    const minifiedCategories = this.minifiedCategories$.value;
    const filtered = minifiedCategories.filter(c => c !== category_id);
    this.minifiedCategories$.next(filtered);
  }
}
