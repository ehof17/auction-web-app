import fs from 'fs';
import {IUserHashed} from '../models/IUser';
import mongoose from 'mongoose';
import UserModel from '../dbModels/UserModel.ts';

// personal conn str only works from my ip
const conn_str = "x"
mongoose.connect(conn_str);


export async function addUserToDb(user: IUserHashed): Promise<boolean> {

  const userExists = await isUsernameInDb(user.username);
  if (userExists) {
    return false; 
  }
    const userToAdd = new UserModel({
        userName: user.username,
        passwordHash: user.passwordHash,
    });

    await userToAdd.save();
  console.log(`User '${user.username}' successfully added`);
  return true;
}

export async function loginDb(user: IUserHashed): Promise<boolean>{

    const userInDB = await UserModel.findOne({userName: user.username});

    if (!userInDB){
        console.log(`User with username '${user.username}' does not exist`);
        return false;
    }
    
    if (userInDB) {
        if (userInDB.passwordHash === user.passwordHash) {
            console.log(`User '${user.username}' successfully logged in`);
            return true;
        }
        else{
          // todo: lock account / add forgot password if password is wrong x times
            console.log(`Wrong password for user '${user.username}'`);
            return false;
        }

    }
    return false;
}

export async function isUsernameInDb(username: string): Promise<boolean> {
  console.log(`Checking if username '${username}' exists in DB inside db helper`);
    const user = await UserModel.findOne({userName: username});
    return user !== null;
}
