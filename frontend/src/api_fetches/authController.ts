// authController.tsx (or authController.ts)

import { API_ENDPOINTS } from './constants.ts';

interface AuthResponse {
  authResult: boolean;
}

interface RegisterResponse {
  registerResult: boolean;
}
interface UserResponse {
    userResult: boolean;
}

interface AuthInfo {
  username: string;
  password: string;
}

export async function fetchAuth(authInfo: AuthInfo): Promise<boolean> {
  try {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: authInfo.username,
        password: authInfo.password,
      }),
    });


    const json = (await response.json()) as AuthResponse;
    return json.authResult;
  
} catch (error: any) {
    console.error('fetchAuth error:', error.message);
    return false;
  }
}

export async function registerUser(registerInfo: AuthInfo): Promise<boolean> {
  try {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: registerInfo.username,
        password: registerInfo.password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Response not OK. Status: ${response.status}`);
    }

    const json = (await response.json()) as RegisterResponse;
    return json.registerResult;
  
} catch (error: any) {
    console.error('registerUser error:', error.message);
    return false;
  }
}

export async function checkUsername(username: string): Promise<boolean> {
    try {
      const response = await fetch(API_ENDPOINTS.CHECK_USER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Response not OK. Status: ${response.status}`);
      }
  
      const json = (await response.json()) as UserResponse;
      return json.userResult;
    
  } catch (error: any) {
      console.error('checkUser error:', error.message);
      return false;
    }
  }
