import { Component, Fragment } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import firebase from '../Firebase';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js'

//define global variables
const SIGNIN = 'SIGNIN';
const SIGNUP = 'SIGNUP';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            currentComponent: SIGNIN,//by deafault it will display signIn page            
            userEmail: '',
            userPassword: ''
        };

        this.showComponent = this.showComponent.bind(this);
    }

    // function to display SIGNIN or SIGNUP component
    showComponent(name){
        this.setState({
            currentComponent:name,
        })        
    }

    
    render(){
        return(           
            <Fragment>
                
                {this.state.currentComponent === SIGNIN &&
                    (
                        <SignIn
                        displayCurrentComponent={() => this.showComponent(SIGNUP)}
                        />
                    )
                }
                {this.state.currentComponent === SIGNUP &&
                    (
                        <SignUp
                        displayCurrentComponent={() => this.showComponent(SIGNIN)}
                        />
                    )
                }
                
            </Fragment>
           
        )
    }
}

export default Login;