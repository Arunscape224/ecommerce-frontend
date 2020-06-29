import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './pages/user/signup.page'
import Login from './pages/user/login.page'
import Home from './pages/home.page'
import About from './pages/about.page'
import Contact from './pages/contact.page'
import Shop from './pages/shop.page'
import Header from './components/header.component'

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/login" exact component = { Login } />
            <Route path="/signup" exact component = { Signup } />
            <Route path="/" exact component = { Home } />
            <Route path="/about" exact component = { About } />
            <Route path="/contact" exact component = { Contact } />
            <Route path="/shop" exact component = { Shop } />
        </Switch>
    </BrowserRouter>
)

export default Routes