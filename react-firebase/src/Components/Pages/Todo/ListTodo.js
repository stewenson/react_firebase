import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {fetchAllTodo} from "../../../Redux/Actions/TodoActions/FetchAllTodo";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListData from "./ListData";
import '../../../Styles/TodoStyle/ListTodoStyle.scss';


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
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
        </div>
    )
};