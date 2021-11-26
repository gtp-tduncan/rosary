import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  languages: LanguageEntry[];

  selectedLanguageCodeEvent = new EventEmitter<string>();

  constructor() {
    this.languages = [
      { name: this.langEnglish, code: 'en' },
      { name: this.langSpanish, code: 'es' }
    ]
  }

  ngOnInit(): void {
  }

  onLanguageSelectionChange(newValue: string): void {
    // this.selectedLanguageCodeEvent.emit(newValue);
    window.location.href = newValue;
  }

  get langEnglish(): string {
    return $localize`:@@lang-english:English`;
  }

  get langSpanish(): string {
    return $localize`:@@lang-spanish:Spanish`;
  }
}

export interface LanguageEntry {
  name: string;
  code: string;
}
