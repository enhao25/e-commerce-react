import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { auth } from "../../Firebase/Firebase";

import { ReactComponent as Logo } from '../../Assets/crown.svg'

import './Header.scss';
import CartIcon from "../Cart-Icon/Cart-Icon";
import CartDropdown from '../Cart-dropdown/Cart-dropdown';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className="option" to="/shop"> SHOP </Link>
            <Link className="option" to="/contact"> CONTACT </Link>
            {
                currentUser ? 
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT </div>) :
                    (<Link className="option" to="/signin">SIGN IN</Link>)
            }
        <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

// From state, we will get the root reducer, then get the user and currentUser
// mapStateToProps is the common naming convention for this function for connect
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);