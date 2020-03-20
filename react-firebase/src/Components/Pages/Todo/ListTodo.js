import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {fetchAllTodo} from "../../../Redux/Actions/TodoActions/FetchAllTodo";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListData from "./ListData";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarIcon from "@material-ui/icons/Star";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// import '../../../Styles/TodoStyle/ListTodoStyle.scss';


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

export default function ListTodo() {

    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const classes = useStyles();
    const userId = currentUser.uid;
    const data = content.todo.fetchData;

    const loadData = () => {
        dispatch(fetchAllTodo(userId));
    };

    useEffect(() => {
        loadData();
    }, [content.todo.data, content.todo.complete, content.todo.delete]);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <ListData
                            data={data}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h3>Usage</h3>
                        <ListItem>
                            <ListItemIcon >
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="After click on star, todo will be changed to completed. Star will had yellow color."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon >
                                <DeleteIcon />
                            </ListItemIcon>
                            <ListItemText primary="After click on trash, todo will be deleted."/>
                        </ListItem>
                        <h3>Use technology</h3>
                        <ListItem>
                            <ListItemIcon >
                                <ArrowForwardIcon />
                            </ListItemIcon>
                            <ListItemText primary="React Hooks Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon >
                                <ArrowForwardIcon />
                            </ListItemIcon>
                            <ListItemText primary="React Redux React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon >
                                <ArrowForwardIcon />
                            </ListItemIcon>
                            <ListItemText primary="React Bootstrap The most popular front-end framework Rebuilt for React."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon >
                                <ArrowForwardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Material UI - React components for faster and easier web development. Build your own design system, or start with Material Design."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon >
                                <ArrowForwardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Google Firebase Build apps fast, without managing infrastructure Firebase gives you functionality like analytics,
                            databases, messaging and crash reporting so you can move quickly and focus on your users."/>
                        </ListItem>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};