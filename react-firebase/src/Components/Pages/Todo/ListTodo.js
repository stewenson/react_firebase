import React, {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {FetchAllTodo} from "../../../Redux/Actions/TodoActions/FetchAllTodo";
import ListData from "./ListData";
import '../../../Styles/TodoStyle/ListTodoStyle.scss';
import Typography from "@material-ui/core/Typography";
import FlashMessage from "react-flash-message";

export default function ListTodo() {
    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const userId = currentUser.uid;
    const data = content.todo.fetchData;

    const loadData = () => {
        dispatch(FetchAllTodo(userId));
    };

    useEffect(() => {
        loadData();
    }, [content.todo.data, content.todo.complete, content.todo.delete]);

    let newTodo;
    if (content.todo.msg != null) {
        newTodo = content.todo.msg;
    }
    return (
        <React.Fragment>
            <Typography component="h1" variant="h5">
                <FlashMessage duration={5000}>
                    <strong>{newTodo}</strong>
                </FlashMessage>
            </Typography>
            <Typography variant="h5">
                <ListData
                    data={data}
                />
            </Typography>
        </React.Fragment>

    )
};