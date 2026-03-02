import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../user.model';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 10px; border: 1px dashed #999;">
      <h3>About Me</h3>
      <p>{{ user?.bio }}</p>
      
      <input #newBio type="text" [value]="user?.bio" style="width: 80%;">
      <button (click)="save(newBio.value)">Update</button>
    </div>
  `
})
export class UserBioComponent {
  @Input() user: UserProfile | undefined = undefined;
  
  @Output() bioUpdated = new EventEmitter<string>();

  save(val: string) {
    this.bioUpdated.emit(val);
  }
}