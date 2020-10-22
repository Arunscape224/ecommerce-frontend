import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../actions/nav.action'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { isAuthenticated } from '../helper_methods/index'
import {logoutUser} from '../actions/user.action'
import { useHistory } from 'react-router-dom'
import { faCartPlus, faUserCircle, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { itemTotal } from '../helper_methods/index'
import Logo from '../components/logo.component'

const Header = () => {
  const theme = useSelector(state => state.theme)
  const cartTotal = useSelector(state => state.cart)
  const navState = useSelector(state => state.isOpen)
  const dispatch = useDispatch()
  const history = useHistory()

  
  return (



  <Navbar expand="md" light style={{ backgroundColor: theme.header_color }} >

    <NavbarBrand href="/">
        <Logo />
    </NavbarBrand>

    <NavbarToggler style={{ color: theme.text_color }}  onClick={() => dispatch(toggleNav(navState.isOpen))} />

    <Collapse isOpen={navState.isOpen} navbar>
      <Nav className="ml-auto" navbar>


        <NavItem>
          <NavLink style={{ color: theme.text_color, fontSize: '1.1em' }} href="/shop">shop</NavLink>
        </NavItem>
        <DropdownItem divider />
        <NavItem>
          <NavLink style={{ color: theme.text_color, fontSize: '1.1em' }} href="/#contact-form-container">contact</NavLink>
        </NavItem>
        <DropdownItem divider />

        


        {/* <NavItem className="nav-icons">
          <NavLink to="/cart" style={{ color: theme.text_color }}>
            <FontAwesomeIcon icon={faUserCircle}/>
          </NavLink>
        </NavItem> */}

        <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret style={{ color: theme.text_color }} className="nav-icons">
                <FontAwesomeIcon className="nav-icons" icon={faUserCircle}/>
              </DropdownToggle>
              <DropdownMenu right>
                
                {!isAuthenticated() && (
                    <DropdownItem style={{ color: theme.text_color }} onClick={() => history.push('/login')}>login</DropdownItem> 
                 )}
                 {isAuthenticated() && (
                    <DropdownItem style={{ color: theme.text_color }} onClick={() => dispatch(logoutUser()).then(() => history.push('/'))}>logout</DropdownItem>
                 )}
                
                
                {/* <DropdownItem>
                  Option 2
                </DropdownItem> */}

                 {
                 isAuthenticated() && (
                  <>
                    <DropdownItem divider />
                    { isAuthenticated().user.admin ? 
                    
                      <DropdownItem style={{ color: theme.text_color }} onClick={() => history.push('/admin/dashboard')}>admin</DropdownItem> : 

                      <DropdownItem style={{ color: theme.text_color }} onClick={() => history.push('/user/dashboard')}>profile</DropdownItem> }
                  </>
                 )
                 
                 }

                 
          
              </DropdownMenu>
            </UncontrolledDropdown>

        <NavItem className="nav-icons">
              <NavLink href="/cart" onClick={() => itemTotal()} style={{ color: theme.text_color }}>
                <FontAwesomeIcon className="nav-icons" icon={faCartPlus}/> <sup><small className="cart-badge"><span className="font-weight-bold">{cartTotal}</span></small></sup>
              </NavLink>
        </NavItem>
        {/* <NavItem className="nav-icons">
        {theme.status === 'light' ?
                  <NavLink  className="d-flex align-items-center" onClick={() => dispatch(toggleTheme(darkMode)).then(() => {
                 
                    setTheme(darkMode)
                  })}><FontAwesomeIcon  style={{ color: theme.text_color }} className="nav-icons" icon={faMoon}/></NavLink> :
                  <NavLink  className="d-flex align-items-center" onClick={() => dispatch(toggleTheme(lightMode)).then(() => {
                  
                    setTheme(lightMode)
                  })}><FontAwesomeIcon  style={{ color: theme.text_color }} className="nav-icons" icon={faSun}/></NavLink>
                } 
            </NavItem> */}

                   
                
              


  
      </Nav>
    </Collapse>

  </Navbar>
  )
}

export default Header
