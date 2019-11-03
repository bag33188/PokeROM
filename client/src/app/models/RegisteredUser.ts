import { User } from './User';

export abstract class RegisteredUser {
  abstract success: boolean;
  abstract token: string;
  abstract user: User;
}

