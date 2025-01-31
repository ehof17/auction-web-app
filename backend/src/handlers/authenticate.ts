import {convertToHashedUser} from '../utils/hash';
import { IUser } from "../models/IUser";
import {loginDb, addUserToDb, isUsernameInDb}  from "../helpers/dbhelper";

export async function loginUser(user: IUser): Promise<boolean> {
    const hashedUser = convertToHashedUser(user);
    return await loginDb(hashedUser);
}
export async function registerUser(user: IUser): Promise<boolean> {
    const hashedUser = convertToHashedUser(user);
    return await addUserToDb(hashedUser);
}
export async function checkUsername(user: string): Promise<boolean> {
    return await isUsernameInDb(user);
}