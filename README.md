# fiducial-oauth

##Preamble
Here is the authentication workflow of a Fiducial user in order to use the API:
- The user is redirected to the authentication provider.
- The user enters his login details
- The user authorizes the connection
- The authentication provider redirects to a URL of your application with an authorization code allowing you to generate a session token to call the Fiducial API

This package was developed in the context of an already loaded application so as not to disrupt the user experience.

The objective of the package is to be able to obtain an authorization code using two components:
- A login button
- An empty page allowing to pass the code to your application

##Installation

```
yarn add @foxnot/fiducial-oauth
```

###Environment variables to set
* **PROVIDER_FICUCIAL_API_URL** (by example https://preprod-auth.signatureparfiducial.fr)
* **PROVIDER_FIDUCIAL_API_KEY** (your public key provided by Fiducial)
* **PROVIDER_FICUCIAL_API_CALLBACK_URI** (your redirect uri)

##Implementation
Here is an example of implementation in a ReactJs application
###Add the login button in your application
```
import React, {useEffect, useRef} from 'react';
import {AuthenticatorButton, AuthenticatorButtonModel} from '@foxnot/fiducial-oauth';
import '@foxnot/fiducial-oauth/asset/css/button.css';

export const MyComponent = () => {
    const ref = useRef();
    const ButtonModel = new AuthenticatorButtonModel('fiducial-oauth-button', 'btn btn-primary', 'Connexion');

    const callback = (authorizationCode:string) => {
        // Authorisation code is received, lets your backend get an oauth token and implement your business logic
    }

    useEffect(() => {
        const MyButton:HTMLButtonElement = AuthenticatorButton.render(ButtonModel, callback);
        ref.current.appendChild(MyButton);
    }, []);

    // @ts-ignore
    return <div ref={ ref } />
}
```

###Add to your redirection page, the transition mechanism of the authorization code
```
import {IProvider} from "./interfaces/IProvider";
import {ProviderCallbackStatusEnum} from "./enums/status.enum";
import {AuthenticatorPage} from '@foxnot/fiducial-oauth';

export class FiducialProvider implements IProvider
{
    execute(args?:any):ProviderCallbackStatusEnum {
        AuthenticatorPage.execute();
        return ProviderCallbackStatusEnum.SUCCESS;
    }

    getArgs(): any {
        return;
    }
}
```
