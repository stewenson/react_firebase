import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {FetchAllTodo} from "../../../Redux/Actions/TodoActions/FetchAllTodo";
import {FetchCompleteTodo} from "../../../Redux/Actions/TodoActions/FetchCompleteTodo";

export default function TodoInfo() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        dispatch(FetchAllTodo(currentUser.uid));
        dispatch(FetchCompleteTodo(currentUser.uid));
    },[]);

    const allTodo = content.todo.fetchData.length;
    const complete = content.todo.completeTodo.length;
    const uncomplete = content.todo.fetchData.length - content.todo.completeTodo.length;

    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" color="primary" gutterBottom>
                <div>
                    <Link to="/todo" >
                        Todo list
                    </Link>
                </div>
            </Typography>
            <Typography component="p" variant="h5">
                All todo: {allTodo}
            </Typography>
            <Typography component="p" variant="h5">
                Complete: {complete}
            </Typography>
            <Typography component="p" variant="h5">
                Unomplete: {uncomplete}
            </Typography>
        </React.Fragment>
    );
}