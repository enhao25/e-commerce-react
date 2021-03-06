import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import HomePage from './Page/HomePage/HomePage';
import ShopPage from './Page/Shop/shop';
import Header from './Component/Header/Header';
import SignInAndSignUp from './Page/SignIn-SignUpPage/SignIn-SignUpPage';

import { auth, CreateUserProfileDocument } from './Firebase/Firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './Redux/user/user-action'
import { selectCurrentUser } from './Redux/user/user-selector';
import CheckoutPage from './Page/Checkout/Checkout';

// import { selectCollectionsForPreview } from './Redux/shop/shop.selector'

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
          })
        });
      }
      // If there is no current user
      else {
        // userAuth will be null in this case
        setCurrentUser(userAuth);
        // This code is to add the collectionsArray into the firebase automatically without us manually entering the data
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items}) ));
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
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  // setCurrentUser(user) returns the object with type and payload before we dispatch the action
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// First arguement is the mapStateToProps as we don't need any state
// Second arguement is the mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
