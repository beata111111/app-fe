import { Component } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router";
import {Observable} from "rxjs";
import {Record} from "@model";
import {RecordsService} from "../../services/recors/records.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent {
  records$: Observable<Record[]>;
  faArrowRightFromBracket = faArrowRightFromBracket

  constructor(private _router: Router,
              private _recordService: RecordsService) {
    this.records$ = this._recordService.records$;
  }

  back() {
    this._router.navigate(['/main'])
  }
}
