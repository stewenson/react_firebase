import React, {useContext, useEffect} from "react";
import '../../../Styles/DashBoardStyle/DashBoardStyle.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CollectionsIcon from '@material-ui/icons/Collections';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import QueueIcon from '@material-ui/icons/Queue';
import OutlineCard from "../../Card/OutlineCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTodo} from "../../../Redux/Actions/TodoActions/FetchAllTodo";
import {fetchCompleteTodo} from "../../../Redux/Actions/TodoActions/FetchCompleteTodo";
import {AuthContext} from "../../Auth/Auth/Auth";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Dashboard() {
    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const userId = currentUser.uid;
    const dispatch = useDispatch();
    const classes = useStyles();

    const loadData = () => {
        dispatch(fetchAllTodo(userId));
        dispatch(fetchCompleteTodo(userId))
    };

    useEffect(() => {
        loadData();
    },[]);

    const all = content.todo.fetchData.length;
    const complete = content.todo.completeTodo.length;
    const uncomplete = content.todo.fetchData.length - content.todo.completeTodo.length;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid id="todo" item xs={6} sm={3}>
                    {/*<a href="#/todo">*/}
                       <OutlineCard
                           icon={<CollectionsIcon fontSize={"large"}/>}
                           header={<a href="#/todo">Todo</a>}
                           sumtodo={"You have " + all + " Todo"}
                           complete={"Completed todo: " + complete}
                           uncomplete={"Uncomplete todo: " +  uncomplete}
                       />
                    {/*</a>*/}
                </Grid>
                <Grid item xs={6} sm={3}>
                    {/*<a href="#/movie">*/}
                       <OutlineCard
                           icon={<MovieCreationIcon fontSize={"large"} /> }
                           header={<a href="#/movie">Movie</a>}
                           text={"Movie app from omdbApi"}
                           linkText={"OMDb Api Link"}
                           linkToOmdb={"http://www.omdbapi.com/"}
                       />
                    {/*</a>*/}
                </Grid>
                <Grid item xs={6} sm={3}>
                    {/*<a href="#/blog">*/}
                    <OutlineCard
                        icon={<QueueIcon fontSize={"large"} /> }
                        header={<a href="#/blog">Blog</a>}
                        text={"Latest Post"}
                        totalPost={"Total Post"}
                    />
                    {/*</a>*/}
                </Grid>
            </Grid>
        </div>
    );
}