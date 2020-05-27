import React from 'react';
import {Link} from 'react-router-dom'


function ClientSignUP(props) {
    const {signUp, onSignUpChange, onSubmit, disabled, errors} = props
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div>
                <div>{errors.firstName}</div>
                <div>{errors.lastName}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.confirmPassword}</div>
                <div>{errors.role}</div>
            </div>
        <div>
            <input placeholder="First Name" name="firstName" value={signUp.firstname} onChange={onSignUpChange}/>
            <input placeholder="Last Name" name="lastName" value={signUp.lastname} onChange={onSignUpChange}/>
            <input placeholder="Email" name="email" value={signUp.email} onChange={onSignUpChange}/>
            <input placeholder="Password" name="password" value={signUp.password} onChange={onSignUpChange} type="password"/>
            <input placeholder="Confirm Password" name="confirmPassword" value={signUp.confirm} onChange={onSignUpChange} type="password"/>
            <select value={signUp.role} onChange={onSignUpChange} name="role">
                <option value=''>- Select Role -</option>
                <option value='Instructor'>Instructor</option>
                <option value='Client'>Client</option>
            </select>
            <button disabled={disabled}>Submit</button>
        </div>
    </form>
    )
}
export default ClientSignUP;