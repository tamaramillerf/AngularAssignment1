import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile, User } from '../../user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" *ngIf="userData" style="border: 2px solid #333; padding: 15px; border-radius: 10px; margin-bottom: 10px;">
      <img [src]="getPic()" alt="Profile" style="width:80px; border-radius:50%; background: #eee;">
      <h2>{{ getName() }}</h2>
      <p>Age: {{ getAge() }}</p>
    </div>
  `
})
export class UserCardComponent {
  @Input() userData: UserProfile | User | undefined = undefined;

  getName(): string {
    if (this.userData instanceof User) {
      return this.userData.getFullName();
    }
    return 'Loading User...';
  }

  getAge(): string {
    if (this.userData instanceof UserProfile) {
      return this.userData.age.toString();
    }
    return 'N/A';
  }

  getPic(): string {
    if (this.userData instanceof UserProfile) {
      return this.userData.profilePicture;
    }
    return '';
  }
}