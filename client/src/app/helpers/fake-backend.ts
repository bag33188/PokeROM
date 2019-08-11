import { User } from '../models/User';

export abstract class FakeBackend {
  protected constructor() {}

  public static getUser(): User | {} {
    return localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : {};
  }

  public static addUser(newUser: User): User | {} {
    localStorage.setItem('user', JSON.stringify(newUser));
    return FakeBackend.getUser();
  }

  public static updateUser(updatedUser: User): User | {} {
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return FakeBackend.getUser();
  }

  public static deleteUser(): void {
    localStorage.setItem('user', JSON.stringify({}));
  }
}
