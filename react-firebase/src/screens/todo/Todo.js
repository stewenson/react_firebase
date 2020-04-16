import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../Auth/Auth/Auth";
import {getAllTodoAction} from "./actions/getAllTodoAction";
import {GetCompleteAction} from "./actions/getCompleteAction";
import {clearMessageAction} from "./actions/clearMessageAction";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {AddTodoForm} from "./AddTodo/form/AddTodoForm";
import ListTodo from "./ListTodo";
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from "@material-ui/core/styles";
import FlashMessage from "react-flash-message";
import {Container} from "@material-ui/core";
import '../../Styles/TodoStyle/TodoStyle.scss';
import Alert from '@material-ui/lab/Alert';
import Copyright from "../../Components/Copyright/Copyright";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Todo() {
    const classes = useStyles();
    const content = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        dispatch(GetCompleteAction(currentUser.uid))
    },[content.complete, content.delete, dispatch, currentUser.uid])

    useEffect(() => {
        dispatch(getAllTodoAction(currentUser.uid))
    },[content.data, content.complete, content.delete, dispatch, currentUser.uid]);

    useEffect(() => {
        setTimeout(function(){
            dispatch(clearMessageAction());
            }, 4000);
    },[content.msg, dispatch])

    const allTodo = content.getAll.length;
    const complete = content.getComplete.length;

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Todo App
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className="Todo">
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={3}>
                            <Typography component="h1" align="center" variant="h6" gutterBottom>
                                All todo: {allTodo}    Complete:{complete}
                            </Typography>
                            <AddTodoForm />
                            {(content.msg === 'Todo was added') ?
                                <FlashMessage duration={3000}>
                                    <div className={classes.root}>
                                        <Alert variant="filled" severity="success">{content.msg}</Alert>
                                    </div>
                                </FlashMessage>
                                :
                                (content.msg === 'Todo was deleted') ?
                                    <FlashMessage duration={3000}>
                                        <div className={classes.root}>
                                            <Alert variant="filled" severity="error">{content.msg}</Alert>
                                        </div>
                                    </FlashMessage>
                                    :
                                    (content.msg === 'Todo was completed') ?
                                        <FlashMessage duration={3000}>
                                            <div className={classes.root}>
                                                <Alert variant="filled" severity="info">{content.msg}</Alert>
                                            </div>
                                        </FlashMessage>
                                        :
                                        null
                            }
                        </Grid>
                        <Grid item xs={12} md={8} lg={9}>
                            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                <Link to='/'><HomeIcon /> Back to Home</Link>
                            </Typography>
                            <Paper elevation={3}>
                                <ListTodo
                                    getAll={content.getAll}
                                    getComplete={content.getComplete}
                                    unComplete={content.unComplete}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </React.Fragment>
    );
}
