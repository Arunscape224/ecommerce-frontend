import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleNav } from '../actions/nav.action'
import { toggleTheme } from '../actions/theme.action'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { isAuthenticated } from '../helper_methods/index'
import {logoutUser} from '../actions/user.action'
import { useHistory } from 'react-router-dom'
import { faCartPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { itemTotal } from '../helper_methods/index'
import { darkMode, lightMode } from '../theme'
import {getTheme} from '../helper_methods/index'

const Header = () => {

  const theme = useSelector(state => state.theme)
  const navState = useSelector(state => state.isOpen)
  const dispatch = useDispatch()
  const history = useHistory()
  const mode = getTheme(theme)
  return (
      <Navbar onClick={() => console.log(mode)} light expand="md" style={{ backgroundColor: mode.background_color }}>
        <NavbarBrand href="/" style={{color: mode.text_color}}>ecommerce</NavbarBrand>
        <NavbarToggler onClick={() => dispatch(toggleNav(navState.isOpen))} />
        <Collapse isOpen={navState.isOpen} navbar>
          <Nav className="ml-auto" navbar>
         
            
            <NavItem>
              <NavLink style={{ color: mode.text_color }} href="/shop">shop</NavLink>
            </NavItem>
            
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{ color: mode.text_color }} nav caret>
                user
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{ color: mode.text_color }}>
                
              {!isAuthenticated() && (
                 <NavLink style={{ color: mode.text_color }} onClick={() => history.push('/login')}>login</NavLink> 
              )}
              {isAuthenticated() && (
                 <DropdownItem onClick={() => dispatch(logoutUser()).then(() => history.push('/'))}>logout</DropdownItem>
              )}
           
                </DropdownItem>
                <DropdownItem style={{ color: mode.text_color }}>
                
              <NavLink style={{ color: mode.text_color }} onClick={() => history.push('/signup')}>signup</NavLink>
            
                </DropdownItem>
                
               
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              {theme.status === 'light' ?
                <DropdownItem style={{ backgroundColor: mode.text_color, color: 'white' }} onClick={() => dispatch(toggleTheme(darkMode))}>Dark Mode</DropdownItem> :
                <DropdownItem style={{ backgroundColor: mode.text_color, color: 'white' }} onClick={() => dispatch(toggleTheme(lightMode))}>Light Mode</DropdownItem>
              } 
            </NavItem>

            <NavItem style={{fontSize: '1.5em'}} className="d-flex align-items-center ml-4">
              <div>
                <Link to="/cart" style={{ color: mode.text_color }}>
              <FontAwesomeIcon icon={faCartPlus}/> <sup><small className="cart-badge">{itemTotal()}</small></sup>
                </Link>
              </div>
            </NavItem>


           {
             isAuthenticated() ? 
             <NavItem style={{fontSize: '1.5em', color: mode.text_color}} className="d-flex align-items-center ml-2">

           <FontAwesomeIcon icon={faUserCircle}/>
            </NavItem> : <div></div>
           }
          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default Header
