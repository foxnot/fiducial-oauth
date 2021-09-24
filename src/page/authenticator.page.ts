export class AuthenticatorPage
{
    static paramName = 'code';
    static execute()
    {
        document.body.innerHTML = '';
        const urlParams = new URLSearchParams(window.location.search);
        let authorizationCode:string = null;

        if(urlParams.get(this.paramName)) {
            authorizationCode = urlParams.get(this.paramName);
        }

        localStorage.setItem(process.env.PROVIDER_FIDUCIAL_LS_KEY_AUTHORIZATION_CODE, authorizationCode);
        window.dispatchEvent( new Event('storage') );
        window.close();
    }
}

