//want to add return type
async function registerUser(registerInfo: {username: string, password: string}): Promise<boolean> {
    const url = 'http://localhost:5000/register'

    try {
        //SECURITY ISSUE???? Look into this more
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: registerInfo.username, password: registerInfo.password})
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const json: {"registerResult": boolean} = await response.json();
        return json.registerResult;

    } catch(error) {
        console.error(error.message);
        return false;
    }
}

export default registerUser;