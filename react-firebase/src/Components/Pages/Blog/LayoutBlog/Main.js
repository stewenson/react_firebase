// import React from "react";
// import {Route, Switch} from "react-router-dom";
// import AllPosts from "./AllPosts";
// import PrivateRoute from "../../Auth/PrivateRoute/PrivateRoute";
// import NewPost from "./NewPost";
// import MyPosts from "./MyPosts";
//
// export default function Main() {
//     return(
//         <div>
//             <Switch>
//                 <Route  path='/blog/allPosts' component={AllPosts} />
//                 <PrivateRoute  path='/blog/newPosts' component={NewPost} />
//                 <PrivateRoute  path='/blog/myPosts' component={MyPosts} />
//             </Switch>
//         </div>
//     )
// }
import React from 'react';
// import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "../../../Auth/PrivateRoute/PrivateRoute";
import AllPosts from "../AllPosts";
import NewPost from "../NewPost/NewPost";
import MyPosts from "../MyPosts";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export default function Main(props) {
    // const classes = useStyles();

    return (
        <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
                {props.title}
            </Typography>
            <Divider />
            <Switch>
                <Route  path='/blog/allPosts' component={AllPosts} />
                <PrivateRoute  path='/blog/newPosts' component={NewPost} />
                <PrivateRoute  path='/blog/myPosts' component={MyPosts} />
            </Switch>
        </Grid>
    );
}

// Main.propTypes = {
//     posts: PropTypes.array,
//     title: PropTypes.string,
// };