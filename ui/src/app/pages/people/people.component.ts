import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';

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

  private readonly weights = {
    quality: 0.2,
    usefulness: 0.15,
    affordability: 0.2,
    availability: 0.1,
    urgency: 0.1,
    longTerm: 0.15,
    regret: 0.1,
  };

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

  getDescription(category: string, score: number): string {
    const descriptions: Record<string, string[]> = {
      quality: [
        'The item is of very poor quality and fails to meet basic standards. You should carefully consider whether it is worth investing in something that may not perform reliably.',
        'The item shows below average quality with noticeable flaws. Think about whether you are comfortable accepting compromises in durability and performance before purchasing.',
        "The item meets an acceptable quality level, offering a functional but unremarkable experience. Reflect on whether 'good enough' is sufficient for your intended use.",
        'The item demonstrates good quality, appearing reliable and well-made. Still, consider whether the level of quality justifies the overall cost and necessity.',
        'The item is of excellent quality and consistently exceeds expectations. Even so, think about whether superior quality is essential for your needs before committing.',
      ],
      usefulness: [
        'This item offers little to no practical use. Ask yourself if it truly addresses a real need in your life before considering a purchase.',
        'This item has limited usefulness and applies only in narrow scenarios. Reflect on how often you would realistically benefit from owning it.',
        'This item can be moderately useful in certain situations. Consider whether occasional usefulness is enough to justify the investment.',
        'This item is highly useful and can support many of your regular activities. Still, weigh whether its benefits outweigh its cost and availability.',
        'This item is extremely useful and may be indispensable. Before purchasing, think about how it integrates with your long-term priorities.',
      ],
      affordability: [
        'The item is extremely expensive compared to its value. Consider whether this purchase would create unnecessary financial strain before proceeding.',
        'The item carries a high price and may not be budget-friendly. Ask yourself if the benefits justify the expense at this stage of your finances.',
        'The item is reasonably priced, offering fair value. Even so, reflect on whether this cost aligns with your priorities and other obligations.',
        'The item offers good value for the money. Still, consider whether this is the best use of your budget right now.',
        'The item is very affordable and cost-effective. Nonetheless, pause to ask whether affordability alone makes it a necessary purchase.',
      ],
      availability: [
        'This item is rarely available and difficult to obtain. Think carefully if its scarcity is pressuring you into buying rather than actual need.',
        'This item has limited availability. Ask yourself if you are considering it because of convenience or true necessity.',
        'This item is moderately available but may require effort to source. Reflect on whether that effort is justified by its importance to you.',
        'This item is generally available with minimal effort. Still, consider whether availability alone should influence your decision.',
        'This item is widely accessible. Even so, think about whether easy access is encouraging an impulse purchase.',
      ],
      urgency: [
        'There is no urgency to obtain this item. Ask yourself if waiting longer might bring better options or prices.',
        'There is low urgency; action can be delayed. Reflect on whether purchasing now is driven by necessity or impatience.',
        'There is moderate urgency; it may be advisable to plan for purchase soon. Still, think about whether delaying slightly could help you reassess priorities.',
        'There is high urgency; obtaining the item should be prioritized soon. Consider whether acting quickly might cause you to overlook alternatives.',
        'There is critical urgency; immediate action may be needed. Even so, pause to confirm that the urgency is genuine and not influenced by pressure.',
      ],
      longTerm: [
        'The item has no long-term value and will quickly lose relevance. Ask yourself if such short-lived benefit is worth the cost.',
        'The item has limited long-term value, with benefits that diminish over time. Reflect on whether it contributes meaningfully to your long-term goals.',
        'The item provides moderate long-term value and some lasting benefits. Still, consider if moderate durability justifies its price.',
        'The item offers strong long-term value and remains useful for years. Think about whether its longevity aligns with your intended use.',
        'The item delivers exceptional long-term value and sustainability. Even so, pause to confirm that lasting benefit matches your actual needs.',
      ],
      regret: [
        'There is a very high likelihood of regret. Ask yourself if you are willing to accept that risk before committing to this purchase.',
        'There is a high likelihood of regret. Reflect carefully on whether the short-term benefit outweighs the long-term dissatisfaction.',
        'There is a moderate chance of regret. Consider whether you would still feel the purchase was worthwhile if your expectations aren’t fully met.',
        'There is a low likelihood of regret. Still, pause to ensure this decision fits within your priorities.',
        'There is minimal to no risk of regret. Even so, it is wise to double-check that this aligns with your long-term goals.',
      ],
    };

    return descriptions[category]?.[score - 1] ?? 'No description available.';
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
