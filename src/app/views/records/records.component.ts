import { Component } from "@angular/core";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { RecordsInfo } from "@model";
import { RecordsService } from "@services";

@Component({
  selector: "app-records",
  templateUrl: "./records.component.html",
  styleUrls: ["./records.component.scss"],
})
export class RecordsComponent {
  recordsInfo$: Observable<RecordsInfo>;
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(
    private _router: Router,
    private _recordService: RecordsService,
  ) {
    this.recordsInfo$ = this._recordService.recordsInfo$;

    this.recordsInfo$.subscribe(a => {
      console.warn(a);
    })
  }

  back() {
    this._router.navigate(["/main"]);
  }
}
