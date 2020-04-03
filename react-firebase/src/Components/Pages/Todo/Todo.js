import React, {useContext, useEffect} from "react";
import ListTodo from "./ListTodo";
import AddTodoForm from "./Form/AddTodoForm";
import '../../../Styles/TodoStyle/AddTodoStyle.scss';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import AboutTodo from "./AboutTodo";
import {AuthContext} from "../../Auth/Auth/Auth";
import {useDispatch, useSelector} from "react-redux";
import {FetchAllTodo} from "../../../Redux/Actions/TodoActions/FetchAllTodo";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(1),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: '100%',
    },
}));

export default function Todo() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const todoFixedPaper = clsx(classes.paper);
    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const userId = currentUser.uid;

    useEffect(() => {
        const loadData = () => {
            dispatch(FetchAllTodo(userId));
        };
        loadData();
    }, [dispatch, userId,content.todo.data, content.todo.complete, content.todo.delete]);

    const data = content.todo.fetchData;
    let msg;
    if (content.todo.msg != null) {
        msg = content.todo.msg;
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={7}>
                <Paper className={todoFixedPaper}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Add new Todo
                    </Typography>
                    <AddTodoForm />
                    <ListTodo msg={msg} data={data}/>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <Paper className={fixedHeightPaper}>
                    <AboutTodo />
                </Paper>
            </Grid>
        </Grid>
    )
}
