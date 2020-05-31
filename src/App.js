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

class App extends React.Component {
  constructor() {
    super();

    this.state =  {
      currentUser: null
    }
  }

  unsubsribleFromAuth = null;

  componentDidMount() {
    this.unsubsribleFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If there is a user logged in
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          // Setstate is async
          this.setState({
            currentUser: snapshot.id,
            ...snapshot.data()
          }, () => {
            console.log(this.state);
          })
        });
      }
      // If there is no current user
      else {
        this.setState({ currentUser: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubsribleFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
