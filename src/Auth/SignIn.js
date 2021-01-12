import { Component, Fragment } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import firebase from '../Firebase';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: "",
      userPassword: "",
      userId: "",
    };
    // this.routeChange = this.routeChange.bind(this);
  }

  // routeChange() {
  //     let path = '/project6CollegeNavigator/singUp';
  //     this.props.history.push(path);
  // }
  signInUser = (e) => {
    e.preventDefault();
    let email = this.state.userEmail;
    let password = this.state.userPassword;

    console.log(email, password, "test");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        let userId = user.user.uid;
        console.log(userId, 'inside');
        this.setState({
          userId: userId,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

// create a guest unique user id that will help to have own list of favourite schools
//   guestUserId() {
//     firebase.auth().signInAnonymously();
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         let userId = user.user.uid;
//         this.setState({
//           userId: userId,
//         });
//       }
//     });

//     console.log(this.state.userId, 'guestid');
//   }

  render() {
    return (
      <Fragment>
        <div className="loginForm">
          <form>
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
            <button className="loginButton" onClick={this.signInUser}>
              Sign In
            </button>
            <p>Don't have an account yet? Registar now</p>
            <button
              className="signUp"
              onClick={() => this.props.displayCurrentComponent()}
              type="button"
            >
              Sign Up
            </button>
            {/* <NavLink activeClassName="active" to="/project6CollegeNavigator"> */}
              <button onClick={() => this.guestUserId()}>
                {" "}
                Enter as a Guest
              </button>
            {/* </NavLink> */}
            <p>Forgot your password?</p>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default SignIn;