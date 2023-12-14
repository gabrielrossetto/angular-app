import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() userId: number = 0;

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private communicationService: CommunicationService
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [Validators.pattern(/^\d+$/)]],
      country: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.communicationService.setCreateButtonStatus(false);
    this.communicationService.setSaveButtonStatus(true);

    this.communicationService.saveButtonClick$.subscribe(() => {
      this.saveUser();
    });

    this.route.params.subscribe(params => {
      this.userId = +params['idOfUser'];

      if (this.userId) {
        const user = this.userService.getUserById(this.userId);

        if (user) {
          this.userForm.patchValue(user);
        }
      }
    });
  }

  saveUser(): void {
    if (this.userForm.valid) {
      if (this.userId) {
        const updatedUser = { ...this.userService.getUserById(this.userId), ...this.userForm.value };
        this.userService.updateUser(updatedUser);
      }

      this.communicationService.setCreateButtonStatus(true);
      this.communicationService.setSaveButtonStatus(false);

      this.router.navigate(['dashboard/users']);
    }
  }
}
