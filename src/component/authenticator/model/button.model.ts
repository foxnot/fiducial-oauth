export class AuthenticatorButtonModel
{
    id: string;
    classNames: string;
    content: string;

    constructor(id:string|undefined, classNames:string|undefined, content:string|undefined) {
        this.id = id || 'fiducial-authenticator-button';
        this.classNames = classNames || '';
        this.content = content || 'Identifiez-vous';
    }
}