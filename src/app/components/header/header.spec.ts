import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CommunicationService } from '../../services/communication.service';
import { UserService } from '../../services/user.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let communicationServiceSpy: jasmine.SpyObj<CommunicationService>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    communicationServiceSpy = jasmine.createSpyObj('CommunicationService', ['createButtonStatus$', 'saveButtonStatus$', 'emitSaveButtonClick']);
    communicationServiceSpy.createButtonStatus$ = new Subject<boolean>();
    communicationServiceSpy.saveButtonStatus$ = new Subject<boolean>();

    userServiceSpy = jasmine.createSpyObj('UserService', ['searchUsers', 'addUser']);

    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
      providers: [
        { provide: CommunicationService, useValue: communicationServiceSpy },
        { provide: UserService, useValue: userServiceSpy }
      ],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService.searchUsers on onSearchInputChange', () => {
    component.onSearchInputChange();
    expect(userServiceSpy.searchUsers).toHaveBeenCalledWith(component.searchQuery);
  });

  it('should call communicationService.emitSaveButtonClick on saveButtonClick', () => {
    component.saveButtonClick();
    expect(communicationServiceSpy.emitSaveButtonClick).toHaveBeenCalled();
  });

  it('should call userService.addUser on addButtonClick', () => {
    component.addButtonClick();
    expect(userServiceSpy.addUser).toHaveBeenCalled();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
