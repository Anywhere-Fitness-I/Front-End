import React, {useState} from 'react';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

const SignIn = (props) => {
    const [userInput, setUserInput] = useState({
        email: '', password: ''
    });

    const handleChange = e => {
        setUserInput({...userInput, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth().post('/api/auth/login', userInput)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            props.history.push('/Classes')
        })
        .catch(err => {
            console.log(err);
            alert('Incorrect Login');
        })
    }

    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' label='email' value={userInput.email} onChange={handleChange} required/>
                <FormInput name='password' type='password' label='password' value={userInput.password} onChange={handleChange} required/>
                <div className='button'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                </div>

            </form>
        </div>
    )
}

export default SignIn;