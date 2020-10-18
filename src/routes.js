import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './pages/user/signup.page'
import { useSelector } from 'react-redux'
import Login from './pages/user/login.page'
import Product from './pages/product.page'
import Home from './pages/home.page'
import Shop from './pages/shop.page'
import Header from './components/header.component'
import Footer from './components/footer.component'
import PrivateRoute from './components/auth/PrivateRoute.component'
import AdminRoute from './components/auth/AdminRoute.component'
import Dashboard from './pages/user/dashboard.page'
import UpdateUser from './pages/user/updateUser.page'
import AdminDashboard from './pages/admin/dashboard.page'
import CreateProduct from './pages/admin/create_product.page'
import CreateCategory from './pages/admin/create_category.page'
import ManageProducts from './pages/admin/manage_products.page'
import Cart from './pages/cart.page'
import { BodyWrapper } from './components/styles/body_wrapper.styles'
import UpdateProduct from './pages/admin/update_product.page'

const Routes = () => {
    const theme = useSelector(state => state.theme)
    return (
        <BodyWrapper backgroundColor={theme.background_color}>
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/login" exact component = { Login } />
            <Route path="/signup" exact component = { Signup } />
            <Route path="/" exact component = { Home } />
            <Route path="/shop" exact component = { Shop } />
            <Route path="/cart" exact component = { Cart } />
            <Route path="/product/:productId" exact component = { Product } />
            <PrivateRoute path="/user/dashboard" exact component = { Dashboard } />
            <PrivateRoute path="/dashboard/update/:userId" exact component = { UpdateUser } />
            <AdminRoute path="/admin/dashboard" exact component = { AdminDashboard } />
            <AdminRoute path="/admin/create/product" exact component = { CreateProduct } />
            <AdminRoute path="/admin/create/category" exact component = { CreateCategory } />
            <AdminRoute path="/admin/manage/products" exact component = { ManageProducts } />
            <AdminRoute path="/admin/update/product/:productId" exact component = { UpdateProduct } />
        </Switch>
        <Footer />
    </BrowserRouter>
    </BodyWrapper>
    )
}

export default Routes