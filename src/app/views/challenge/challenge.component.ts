import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengeDataService} from "../../services/challenge-data/challenge-data.service";
import {Observable, of} from "rxjs";
import {Word} from "@model";
import {CategoryStatusService} from "../../services/category-status/category-status.service";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  private _category: string = '';
  private _level: string = '';
  private _variant: string = '';

  challengeData$: Observable<Word[]> = of([]);

  constructor(private _activatedRoute: ActivatedRoute,
              private _challengeDataService: ChallengeDataService,
              private _categoryStatusService: CategoryStatusService,
              private _router: Router,
  ) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const { category, level, variant } = params;
      this._category = category;
      this._level = level;
      this._variant = variant;
      this.challengeData$ = this._challengeDataService.getChallengeData(category, level);
    })
  }

  handleResult(resultValue: string) {
    const result = Number(resultValue);
    this._categoryStatusService.submitChallengeResult(this._category, this._level, this._variant, result);
    this._router.navigate(['/main'])
  }
}
