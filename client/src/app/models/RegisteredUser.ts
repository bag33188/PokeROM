import { User } from './User';

export abstract class RegisteredUser {
  public abstract success: boolean;
  public abstract token: string;
  public abstract user: User;
}

