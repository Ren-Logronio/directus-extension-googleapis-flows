import { GoogleAuth, OAuth2Client } from "google-auth-library";
import { readCredentialsIfExists, saveCredentials } from "./googleapis-token";
import { credentialOptionDefaults } from "../constants/oauth";

export const authenticateGoogle = async (
  env: Record<string, string | null | undefined>,
  scopes: string | string[],
) => {
  const authMode = env["EXTENSIONS_GOOGLE_AUTH_MODE"] || "service";
  const keyFilePath = env["EXTENSIONS_GOOGLE_SA_KEYFILE_PATH"];
  const subject = env["EXTENSIONS_GOOGLE_SA_CLIENT"];
  const oauthClientId = env["EXTENSIONS_GOOGLE_OAUTH_CLIENT_ID"];
  const oauthClientSecret = env["EXTENSIONS_GOOGLE_OAUTH_CLIENT_SECRET"];
  const oauthProjectId = env["EXTENSIONS_GOOGLE_OAUTH_PROJECT_ID"];
  const refreshToken = env["EXTENSIONS_GOOGLE_OAUTH_REFRESH_TOKEN"];
  const tokenPath = env["EXTENSIONS_GOOGLE_OAUTH_TOKEN_PATH"] || "/directus/oauth-token.json";
  try {
    if (authMode === "service") {
      if (!keyFilePath) throw new Error("No google service account specified, please check your environment");
      let authOptions = {
        keyFile: keyFilePath,
        scopes,
      };
      if (subject) authOptions = Object.assign(authOptions, { clientOptions: { subject } });
      const auth = new GoogleAuth(authOptions);
      return auth;
    } else {
      if (!oauthClientId) throw new Error("No OAuth client id specified, please check your environment");
      if (!oauthClientSecret) throw new Error("No OAuth client secret specified, please check your environment");
      if (!refreshToken) throw new Error("No OAuth refresh token specified, please check your environment");
      const credentials = Object.assign({ refresh_token: refreshToken }, readCredentialsIfExists(tokenPath));
      const authOptions = Object.assign(credentialOptionDefaults, {
        clientId: oauthClientId,
        clientSecret: oauthClientSecret,
        project_id: oauthProjectId
      });
      const oauth = new OAuth2Client(authOptions); 
      oauth.setCredentials(credentials);
      const accessToken = await oauth.getAccessToken();
      if ((accessToken.res?.status || 0) >= 400) throw new Error(`error accessing oauth token - ${accessToken.res?.statusText}`);
      if (!accessToken.token) throw new Error("error accessing oauth token - no access_token returned");
      saveCredentials(tokenPath, accessToken.token);
      return oauth;
    }
  } catch (error) {
    throw new Error(`Error authenticating google service account - ${error}`);
  }
};
