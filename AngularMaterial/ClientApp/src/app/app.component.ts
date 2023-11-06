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
    this.matIconRegistry.addSvgIcon(
      "basic",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/basic.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "advanced",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/advanced.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "premium",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/premium.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "youtube",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/youtube.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/twitter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "insta",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/insta.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/facebook.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedIn",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedIn.svg")
    );
  }
}

