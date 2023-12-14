import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard/users', pathMatch: 'full' },
  { path: 'dashboard/users', component: UsersComponent },
  { path: 'dashboard/users/:idOfUser', component: UserDetailsComponent }
];
