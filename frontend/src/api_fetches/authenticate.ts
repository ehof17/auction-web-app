import { API_ENDPOINTS } from './constants.ts';

//want to add return type
async function fetchAuth(authInfo: {username: string; password: string}): Promise<boolean> {
    const url = API_ENDPOINTS.LOGIN;

    try {
        //SECURITY ISSUE???? Look into this more
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: authInfo.username, password: authInfo.password})
        });

        console.log(response);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json: {"authResult": boolean} = await response.json();
        return json.authResult;

    } catch(error) {
        console.error(error.message);
        return false;
    }
    
} 

export default fetchAuth;