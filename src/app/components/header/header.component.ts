import { Component, OnInit  } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  createButtonEnabled: boolean = true;
  saveButtonEnabled: boolean = false;
  searchQuery: string = '';

  constructor(
    private communicationService: CommunicationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.communicationService.createButtonStatus$.subscribe(status => {
      this.createButtonEnabled = status;
    });

    this.communicationService.saveButtonStatus$.subscribe(status => {
      this.saveButtonEnabled = status;
    });
  }

  onSearchInputChange(): void {
    this.userService.searchUsers(this.searchQuery)
  }

  saveButtonClick(): void {
    this.communicationService.emitSaveButtonClick();
    this.searchQuery = '';
  }

  addButtonClick(): void {
    this.userService.addUser();
    this.searchQuery = '';
  }
}
