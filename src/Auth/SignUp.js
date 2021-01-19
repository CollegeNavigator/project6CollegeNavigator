import { Component, Fragment } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import firebase from '../Firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      userPassword: "",
      userConfirmPassword: "",
      userId: "",
      navigate: false,
      userSignedIn: false,
    };

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    console.log("eiei");
    return <Redirect to="/searchResults" />;
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userSignedIn: true });
        this.setState({ navigate: true });

        // User is signed in.
      } else {
        console.log("bakka to");
        this.setState({ userSignedIn: false });
        this.setState({ navigate: false });
        // No user is signed in.
      }
    });
  }

  // create a new user account
  addNewUser = (event) => {
    event.preventDefault();
    let email = this.state.userEmail;
    let password = this.state.userPassword;
    let confirmPassword = this.state.userConfirmPassword;

    console.log(email, "emailAC");
    console.log(password, "emailAC");
    console.log(confirmPassword, "emailAC");
    // check password regex and match
    // const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // let minNumberOfChars = 6;
    // let maxNumberOfChars = 16;
    // if(this.state.userPassword.length < minNumberOfChars){

    // }
    // if(this.state.userPassword.length > maxNumberOfChars){
    //     return error;
    // }
    // if()
    // if (this.state.userPassword !== this.state.userMatchPassword){
    //     alert('pasword do not match')
    //     return false;
    // } else
    // {
    //     return true;
    // }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        console.log(user);
        let userId = user.user.uid;
        this.setState({
          userId: userId,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.state.userId);
  };

  // create a guest unique user id that will help to have own list of favourite schools
  guestUserId() {
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let userId = user.user.uid;
        this.setState({
          userId: userId,
        });
      }
    });

    console.log(this.state.userId);
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
            <label htmlFor="userEmail">User Email</label>
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
            <label htmlFor="userConfirmPassword">Confirm Password</label>
            <input
              type="password"
              id="userConfirmPassword"
              value={this.state.userConfirmPassword}
              onChange={(event) =>
                this.setState({ userConfirmPassword: event.target.value })
              }
            />
            <button className="loginButton" onClick={this.addNewUser}>
              Submit
            </button>
            <p>Back to sign in</p>
            <button
              className="loginButton"
              onClick={() => this.props.displayCurrentComponent()}
            >
              Sign In
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

export default SignUp;