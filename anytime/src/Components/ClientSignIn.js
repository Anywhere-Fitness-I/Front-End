import React from 'react';
import {Link} from 'react-router-dom'
import Blankprofile from '../Images/Blankprofile.png';
import styled from 'styled-components';
import workoutclassroom from '../Images/workoutclassroom.jpg'

function ClientSignIn(props) {
    const {signIn, onSignInChange} = props
    return (
    <form>
        <FormContainer>
            <MainDiv>
                <h2>Sign In</h2>
            <SignInContainer>
                <input placeholder="Email" name="email" value={signIn.email} onChange={onSignInChange}/>
                <input placeholder="Password" name="password" value={signIn.password} onChange={onSignInChange}/>
                <button>Sign In</button>
            </SignInContainer>
            <SignUp>
                <Link to='/SignUp'>
                <h3>Need to sign up?</h3> 
                </Link>
            </SignUp> 
            </MainDiv>
        </FormContainer>
    </form>
    )
}
const FormContainer = styled.div`
    background-image: url(${workoutclassroom});
    background-size: 100% 100%; 

`
const MainDiv = styled.div`
    text-align: center;
    outline: none;
    padding: 20% 0;

    h2{
        color: white;
        font-size: 2rem;
    }
`
const SignInContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        border: solid 1px #7146b8;
        border-radius: 4px;
        width:18%;
        outline: none;
    }

    button{
        background: linear-gradient(to right, #7146b8,#440d88);
        color: white;
        padding: 0.5% 4% 0.5% 4%;
        border-radius: 20px;
    }
`
const SignUp = styled.div`
        
        h3 {
        color:white;
        font-size: 50%;
    }

`
export default ClientSignIn;