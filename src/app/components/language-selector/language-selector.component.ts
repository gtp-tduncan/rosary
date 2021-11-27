import { Component, OnInit } from '@angular/core';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';
import { SupportedLanguagesService } from 'src/app/services/supported-languages.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  private _supportedLanguages: string[] = [];

  constructor(public languages: SupportedLanguagesService,
              private liturgicalYear: LiturgicalYearService) { }

  ngOnInit(): void {
    this.initSupportedLanguages();
    console.log(`current id: ${this.languages.activeLanguageId}`);
  }

  get supportedLanguages(): string[] {
    return this._supportedLanguages;
  }

  isSelectedLanguage(entry: string): boolean {
    return entry.startsWith(this.languages.activeLanguageId);
  }

  onLanguageSelectionChange(code: string) {
    const parsed = code.split(':');
    this.languages.activeLanguageId = parsed[0];
    this.liturgicalYear.refreshLabels();
    console.log(`onLanguageSelectionChange: ${parsed[0]} - ${parsed[1]} => ${this.languages.activeLanguageId}`);
    this.languages.checkForRedirect();
  }

  private initSupportedLanguages() {
    let languageList = [];
    for (const [key, value] of this.languages.supportedLanguages) {
      console.log(`--- language: ${key}=${value}`);
      languageList.push(`${key}: ${value}`);
    }
    this._supportedLanguages = languageList;
  }
}
