import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {useFormik} from "formik";
import { createTodo } from "../../../../Redux/Actions/TodoActions/createTodo";
import {AuthContext} from "../../../Auth/Auth/Auth";
import {useDispatch} from "react-redux";
import '../../../../Styles/TodoStyle/AddTodoStyle.scss';


export default function AddTodoForm() {
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
        } else if (!/^[a-žA-Ž,/: ]*$/.test(values.todo)) {
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
            <form  onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
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

                    variant="outlined"
                />
            </form>
    )
}