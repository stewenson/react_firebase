import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import {useFormik} from "formik";
import { addTodoAction } from "../../actions/addTodoAction";
import {AuthContext} from "../../../Auth/Auth/Auth";
import {useDispatch} from "react-redux";
import {ValidationSchema} from "../form/ValidationSchema";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const  AddTodoForm = () => {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    const addTodo = values => {
        const data = {
            todo : values.todo,
            userId: currentUser.uid,
            complete: false
        }
        try {
            dispatch(addTodoAction(data));
            values.todo = ' ';
        } catch (e) {
            alert(e.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            todo: '',
        },
        validationSchema: ValidationSchema,
        onSubmit: addTodo,
    });

    return (
            <form  onSubmit={formik.handleSubmit}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="todo"
                        name="todo"
                        variant="outlined"
                        fullWidth
                        id="todo"
                        label="Enter New Todo"
                        autoFocus
                        onChange={formik.handleChange}
                        value={formik.values.todo}
                    />
                    <strong>{formik.errors.todo}</strong>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                >
                    Add Todo
                </Button>
            </form>
    )
}