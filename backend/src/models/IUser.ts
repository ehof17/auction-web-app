interface IUserBase {
    username: string;
  }

export interface IUser extends IUserBase {
    password: string;
  }
  
export interface IUserHashed extends IUserBase {
    passwordHash: string;

}

  