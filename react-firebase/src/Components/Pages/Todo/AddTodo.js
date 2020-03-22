import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {useFormik} from "formik";
import { createTodo } from "../../../Redux/Actions/TodoActions/createTodo";
import {AuthContext} from "../../Auth/Auth/Auth";
import { useDispatch} from "react-redux";
import '../../../Styles/TodoStyle/AddTodoStyle.scss';


function AddTodo() {
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const complete = false;
    const userId = currentUser.uid;

    const addTodo = values => {
        dispatch(createTodo([values.todo, userId, complete]))
    };

    const validate  = values => {

        const errors = {};
        if (!values.todo) {
            errors.todo = 'Required';
        } else if (!/^[a-žA-Ž0-9 ]+(.+)*$/.test(values.todo)) {
            errors.todo = 'Todo must only contain numbers or text.';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            todo: '',
        },
        validate,
        onSubmit: addTodo
    });

    return (
        <div className="Todo">
            <div className="TextField">
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        error={formik.errors.todo ? true : null}
                        helperText={formik.errors.todo}
                        name="todo"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.todo}
                        label={"Enter new todo"}
                    />
                </form>
            </div>
        </div>
    )
}
export default AddTodo;