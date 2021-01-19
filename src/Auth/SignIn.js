import { Component, Fragment } from 'react';
import { NavLink, Redirect, withRouter,useHistory } from 'react-router-dom';
import firebase from '../Firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      userPassword: "",
      userId: "",
      navigate:false,
      userSignedIn:false
    };
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    console.log('eiei')      
    return <Redirect  to="/searchResults" />;
  }

    componentDidMount() {
        
        firebase.auth().onAuthStateChanged((user)=> {
          if (user) {
            
            this.setState({ userSignedIn: true });
            this.setState({ navigate: true });
            
            // User is signed in.
          } else {
              console.log('bakka to')
              this.setState({ userSignedIn: false });
              this.setState({ navigate: false });
            // No user is signed in.
          }
        });
      
      
      }
  signInUser = (e) => {
    e.preventDefault();
    let email = this.state.userEmail;
    let password = this.state.userPassword;

    console.log(email, password, "test");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("testc",user);
        let userId = user.user.uid || '';
        console.log(userId, 'inside');
        this.setState({
          userId: userId,
        });
       this.setState({ navigate: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

// create a guest unique user id that will help to have own list of favourite schools
  guestUserId() {
    
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let userId = user.user.uid;
        this.setState({
          userSignedIn: true,
          userId: userId,
        });
      }
    });

    // this.stateState({userSignedIn: true})
    console.log(this.state.userId, 'guestid');
  }

  render() {
    if(this.state.navigate||this.state.userSignedIn){
     return this.routeChange()

    }else{
    return (
      <Fragment>
        <div className="loginSection">
          <form className="loginForm">
            <FontAwesomeIcon className="icons" icon={faUserGraduate} />
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              id="userEmail"
              value={this.state.userEmail}
              onChange={(event) =>
                this.setState({ userEmail: event.target.value })
              }
            />
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              id="userPassword"
              value={this.state.userPassword}
              onChange={(event) =>
                this.setState({ userPassword: event.target.value })
              }
            />
            <button className="loginButton signIn" onClick={this.signInUser}>
              Sign In
            </button>
            <p>Don't have an account yet? Registar now</p>
            <button
              className="loginButton signUp"
              onClick={() => this.props.displayCurrentComponent()}
              type="button"
            >
              Sign Up
            </button>

            <button className="loginButton" onClick={() => this.guestUserId()}>
              Enter as a Guest
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

}

export default SignIn;