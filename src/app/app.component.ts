import { Component } from "@angular/core";
import { MatSidenav } from "@angular/material";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'ACME Product Management'

  sidenavOpen = true

  toggleSidenav() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
