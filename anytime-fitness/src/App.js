import React from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './components/header/header.component';
import ClassesPage from './pages/classes-page/classes-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {setCurrentUser} from './redux/user/user.action';
// import { axiosWithAuth } from './utils/axiosWithAuth';

class App extends React.Component{
  componentDidMount(){

  }
  render(){
    return (
      <div >
       <Header />
        <Switch>
         {/* <Route exact path='/' component={HomePage}/> */}
         <Route path='/Classes' component={ClassesPage}/>
         <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
       </Switch>
     </div>
  );
}
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

