import React from "react";
import ListTodo from "./ListTodo";
import AddTodoForm from "./Form/AddTodoForm";
import '../../../Styles/TodoStyle/AddTodoStyle.scss';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import AboutTodo from "./AboutTodo";

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

function Todo() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const todoFixedPaper = clsx(classes.paper);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={7}>
                <Paper className={todoFixedPaper}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Add new Todo
                    </Typography>
                    <AddTodoForm />
                    <ListTodo />
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
export default Todo;