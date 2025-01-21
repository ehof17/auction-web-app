// Fake user database

import IUser from "./models/IUser.js";

let users = [
    {
        "username": "alexm1",
        "password": "pass1"
    }
]

export function loginUser({username, password}: IUser): boolean {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].username == username && users[i].password == password) {
            return true;
        }
    }
    return false;
}

export function registerUser({username, password}: IUser): boolean {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].username == username) {
            return false;
        }
    }
    users.push({
        "username": username, 
        "password": password
    });
    console.log(users);
    return true
}