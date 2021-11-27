import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';
import { SupportedLanguagesService } from 'src/app/services/supported-languages.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-language-redirect',
  templateUrl: './language-redirect.component.html',
  styleUrls: ['./language-redirect.component.scss']
})
export class LanguageRedirectComponent implements OnInit {

  constructor(private appConfig: AppConfigService,
              private languages: SupportedLanguagesService) { }

  ngOnInit(): void {
    this.checkForRedirect();
  }

  private checkForRedirect() {
    const languageId = this.languages.activeLanguageId;
    const languageSupported = this.languages.isSupportedLanguageId(languageId);
    const currentCorrect = this.currentUrlCorrectLanguage(languageId);

    console.log(`language: ${languageId}, languageSupported: ${languageSupported}, currentCorrect: ${currentCorrect}`);

    if (languageSupported && !currentCorrect) {
      const redirectUrl = `/${this.appConfig.appName}/${languageId}`;
      console.log(`Redirect for language triggered: ${redirectUrl} - enabled? ${environment.redirect !== false}`);

      if (environment.redirect === false) {
        return;
      }

      window.location.href = redirectUrl;
    }
  }

  private currentUrlCorrectLanguage(languageId: string): boolean {
    let useSubstring = '/' + languageId;
    if (window.location.href.endsWith(useSubstring)) {
      return true;
    }
    useSubstring += '/';
    return window.location.href.endsWith(useSubstring);
  }
}
