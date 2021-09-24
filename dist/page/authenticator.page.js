"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatorPage = void 0;
class AuthenticatorPage {
    static execute() {
        document.body.innerHTML = '';
        const urlParams = new URLSearchParams(window.location.search);
        let authorizationCode = null;
        if (urlParams.get(this.paramName)) {
            authorizationCode = urlParams.get(this.paramName);
        }
        localStorage.setItem(process.env.PROVIDER_FIDUCIAL_LS_KEY_AUTHORIZATION_CODE, authorizationCode);
        window.dispatchEvent(new Event('storage'));
        window.close();
    }
}
exports.AuthenticatorPage = AuthenticatorPage;
AuthenticatorPage.paramName = 'code';
