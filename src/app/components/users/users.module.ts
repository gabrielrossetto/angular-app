import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, MatCardModule],
  exports: [UsersComponent],
})

export class UsersModule { }
