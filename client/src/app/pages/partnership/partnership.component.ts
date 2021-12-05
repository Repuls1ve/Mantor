import { Component } from '@angular/core';

type branch = 'shops' | 'service-centers'

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent {
  blurActive = false
  branch: branch = 'shops'

  onSidebarToggle(opened: boolean): void {
    this.blurActive = opened
  }

  onBranchSelect(selected: branch): void {
    this.branch = selected
  }
}
