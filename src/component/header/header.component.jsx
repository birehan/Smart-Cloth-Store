import React from 'react'
import './header.style.css'
import {Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'

import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component.jsx'
import CartDropDown from '../cart/cart.component'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../redux/user/user.selectors'



const Header = ({currentUser, hidden}) => (
  <div className='header'>

    <Link to='/' className='logo-container'>
      <Logo className='logo'></Logo>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop' >SHOP</Link>
      <Link className='option' to='/shop' >SHOP</Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>
           Sign Out
        </div>
        :
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      } 
      <CartIcon />
    </div>
    {
    
    hidden ? null:  <CartDropDown/>
    }
  </div> 
)
const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);