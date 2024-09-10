import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSwitchService } from './language-switch.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  template: `
    <button (click)="changeLang('en')">English</button>
    <button (click)="changeLang('es')">Spanish</button>
  `
})
export class NavbarComponent {
  private languageSwitchService: LanguageSwitchService = inject(LanguageSwitchService);

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  changeLang(lang: string) {
    this.languageSwitchService.setLanguage(lang);
  }
}