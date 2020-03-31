import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "../../../Auth/PrivateRoute/PrivateRoute";
import AllPosts from "../AllPosts";
import NewPost from "../NewPost/NewPost";
import MyPosts from "../MyPosts";
import DetailPost from "../DetailPost";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
                    <PrivateRoute  path='/blog/newPosts' component={NewPost} />
                    <PrivateRoute  path='/blog/myPosts' component={MyPosts} />
                </Switch>
            </Grid>
        </Grid>
    );
}

Main.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};