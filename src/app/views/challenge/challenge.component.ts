import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengeDataService, CategoryStatusService, ChallengeLastResultService} from "@services";
import {Observable} from "rxjs";
import {ChallengeResult, Word} from "@model";
import {faArrowRightFromBracket, faBell, faBellSlash} from '@fortawesome/free-solid-svg-icons';
import {VoiceService} from "@core";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
  private _category_id: string = '';
  private _level_id: string = '';
  variant_id: string = '';

  faBell = faBell;
  faBellSlash = faBellSlash;
  faArrowRightFromBracket = faArrowRightFromBracket;

  isSoundActive$: Observable<boolean>;

  challengeData$!: Observable<Word[]>

  constructor(private _activatedRoute: ActivatedRoute,
              private _challengeDataService: ChallengeDataService,
              private _categoryStatusService: CategoryStatusService,
              private _challengeLastResultService: ChallengeLastResultService,
              private _voiceService: VoiceService,
              private _router: Router,
  ) {
    this.isSoundActive$ = this._voiceService.isSoundActive$;
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      const { category_id, level_id, variant_id } = params;
      this._category_id = category_id;
      this._level_id = level_id;
      this.variant_id = variant_id;
      this.challengeData$ = this._challengeDataService.getChallengeData(category_id, level_id);
    })
    this._challengeLastResultService.deleteLastResult();
  }

  handleResult(resultValue: string) {
    const result = Number(resultValue);
    if (isNaN(result) || result < 0 || result > 100) {
      this.back();
      return;
    }

    const challengeResult: ChallengeResult = {
      category_id: this._category_id,
      level_id: this._level_id,
      variant_id: this.variant_id,
      result: result
    };

    this._categoryStatusService.submitChallengeResult(challengeResult);
    this._challengeLastResultService.setLastResult(challengeResult);

    const queryParams = {
      expanded: this._category_id,
    };

    console.log('start timeout');
    setTimeout(() => {
      console.log('end timeout');
      this._router.navigate(['/main'], { queryParams })
    }, 1000);
  }

  back() {
    this._router.navigate(['/main'], {queryParams: { expanded: this._category_id }})
  }

  toggleSoundActive() {
    this._voiceService.toggleSoundActive();
  }
}
