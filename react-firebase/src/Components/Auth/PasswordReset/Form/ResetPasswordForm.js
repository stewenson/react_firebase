import React, {useContext} from "react";
import { useFormik } from "formik";
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../Styles/LoginStyle/LoginStyle.scss';
import ButtonComponent from '../../../Button/ButtonComponent';
import { AuthContext } from '../../Auth/Auth';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {ResetPassword} from "../../../../Redux/Actions/AuthActions/ResetPassword";

const useStyles = makeStyles({
    root: {
        '& > *': {
            width: 'auto',
        },
    },
});

export default function PasswordReset() {
    const content = useSelector(state => state);
    const classes = useStyles();
    const dispatch = useDispatch();

    const resetSuPassword = values => {
        try {
            dispatch(ResetPassword(values.email));
        } catch (e) {
            alert(e.message);
        }
    };

    const validate  = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate,
        onSubmit: resetSuPassword
    });

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/profile' />
    }

    if (content.auth.message) {
        alert(content.auth.message);
        return <Redirect to='/login' />
    }

    return (
        <form
            className={classes.root}
            onSubmit={formik.handleSubmit}
        >
            <div>
                <TextField
                    fullWidth
                    error={formik.errors.emailError ? true : null}
                    helperText={formik.errors.emailError}
                    id="email"
                    name="email"
                    type="text"
                    label={"Enter email"}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div>
                <ButtonComponent
                    style={{width: '100%', marginTop: '10px'}}
                    text={"Submit"}
                    variant={"contained"}
                    color={"primary"}
                    clicked={formik.handleSubmit}
                />
            </div>
        </form>
    );
}