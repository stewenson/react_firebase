import React from "react";
import {Route, Switch} from "react-router-dom";
import AllPosts from "./AllPosts";
import PrivateRoute from "../../Auth/PrivateRoute/PrivateRoute";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";

export default function Main() {
    return(
        <div>
            <Switch>
                <Route  path='/blog/allPosts' component={AllPosts} />
                <PrivateRoute  path='/blog/newPosts' component={NewPost} />
                <PrivateRoute  path='/blog/myPosts' component={MyPosts} />
            </Switch>
        </div>
    )
}