import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HomePage from './Page/HomePage/HomePage';
import ShopPage from './Page/Shop/shop';
import Header from './Component/Header/Header';
import SignInAndSignUp from './Page/SignIn-SignUpPage/SignIn-SignUpPage';

import { auth, CreateUserProfileDocument } from './Firebase/Firebase';
import { connect } from 'react-redux';

import { setCurrentUser } from './Redux/user/user-action'

class App extends React.Component {
  /* Remove as we are using redux now
  constructor() {
    super();
    
    
    this.state =  {
      currentUser: null
    }
  }*/

  unsubsribleFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubsribleFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If there is a user logged in
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          // Setstate is async
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }, () => {
            console.log(this.state);
          })
        });
      }
      // If there is no current user
      else {
        setCurrentUser(null);
      }
    })
  }

  componentWillUnmount() {
    this.unsubsribleFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => ({
  // setCurrentUser(user) returns the object with type and payload before we dispatch the action
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// First arguement is the mapstatetoprops as we don't need any state
// Second arguement is the mapDispatchtoProps
export default connect(null, mapDispatchtoProps)(App);
