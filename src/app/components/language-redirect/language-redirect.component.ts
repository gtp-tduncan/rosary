import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';
import { SupportedLanguagesService } from 'src/app/services/supported-languages.service';

@Component({
  selector: 'app-language-redirect',
  templateUrl: './language-redirect.component.html',
  styleUrls: ['./language-redirect.component.scss']
})
export class LanguageRedirectComponent implements OnInit {

  constructor(private appConfig: AppConfigService,
              private languages: SupportedLanguagesService) { }

  ngOnInit(): void {
    this.languages.checkForRedirect();
  }
}
