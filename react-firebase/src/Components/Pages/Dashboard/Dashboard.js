import React, {useContext, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TodoInfo from './TodoInfo';
import BlogInfo from "./BlogInfo";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {FetchAllPosts} from "../../../Redux/Actions/BlogActions/FechAllPost";
import {FetchUserPosts} from "../../../Redux/Actions/BlogActions/FetchUserPosts";
import {FetchAllTodo} from "../../../Redux/Actions/TodoActions/FetchAllTodo";
import {FetchCompleteTodo} from "../../../Redux/Actions/TodoActions/FetchCompleteTodo";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser.uid;

    useEffect(() => {
        dispatch(FetchAllPosts());
        dispatch(FetchUserPosts(userId));
        dispatch(FetchAllTodo(userId));
        dispatch(FetchCompleteTodo(userId));
    },[dispatch, userId]);

    const allPosts = content.blog.fetchAllPost.length;
    const userPosts = content.blog.userPosts.length;
    const allTodo = content.todo.fetchData.length;
    const complete = content.todo.completeTodo.length;
    const uncomplete = content.todo.fetchData.length - content.todo.completeTodo.length;

    return (
       <div>
           <Grid container spacing={3}>
                {/*Todo Info Card */}
               <Grid item xs={12} md={4} lg={3}>
                   <Paper className={fixedHeightPaper}>
                       <TodoInfo allTodo={allTodo}
                                 complete={complete}
                                 uncomplete={uncomplete}
                       />
                   </Paper>
               </Grid>
               {/*Blog info Card*/}
               <Grid item xs={12} md={4} lg={3}>
                   <Paper className={fixedHeightPaper}>
                       <BlogInfo allPosts={allPosts}
                                 userPosts={userPosts}
                                 userName={currentUser.displayName}
                                 className={fixedHeightPaper}
                       />
                   </Paper>
               </Grid>
           </Grid>
       </div>
    );
}
