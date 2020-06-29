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

const Example = (props) => {

  const theme = useSelector(state => state.theme)
  const navState = useSelector(state => state.isOpen)
  const dispatch = useDispatch()

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
              <NavLink style={{ color: theme.text_color }} href="shop">shop</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{ color: theme.text_color }} nav caret>
                social
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{ color: theme.text_color }}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{ color: theme.text_color }}>
                  Option 2
                </DropdownItem>
                
                <DropdownItem style={{ color: theme.text_color }}>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              {theme.status === 'light' ?
                <button onClick={() => dispatch(toggleTheme(darkMode))}>Dark Mode</button> :
                <button onClick={() => dispatch(toggleTheme(lightMode))}>Light Mode</button>
              } 
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Example;
