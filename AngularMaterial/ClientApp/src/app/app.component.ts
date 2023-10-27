import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/logo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "earphones",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/earphones.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ask",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/ask.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "talk",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/talk.svg")
    );
  }
}

