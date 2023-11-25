import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { CategoryStatus, localStorageKey } from "@model";

@Injectable({ providedIn: 'root' })
export class CategoryMiniaturesService {
  private _allCategories$ = new BehaviorSubject<CategoryStatus[]>([]);



  constructor() {
    const minifiedIds = localStorage.getItem(localStorageKey.MINIFIED_CATEGORIES);
    if (minifiedIds) {
      this.minifiedCategoriesIds$.next(JSON.parse(minifiedIds));
    }

    const notMinifiedIds = localStorage.getItem(localStorageKey.NOT_MINIFIED_CATEGORIES);
    if (notMinifiedIds) {
      this.notMinifiedCategoriesIds$.next(JSON.parse(notMinifiedIds));
    }
  }

  public notMinifiedCategoriesIds$ = new BehaviorSubject<string[]>([]);
  public notMinifiedCategories$: Observable<CategoryStatus[]>
    = combineLatest([this._allCategories$, this.notMinifiedCategoriesIds$]).pipe(
      map(([allCategories, notMinifiedIds]) => {
        return notMinifiedIds.map(id => {
          return allCategories.find(c => c.category_id === id) as CategoryStatus;
        })
      })
  );

  public minifiedCategoriesIds$ = new BehaviorSubject<string[]>([]);
  public minifiedCategories$: Observable<CategoryStatus[]>
    = combineLatest([this._allCategories$, this.minifiedCategoriesIds$]).pipe(
      map(([allCategories, minifiedIds]) => {
        return minifiedIds.map(id => {
          return allCategories.find(c => c.category_id === id)  as CategoryStatus;
        })
     })
  );

  public canMinimize$ = combineLatest([this._allCategories$, this.minifiedCategoriesIds$])
    .pipe(map(([allCategories, minifiedCategoriesIds]) => {
      return allCategories.length !== minifiedCategoriesIds.length + 1;
    }))


  public add(category_id: string): void {
    this._addToSet(this.minifiedCategoriesIds$, category_id, localStorageKey.MINIFIED_CATEGORIES);
    this._removeFromSet(this.notMinifiedCategoriesIds$, category_id, localStorageKey.NOT_MINIFIED_CATEGORIES);
  }

  public remove(category_id: string): void {
    this._removeFromSet(this.minifiedCategoriesIds$, category_id, localStorageKey.MINIFIED_CATEGORIES);
    this._addToSet(this.notMinifiedCategoriesIds$, category_id, localStorageKey.NOT_MINIFIED_CATEGORIES);
  }

  private _addToSet(subject: any, item: any, key: localStorageKey): void {
    const value = subject.value;
    const newValue = [...new Set([...value, item])];
    subject.next(newValue);
    localStorage.setItem(localStorageKey[key], JSON.stringify(newValue));
  }

  private _removeFromSet(subject: any, item: any, key: localStorageKey): void {
    const value = subject.value;
    const newValue = value.filter((c: any) => c !== item);
    subject.next(newValue);
    localStorage.setItem(localStorageKey[key], JSON.stringify(newValue));
  }

  public setCategories(categories: CategoryStatus[]): void {
    this._allCategories$.next(categories);

    if (!this.notMinifiedCategoriesIds$.value.length) {
      const [first, ...others] = categories;
      this.notMinifiedCategoriesIds$.next([first].map(c => c.category_id));
      this.minifiedCategoriesIds$.next(others.map(c => c.category_id));
    }
  }
}
