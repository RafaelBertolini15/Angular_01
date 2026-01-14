import { AuthConfig } from "angular-oauth2-oidc";

export const auth : AuthConfig = {
    issuer : 'https://accounts.google.com',
    redirectUri : window.location.origin + '',
    clientId : '234198482312-i25vl2u0ik2cus1s8f6r6s76rndnt8os.apps.googleusercontent.com',
    scope : 'openid profile email',
    strictDiscoveryDocumentValidation : false
}