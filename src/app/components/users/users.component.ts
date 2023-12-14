import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private usersSubscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.usersSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();

    this.usersSubscription = this.userService.getUsersObservable().subscribe((updatedUsers) => {
      this.users = updatedUsers;
    });
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/dashboard/users', userId]);
  }
}
