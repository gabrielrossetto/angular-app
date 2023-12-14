import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { faker } from '@faker-js/faker';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  private usersSubject = new Subject<User[]>();

  constructor() {
    for (let i = 1; i <= 15; i++) {
      this.users.push({
        id: i,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode().replace(/\D/g, ''),
        country: faker.location.country(),
        avatarUrl: faker.image.avatar(),
      });
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(): void {
    const newUser: User = {
      id: this.users.length + 1,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      country: faker.location.country(),
      avatarUrl: faker.image.avatar(),
    };

    this.users.push(newUser);

    this.usersSubject.next([...this.users]);
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);

    if (index !== -1) {
      this.users[index] = updatedUser;
      this.usersSubject.next([...this.users]);
    }
  }

  searchUsers(query: string): void {
    const filteredUsers = this.users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
    );

    this.usersSubject.next([...filteredUsers]);
  }

  getUsersObservable() {
    return this.usersSubject.asObservable();
  }
}
