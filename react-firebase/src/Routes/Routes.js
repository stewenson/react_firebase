import React from "react";
import PrivateRoute from "../Components/Auth/PrivateRoute/PrivateRoute";
import Profile from "../Components/Pages/Profile/Profile";
import Todo from "../Components/Pages/Todo/Todo";
import Movie from "../Components/Pages/Movies/Movie";
import {Route} from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";
import PasswordReset from "../Components/Auth/PasswordReset/PasswordReset";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import Blog  from "../Components/Pages/Blog/Blog";

export default function Routes() {

    return (
        <div>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/todo' component={Todo} />
            <PrivateRoute exact path='/movie' component={Movie} />
            <PrivateRoute exact path='/blog' component={Blog} />
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={Register} />
            <Route exact path='/password_reset' component={PasswordReset} />
        </div>
    )
}
