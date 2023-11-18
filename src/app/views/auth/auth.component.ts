import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "@core";
import { catchError } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {

}
