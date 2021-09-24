"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatorButton = void 0;
class AuthenticatorButton {
    static render(model) {
        // @ts-ignore
        const urlParams = new URLSearchParams({
            response_type: 'code',
            client_id: process.env.PROVIDER_FIDUCIAL_API_KEY,
            redirect_uri: process.env.PROVIDER_FICUCIAL_API_CALLBACK_URI,
        }).toString();
        const uri = process.env.PROVIDER_FICUCIAL_API_URL + '/authorize?' + urlParams;
        let button = document.createElement('button');
        button.setAttribute('id', model.id);
        button.className = model.classNames;
        button.addEventListener('click', () => {
            window.open(uri, '_blank');
        });
        return button;
    }
}
exports.AuthenticatorButton = AuthenticatorButton;
