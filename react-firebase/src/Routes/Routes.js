import React from "react";
import PrivateRoute from "../Components/Auth/PrivateRoute/PrivateRoute";
import Profile from "../Components/Pages/Profile/Profile";
import Todo from "../Components/Pages/Todo/Todo";
import Movie from "../Components/Pages/Movies/Movie";
import {Route} from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Auth/SignIn/SignIn";
import SignUP from "../Components/Auth/SignUp/SignUP";
import PasswordReset from "../Components/Auth/PasswordReset/PasswordReset";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import Blog  from "../Components/Pages/Blog/Blog";
import iTunes from "../Components/Pages/iTunes/iTunes";

export default function Routes() {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/todo' component={Todo} />
            <Route  path='/movie' component={Movie} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/registration' component={SignUP} />
            <Route exact path='/password_reset' component={PasswordReset} />
            <Route  path='/blog' component={Blog} />
            <Route  path='/iTunes' component={iTunes} />
        </div>
    )
}
