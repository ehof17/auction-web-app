import  hashString  from "../utils/hash";
interface IUserBase {
    username: string;
  }

export interface IUser extends IUserBase {
    password: string;
  }
  
export interface IUserHashed extends IUserBase {
    passwordHash: string;

}
export function convertToHashedUser(user: IUser): IUserHashed {
    return {
      username: user.username,
      passwordHash: hashString(user.password)
    };
  }
  