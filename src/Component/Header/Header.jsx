import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from "../../Firebase/Firebase";

import { ReactComponent as Logo } from '../../Assets/crown.svg'

// import './Header.scss';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.styles'

import CartIcon from "../Cart-Icon/Cart-Icon";
import CartDropdown from '../Cart-dropdown/Cart-dropdown';
import { selectCurrentUser } from '../../Redux/user/user-selector';
import { selectCartHidden } from '../../Redux/cart/cart.selector';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop"> SHOP </OptionLink>
            <OptionLink to="/contact"> CONTACT </OptionLink>
            {
                currentUser ? 
                    (<OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT </OptionLink>) :
                    (<OptionLink to="/signin">SIGN IN</OptionLink>)
            }
        <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

// From state, we will get the root reducer, then get the user and currentUser
// mapStateToProps is the common naming convention for this function for connect
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

export default connect(mapStateToProps)(Header);