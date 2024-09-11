import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitchService } from './core/language-switch/language-switch.service';
import { NavbarComponent } from './core/language-switch/language-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-18-archetype';
  languageService = inject(LanguageSwitchService);
  constructor() {
    this.languageService.setLanguage('es')
  }
}
