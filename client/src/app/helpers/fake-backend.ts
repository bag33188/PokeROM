import { User } from '../models/User';

function getUser(): User | {} {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {};
}

function addUser(newUser: User): User | {} {
  localStorage.setItem('user', JSON.stringify(newUser));
  return getUser();
}

function updateUser(updatedUser: User): User | {} {
  localStorage.setItem('user', JSON.stringify(updatedUser));
  return getUser();
}

function deleteUser(): void {
  localStorage.setItem('user', JSON.stringify({}));
}
