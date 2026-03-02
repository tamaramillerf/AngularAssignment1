import { Component } from '@angular/core';
import { UserProfile } from './user.model';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent, UserStatusComponent, UserBioComponent],
  template: `
    <div style="text-align: center; padding: 20px;">
      <h1>Profile Dashboard</h1>
      <app-user-card [userData]="myUser"></app-user-card>
      <app-user-status [user]="myUser" (statusChanged)="toggleStatus()"></app-user-status>
      <app-user-bio [user]="myUser" (bioUpdated)="updateBio($event)"></app-user-bio>
    </div>
  `
})
export class AppComponent {
  myUser = new UserProfile(
    'Tamara', 
    'Miller-Falls', 
    29, 
    'Angular Developer', 
    'https://api.dicebear.com/7.x/bottts/svg?seed=Tamara',
    true
  );

  toggleStatus() {
    this.myUser.isOnline = !this.myUser.isOnline;
  }

  updateBio(newBio: string) {
    this.myUser.bio = newBio;
  }
}