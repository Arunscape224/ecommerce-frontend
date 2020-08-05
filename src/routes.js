import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './pages/user/signup.page'
import Login from './pages/user/login.page'
import Product from './pages/product.page'
import Home from './pages/home.page'
import About from './pages/about.page'
import Contact from './pages/contact.page'
import Shop from './pages/shop.page'
import Header from './components/header.component'
import PrivateRoute from './components/auth/PrivateRoute.component'
import AdminRoute from './components/auth/AdminRoute.component'
import Dashboard from './pages/user/dashboard.page'
import AdminDashboard from './pages/admin/dashboard.page'
import CreateProduct from './pages/admin/create_product.page'
import CreateCategory from './pages/admin/create_category.page'
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
            <Route path="/product/:productId" exact component = { Product } />
            <PrivateRoute path="/user/dashboard" exact component = { Dashboard } />
            <AdminRoute path="/admin/dashboard" exact component = { AdminDashboard } />
            <AdminRoute path="/admin/create/product" exact component = { CreateProduct } />
            <AdminRoute path="/admin/create/category" exact component = { CreateCategory } />
        </Switch>
    </BrowserRouter>
)

export default Routes