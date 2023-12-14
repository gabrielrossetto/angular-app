# Angular App

Welcome to the documentation for the Angular App! This project is a simple Angular application that allows you to manage a list of users. You can create new users, filter them, update information, and save changes.

## Key Features

1. **Header Component:** Toolbar component containing a search field, create button, and save button.

2. **Footer Component:** Footer component displaying copyright information and other details.

3. **Users Component:** Displays a grid of users with basic information such as name, email, and address.

4. **User Details Component:** Allows viewing and editing details of a specific user. This component is activated when clicking on a user in the user grid.

Let's explore each component in detail in the following sections.

## Header Component

The header component serves as the top toolbar in the application, offering essential functionalities for user management.

### Features

1. **Search Input:**
   - The search input allows users to filter and find specific users based on criteria.

2. **Create Button:**
   - Clicking the "Create" button triggers the addition of a new user to the system.

3. **Save Button:**
   - The "Save" button is used to confirm and save any changes made to user details.

### Usage

The header component is a crucial part of the user interface, providing quick access to search and management actions. Here's a breakdown of its elements:

- **Search Input:**
  - Located on the left side of the toolbar.
  - Users can input search queries to filter the displayed users dynamically.
  - Disabled/enabled based on the application state (controlled by the `createButtonEnabled` property).

- **Create Button:**
  - Positioned on the right side of the toolbar.
  - Enables the creation of new users when clicked.
  - Disabled/enabled based on the application state (controlled by the `createButtonEnabled` property).

- **Save Button:**
  - Adjacent to the "Create" button.
  - Initiates the saving of changes made to user details.
  - Disabled/enabled based on the application state (controlled by the `saveButtonEnabled` property).

### Component Interaction

The header component interacts with other parts of the application through the `CommunicationService` and `UserService`. It subscribes to status changes for the "Create" and "Save" buttons, ensuring a synchronized user interface.

### Example

```html
<mat-toolbar color="primary">
  <div class="search-input">
    <mat-form-field>
      <input matInput placeholder="Search" [(ngModel)]="searchQuery" (input)="onSearchInputChange()" [disabled]="!createButtonEnabled" />
    </mat-form-field>
  </div>
  <div class="spacer"></div>
  <div class="header-buttons">
    <button mat-button (click)="addButtonClick()" [disabled]="!createButtonEnabled">Create</button>
    <button mat-button (click)="saveButtonClick()" [disabled]="!saveButtonEnabled">Save</button>
  </div>
</mat-toolbar>
```

## Footer Component

The footer component serves as the bottom section of the application, providing a simple and styled footer with copyright information.

### Features

1. **Copyright Text:**
   - Displays a copyright notice in the centered section of the footer.

### Usage

The footer component is a static element, providing a visual endpoint to the application. It does not require user interaction and is designed to display copyright information.

### Example

```html
<footer class="footer">
  <div class="centered">
    &copy; Random Copyright Text
  </div>
</footer>
```

## Users Component

The users component is responsible for displaying a list of users and providing navigation to individual user details.

### Features

1. **User List:**
   - Displays a list of users with their basic information.
   - Users are rendered as clickable cards, providing easy navigation to user details.

2. **Navigation:**
   - Allows navigation to detailed information for each user by clicking on the respective user card.

3. **Dynamic Updates:**
   - Listens for updates to the user data and reflects changes dynamically in the UI.

### User Card

Each user is represented as a card with the following information:

- **Avatar:**
  - Displays the user's avatar as a rounded image.

- **Full Name:**
  - Presents the user's full name in the card title.

- **Additional Information:**
  - Shows additional details such as email, street, city, zip code, and country in the card content.

### Handling No Users

In cases where no users are available, a message is displayed to inform the user that no users have been found.

### Usage

The users component is typically used to showcase and manage a list of users in the application. It can be integrated into various parts of the application where user-related information needs to be displayed.

### Example

```html
<div class="user-grid">
  <ng-container *ngIf="users.length > 0; else noUsersMessage">
    <div *ngFor="let user of users" class="user-card" (click)="navigateToUserDetails(user.id)">
      <mat-card class="user-card-mat" matTooltip="Click to edit" matTooltipPosition="above" matTooltipShowDelay="500">
        <mat-card-header>
          <div mat-card-avatar class="user-avatar">
            <img [src]="user.avatarUrl" alt="User Avatar" class="rounded-avatar">
          </div>
          <mat-card-title class="centered">{{ user.firstName }} {{ user.lastName }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>{{ user.email }}</p>
          <p>{{ user.street }}, {{ user.city }}, {{ user.zipcode }}, {{ user.country }}</p>
        </mat-card-content>
      </mat-card>
    </div>
  </ng-container>
  <ng-template #noUsersMessage>
    <div class="no-users-message">
      <p class="centered">No users found.</p>
    </div>
  </ng-template>
</div>
```

## User Details Component

The user details component is responsible for displaying and editing detailed information about a specific user. It provides a form for updating the user's personal information.

### Features

1. **User Form:**
   - Displays a form for editing the user's details, including first name, last name, email, address, and country.

2. **Dynamic Updates:**
   - Listens for changes in the form fields and enables saving the updated information.

3. **Save and Navigate:**
   - Saves the updated user information and navigates back to the user list.

### User Form

The user form allows editing the following user details:

- **First Name:**
  - Input field for editing the user's first name.

- **Last Name:**
  - Input field for editing the user's last name.

- **Email:**
  - Input field for editing the user's email with email validation.

- **Street, City, Zip Code, Country:**
  - Input fields for editing the user's address details.

### Saving Changes

When the user clicks the "Save" button, the component validates the form and updates the user information. If the form is invalid, an error message is displayed.

### Usage

The user details component is typically used in conjunction with the user list and provides a detailed view for each user. It is navigated to when a user is selected from the list.

### Example

```html
<form [formGroup]="userForm">
  <div class="personal-info-section">
    <mat-form-field>
      <input matInput formControlName="firstName" placeholder="First Name" required />
    </mat-form-field>
    <mat-form-field>
      <input matInput formControlName="lastName" placeholder="Last Name" required />
    </mat-form-field>
    <mat-form-field>
      <input matInput formControlName="email" placeholder="Email" required email />
    </mat-form-field>
    <mat-form-field>
      <input matInput formControlName="street" placeholder="Street" required />
    </mat-form-field>
    <mat-form-field>
      <input matInput formControlName="city" placeholder="City" required />
    </mat-form-field>
    <mat-form-field>
      <input matInput formControlName="zipcode" placeholder="Zip Code" pattern="[0-9]*" />
    </mat-form-field>
    <mat-form-field>
      <input matInput formControlName="country" placeholder="Country" required />
    </mat-form-field>
  </div>

  <div *ngIf="userForm.invalid" class="error-message">
    The form contains errors. Please correct the highlighted fields.
  </div>
</form>
