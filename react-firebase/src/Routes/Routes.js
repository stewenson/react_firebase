import React from "react";
import PrivateRoute from "../screens/Auth/PrivateRoute/PrivateRoute";
import Movie from "../screens/movie/Movie";
import {Route, Switch} from "react-router-dom";
import Home from "../screens/Home/Home";
import SignIn from "../screens/Auth/SignIn/SignIn";
import SignUP from "../screens/Auth/SignUp/SignUP";
import PasswordReset from "../screens/Auth/PasswordReset/PasswordReset";
import Blog  from "../screens/blog/Blog";
import iTunes from "../screens/iTunes/iTunes";
import Todo from "../screens/todo/Todo";
import notFound from "../screens/404/notFound";
import MovieDbApi from "../screens/MovieDBApi/MovieDbApi";

export default function Routes() {

    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <PrivateRoute  path='/todo' component={Todo} />
                <Route exact path='/movie/' component={Movie} />
                <Route  path='/tmdbapi' component={MovieDbApi} />
                <Route  path='/login' component={SignIn} />
                <Route exact path='/registration' component={SignUP} />
                <Route exact path='/password_reset' component={PasswordReset} />
                <Route path='/blog' component={Blog} />
                <Route  path='/iTunes' component={iTunes} />
                <Route component={notFound} />
            </Switch>
        </div>
    )
}
