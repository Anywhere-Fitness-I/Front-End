import React from 'react';
import {Link} from 'react-router-dom'


function ClientSignIn(props) {
    const {signIn, onSignInChange} = props
    return (
        <div>
         
            <input placeholder="Email" name="Sign In Email" value={signIn.email} onChange={onSignInChange}/>
            <input placeholder="Password" name="Sign In Password" value={signIn.password} onChange={onSignInChange}/>
          
            <button>Sign In</button>
        </div>
    )
}
export default ClientSignIn;