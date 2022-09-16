import './App.css';
import React from "react";
import {HomePage} from './pages/homepage/homepage.component'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';
import Header from './component/header/header.component'
import SignIn from './pages/signin/signin.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {onSnapshot} from 'firebase/firestore';


import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'

import {selectCurrentUser} from './redux/user/user.selectors'

import CheckoutPage from './pages/checkout/checkout.component';
import CategoryPage from './pages/category/category.component';

class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (doc) =>{
          setCurrentUser({
            id: doc.id,
             ...doc.data()
          });
       
        });
        
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
          <Router>
            <Header />
             <Routes>
                <Route  path='/' element= {<HomePage/>}/>
                <Route  path='/shop' element= {<ShopPage/>}/>
                <Route exact path='/signin' element = {this.props.currentUser ? (<Navigate to='/'/>) : (<SignIn/>)}/>
                <Route  exact path='/checkout' element= {<CheckoutPage/>}/>
                <Route path={`/shop/:categoryId`} element={<CategoryPage/>} />

             </Routes>
          </Router> 
        );
  }
}
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
    mapDispatchToProps)(App);

