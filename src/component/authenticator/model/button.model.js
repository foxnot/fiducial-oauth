"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatorButtonModel = void 0;
class AuthenticatorButtonModel {
    constructor(id, classNames, content) {
        this.id = id || 'fiducial-authenticator-button';
        this.classNames = classNames || '';
        this.content = content || 'Identifiez-vous';
    }
}
exports.AuthenticatorButtonModel = AuthenticatorButtonModel;
