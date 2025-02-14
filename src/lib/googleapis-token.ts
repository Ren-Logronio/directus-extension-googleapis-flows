import fs from "fs";

export const readCredentialsIfExists = (tokenPath: string): { access_token: string } | null => {
    try {
        const tokenFileExists = fs.existsSync(tokenPath);
        if (tokenFileExists) {
            const tokenFile = fs.readFileSync(tokenPath);
            const credentials = JSON.parse(tokenFile.toString());
            return credentials;
        }
        return null;
    } catch {
        return null;
    }    
}

export const saveCredentials = (tokenPath: string, access_token: string) => {
    try {
        const payload = JSON.stringify({ access_token });
        fs.writeFileSync(tokenPath, payload);
    } catch (error) {
        throw new Error(`error saving credentials - ${error}`)
    }
}