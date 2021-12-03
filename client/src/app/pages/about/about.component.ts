import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  blurActive = false
  constructor(public media: MediaObserver) { }

  onSidebarToggle(opened: boolean) {
    this.blurActive = opened
  }
}
