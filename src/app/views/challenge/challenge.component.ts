import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengeDataService, CategoryStatusService} from "@services";
import {Observable, of} from "rxjs";
import {Word} from "@model";
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  private _category_id: string = '';
  private _level_id: string = '';
  variant_id: string = '';

  faArrowRightFromBracket = faArrowRightFromBracket;

  challengeData$!: Observable<Word[]>

  constructor(private _activatedRoute: ActivatedRoute,
              private _challengeDataService: ChallengeDataService,
              private _categoryStatusService: CategoryStatusService,
              private _router: Router,
  ) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const { category_id, level_id, variant_id } = params;
      this._category_id = category_id;
      this._level_id = level_id;
      this.variant_id = variant_id;
      this.challengeData$ = this._challengeDataService.getChallengeData(category_id, level_id);
    })
  }

  handleResult(resultValue: string) {
    const result = Number(resultValue);
    if (isNaN(result) || result < 0 || result > 100) {
      this.back();
      return;
    }
    this._categoryStatusService.submitChallengeResult(this._category_id, this._level_id, this.variant_id, result);
    this._router.navigate(['/main'])
  }

  back() {
    this._router.navigate(['..'])
  }
}
