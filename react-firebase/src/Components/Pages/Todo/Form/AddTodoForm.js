import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import {useFormik} from "formik";
import { createTodo } from "../../../../Redux/Actions/TodoActions/createTodo";
import {AuthContext} from "../../../Auth/Auth/Auth";
import {useDispatch} from "react-redux";
import '../../../../Styles/TodoStyle/AddTodoStyle.scss';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 450,
        },
    },
}));
export default function AddTodoForm() {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const complete = false;
    const userId = currentUser.uid;

    const addTodo = values => {
        try {
            dispatch(createTodo([values.todo, userId, complete]));
            values.todo = ' ';
        } catch (e) {
            alert(e.message);
        }
    };

    const validate  = values => {
        const errors = {};
        if (!values.todo) {
            errors.todo = 'Required';
        } else if (values.todo.length <= 3) {
            errors.todo = 'Todo must have 3 or more characters.';
        } else if (!/^[a-zA-Z,/: ]*$/.test(values.todo)) {
            errors.todo = 'Wrong todo';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            todo: '',
        },
        validate,
        onSubmit: addTodo,
    });

    return (
        <form className={classes.root} onSubmit={formik.handleSubmit}>
            <TextField
                id="outlined-full-width"
                label={formik.errors.todo}
                name="todo"
                type="text"
                error={formik.errors.todo ? true : null}
                helperText={formik.errors.todo}
                onChange={formik.handleChange}
                value={formik.values.todo}
                placeholder={"Enter new todo"}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </form>
    )
}