import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import ButtonComponent from "../../../../Button/ButtonComponent";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {UserLogin} from "../../../../../Redux/Actions/AuthActions/UserLogIn";

const useStyles = makeStyles ({
    root: {
        '& > *': {
            width: 'auto',
        },
    },
});

export default function LoginForm () {
    const classes = useStyles();
    const dispatch = useDispatch();

    const loginData = async values => {
        const data = [
            values.email,
            values.password
        ];
        try {
            dispatch(UserLogin(data))
        } catch (e) {
            alert(e.message);
        }
    };

    // regex helper https://www.regextester.com/19
    const validate  = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: loginData
    });

    return (
        <form
            className={classes.root}
            onSubmit={formik.handleSubmit}
        >
            <div>
                <TextField
                    fullWidth
                    error={formik.errors.email ? true : null}
                    helperText={formik.errors.email}
                    id="email"
                    name="email"
                    type="text"
                    label={"Enter email"}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div>
                <TextField
                    fullWidth
                    error={formik.errors.passwordv ? true : null}
                    helperText={formik.errors.password}
                    id="password"
                    name="password"
                    type="password"
                    label={"Enter password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
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
