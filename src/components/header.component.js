import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../actions/theme.action'
import { toggleNav } from '../actions/nav.action'
import { lightMode, darkMode } from '../theme'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { isAuthenticated } from '../helper_methods/index'
import {logoutUser} from '../actions/user.action'
import { useHistory } from 'react-router-dom'

const Header = (props) => {

  const theme = useSelector(state => state.theme)
  const navState = useSelector(state => state.isOpen)
  const dispatch = useDispatch()
  const history = useHistory()
  
  return (
      <Navbar light expand="md" style={{ backgroundColor: theme.background_color }}>
        <NavbarBrand href="/" style={{color: theme.text_color}}>ecommerce</NavbarBrand>
        <NavbarToggler onClick={() => dispatch(toggleNav(navState.isOpen))} />
        <Collapse isOpen={navState.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: theme.text_color }} href="/about">about</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink style={{ color: theme.text_color }} href="/shop">shop</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{ color: theme.text_color }} nav caret>
                user
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{ color: theme.text_color }}>
                
              {!isAuthenticated() && (
                 <NavLink style={{ color: theme.text_color }} href='login'>login</NavLink> 
              )}
              {isAuthenticated() && (
                 <DropdownItem onClick={() => dispatch(logoutUser()).then(() => history.push('/'))}>logout</DropdownItem>
              )}
           
                </DropdownItem>
                <DropdownItem style={{ color: theme.text_color }}>
                
              <NavLink style={{ color: theme.text_color }} href="signup">signup</NavLink>
            
                </DropdownItem>
                
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              {theme.status === 'light' ?
                <DropdownItem style={{ backgroundColor: theme.text_color, color: 'white' }} onClick={() => dispatch(toggleTheme(darkMode))}>Dark Mode</DropdownItem> :
                <DropdownItem style={{ backgroundColor: theme.text_color, color: 'white' }} onClick={() => dispatch(toggleTheme(lightMode))}>Light Mode</DropdownItem>
              } 
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;
