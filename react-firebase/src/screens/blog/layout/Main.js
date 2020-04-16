import React from 'react';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "../../Auth/PrivateRoute/PrivateRoute";
import AllPosts from "../posts/AllPosts";
import NewPost from "../posts/newPost/NewPost";
import MyPosts from "../posts/MyPosts";
import DetailPost from "../posts/DetailPost";
import EditPost from "../posts/editPost/EditPost";
import CategoryPost from "../posts/CategoryPost";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import notFound from "../../404/notFound";

export default function Main(props) {
    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {props.title}
            </Typography>
            <Divider />
            <Grid item xs={12}>
                <Switch>
                    <Route  path='/blog/allPosts' component={AllPosts} />
                    <Route  path="/blog/detailPost/:id" component={DetailPost} />
                    <Route  path='/blog/posts/:category' component={CategoryPost} />
                    <PrivateRoute  path="/blog/editPost/:id" component={EditPost} />
                    <PrivateRoute  path='/blog/newPosts' component={NewPost} />
                    <PrivateRoute  path='/blog/myPosts' component={MyPosts} />
                    <Route exact component={notFound} />
                </Switch>
            </Grid>
        </Grid>
    );
}
