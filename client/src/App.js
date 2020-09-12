import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/static/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { startUserLogout } from './actions/userAction'
import productReviews from './components/productReviews/productReviews'

function App(props){
    const handleLogout = () =>{
        props.dispatch(startUserLogout())
    }
    return (
        <BrowserRouter>
            <div>
                <h1>Product Reviews</h1>
                <Link to="/" className="button">Home</Link>
                {
                    Object.keys(props.user).length !==0 ?(
                        <div>
                            <Link to= "/account" className="button">Account</Link>
                            <Link to= "#" onClick={handleLogout} className="button">Logout</Link>
                            <Link to ="/productReviews/productReviews" className="button">Product Reviews</Link>

                        </div>
                    ) : (
                        <div>
                            <Link to= "/users/register" className="button">Register</Link>
                            <Link to= "/users/Login" className="button">Login</Link>
                        </div>
                    )
                }
                <Switch>
                    <Route path= "/" component={Home} exact = {true}></Route>
                    <Route path= "/users/register" component = {Register}></Route>
                    <Route path= "/users/login" component = {Login}></Route>
                    <Route path= "/productReviews/productReviews" component = {productReviews}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(App)