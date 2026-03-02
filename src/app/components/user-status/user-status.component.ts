import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../user.model';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 10px; background: #f4f4f4; border-radius: 5px; margin-bottom: 10px;">
      <p>Current Status: 
        <strong [style.color]="user?.isOnline ? 'green' : 'red'">
          {{ user?.isOnline ? 'Online' : 'Offline' }}
        </strong>
      </p>
      <button (click)="onButtonClick()">Toggle Status</button>
    </div>
  `
})
export class UserStatusComponent {
  @Input() user: UserProfile | undefined = undefined;
  
  @Output() statusChanged = new EventEmitter<void>();

  onButtonClick() {
    this.statusChanged.emit();
  }
}