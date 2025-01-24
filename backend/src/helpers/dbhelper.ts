import fs from 'fs';
import {IUserHashed} from '../models/IUser';
import hashString from '../utils/hash';


function getUsersFromDb(): IUserHashed[] {
    try {
    const data = fs.readFileSync('users.json', 'utf8');
    return JSON.parse(data);
    }
    catch (err) {
    console.error(err);
    return [];
    }
}


export function addUserToDb(user: IUserHashed): boolean {
  let users: IUserHashed[] = getUsersFromDb(); 

  const userExists = users.some((u) => u.username === user.username);

  if (userExists) {
    console.log(`Username '${user.username}' already exists`);
    return false; 
  }
  users.push(user);

  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

  console.log(`User '${user.username}' successfully added`);
  return true;
}

export function loginDb(user: IUserHashed): boolean{
    let users: IUserHashed[] = getUsersFromDb(); 
    
    const userExists = users.some((u) => 
        u.username === user.username
        && u.passwordHash === user.passwordHash
    );
    
    if (userExists) {
        console.log(`User '${user.username}' successfully logged in`);
        return true; 
    }
    console.log(`User '${user.username}' not found`);
    return false;

}
