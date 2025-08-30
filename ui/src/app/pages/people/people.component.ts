import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-people',
  imports: [NzButtonModule, NzModalModule, CommonModule, NzDividerModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.less',
})
export class PeopleComponent {
  selectedQuality: string | null = null;
  selectedUsefulness: string | null = null;
  selectedAffordability: string | null = null;
  selectedAvailability: string | null = null;
  selectedUrgency: string | null = null;
  selectedLongTerm: string | null = null;
  selectedRegret: string | null = null;
  isModalVisible = false;
  modalScore: number | null = null;
  selectedLang = 'en';

  private readonly weights = {
    quality: 0.2,
    usefulness: 0.15,
    affordability: 0.2,
    availability: 0.1,
    urgency: 0.1,
    longTerm: 0.15,
    regret: 0.1,
  };

  constructor(private translationService: TranslationService) {}

  getTranslation(key: string): string {
    return this.translationService.get(key);
  }
  
  getScore(value: string | null): number {
    if (!value) return 1;
    const match = value.match(/\d+$/);
    return match ? parseInt(match[0], 10) : 1;
  }

  calculateTotalScore(): number {
    const total =
      this.getScore(this.selectedQuality) * this.weights.quality +
      this.getScore(this.selectedUsefulness) * this.weights.usefulness +
      this.getScore(this.selectedAffordability) * this.weights.affordability +
      this.getScore(this.selectedAvailability) * this.weights.availability +
      this.getScore(this.selectedUrgency) * this.weights.urgency +
      this.getScore(this.selectedLongTerm) * this.weights.longTerm +
      this.getScore(this.selectedRegret) * this.weights.regret;

    return Math.round(total * 100) / 100;
  }

  getResultDesc(category: string, score: number): string {
  return this.translationService.getResultDescription(category, score);
}

  isAllSelected(): boolean {
    return ![
      this.selectedQuality,
      this.selectedUsefulness,
      this.selectedAffordability,
      this.selectedAvailability,
      this.selectedUrgency,
      this.selectedLongTerm,
      this.selectedRegret,
    ].includes(null);
  }

  onEvaluate(): void {
    if (this.isAllSelected()) {
      this.modalScore = this.calculateTotalScore();
      this.showModal();
    }
  }

  showModal(): void {
    this.isModalVisible = true;
  }

  handleClose(): void {
    this.isModalVisible = false;
  }
}
