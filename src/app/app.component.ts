import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzPageHeaderModule,
    NzRadioModule,
    FormsModule,
    NzFlexModule,
    NzTypographyModule,
    NzTagModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  selectedLang = 'en';

  constructor(private translationService: TranslationService) {}

  getTranslation(key: string): string {
    return this.translationService.get(key);
  }
  
  onLanguageChange(value: string): void {
    this.selectedLang = value;
    this.translationService.setLanguage(value);
    localStorage.setItem('preferredLang', value);
  }
}
