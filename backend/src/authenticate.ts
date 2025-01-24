// Fake user database
import hashString from './utils/hash';
import { IUser, convertToHashedUser} from "./models/IUser";
import {loginDb, addUserToDb}  from "./helpers/dbhelper";

export function loginUser({username, password}: IUser): boolean {
    const hashedUser = convertToHashedUser({username, password});
    return loginDb(hashedUser);
}

export function registerUser({username, password}: IUser): boolean {
    const hashedUser = convertToHashedUser({username, password});
    return addUserToDb(hashedUser);
}