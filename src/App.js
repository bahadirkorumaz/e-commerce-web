import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { Route, Switch } from 'react-router-dom'

function App() {


  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async userAuth => {  //we need to unsubscribe when componentWillUnmount
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
    } else {
      setCurrentUser(userAuth) // set currentUser to null
    }
  })
  return () => {unsubscribe();}
  }, []
  );


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/signin' component={SignInSignUpPage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
