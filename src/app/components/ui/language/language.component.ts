import {Component, OnInit} from '@angular/core';
import {LanguageService} from "@services/language.service";
import {KeyValuePipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ItemsMap} from '@services/types/items-map.service';
import {DropdownComponent} from '@components/ui/dropdown/dropdown.component';

@Component({
  selector: 'shd-language',
  standalone: true,
  imports: [DropdownComponent, KeyValuePipe, TranslateModule],
  template: `
    <shd-dropdown
      [items]="dropdownItems"
      (itemSelected)="switchLang($event)"
    >
      <i class="material-symbols-outlined open-dropdown" aria-label="Language Menu" tabindex="0">language</i>
    </shd-dropdown>
  `,
})
export class LanguageComponent implements OnInit {
  currentLang: string;
  languages!: ItemsMap;
  dropdownItems: { key: string; label: string }[] = [];

  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.initializeLanguageSettings();
  }

  ngOnInit(): void {
    this.languages = this.languageService.getAvailableLanguages();
    this.dropdownItems = Object.keys(this.languages).map((key) => ({
      key,
      label: this.languages[key]
    }));
    this.languageService.switchLang(this.currentLang);
  }

  switchLang(lang: string): void {
    this.languageService.switchLang(lang);
    this.currentLang = lang;
  }
}
