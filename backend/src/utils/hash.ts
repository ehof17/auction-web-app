
import crypto from 'crypto';
import { IUser, IUserHashed } from '../models/IUser';

export default function hashString(input:string): string {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}

export function convertToHashedUser(user: IUser): IUserHashed {
  return {
    username: user.username,
    passwordHash: hashString(user.password)
  };
}