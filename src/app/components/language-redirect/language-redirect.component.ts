import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';
import { SupportedLanguagesService } from 'src/app/services/supported-languages.service';

@Component({
  selector: 'app-language-redirect',
  templateUrl: './language-redirect.component.html',
  styleUrls: ['./language-redirect.component.scss']
})
export class LanguageRedirectComponent implements OnInit {

  private language: string;

  constructor(private appConfig: AppConfigService,
              private languages: SupportedLanguagesService) { }

  ngOnInit(): void {
    this.checkForRedirect();
  }

  private checkForRedirect() {
    if (this.languages.isSupportedLanguageId(this.language) && !this.currentUrlCorrectLanguage()) {
      const redirectUrl = `/${this.appConfig.appName}/${this.language}`;
      console.log(`Redirect for language triggered: ${redirectUrl}`);
      window.location.href = redirectUrl;
    }
  }

  private currentUrlCorrectLanguage(): boolean {
    let useSubstring = '/' + this.language;
    if (window.location.href.endsWith(useSubstring)) {
      return true;
    }
    useSubstring += '/';
    return window.location.href.endsWith(useSubstring);
  }
}
