import { Component, EventEmitter, Output } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  icons = {
    open: '/assets/images/menu-icon.png',
    close: '/assets/images/close-icon.png'
  }
  sidebarOpen = false
  icon = this.icons.open

  @Output() onSidebarToggle = new EventEmitter<boolean>()

  constructor(public media: MediaObserver) {}

  private changeIcon(): void {
    if (this.icon === this.icons.open) {
      this.icon = this.icons.close
    }
    else {
      this.icon = this.icons.open
    }
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen
    this.onSidebarToggle.emit(this.sidebarOpen)
    this.changeIcon()
  }
}
