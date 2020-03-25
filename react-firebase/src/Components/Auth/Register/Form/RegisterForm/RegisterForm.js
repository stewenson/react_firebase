import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import ButtonComponent from "../../../../Button/ButtonComponent";
import {UserRegistration} from "../../../../../Redux/Actions/AuthActions/UserRegistration";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    root: {
        '& > *': {
            width: 'auto',
        },
    },
});

export default function RegisterForm() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const registerData = async values => {
        const data = [
            values.email,
            values.password,
            values.firstName,
            values.lastName,
            values.nickName
        ];
        try {
            dispatch(UserRegistration(data))
        } catch (e) {
            alert(e.message);
        }
    };
    const validate = values => {

        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.firstName)) {
            errors.firstName = 'First Name must contain only text';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.lastName)) {
            errors.lastName = 'Last Name must contain only text';
        }
        if (!values.nickName) {
            errors.nickName = 'Required';
        } else if (!/^[a-žA-Ž ]+(.+)*$/.test(values.nickName)) {
            errors.nickName = 'Nick Name must contain only text';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (!values.password.length > 6) {
            errors.password = 'Password must 6 or more character';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) {
            errors.email = 'Wrong email';
        }
        if (!values.password_confirm) {
            errors.password_confirm = 'Required';
        } else if (values.password !== values.password_confirm) {
            errors.password_confirm = 'Password do not mach';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
            password: '',
            password_confirm: ''
        },
        validate,
        onSubmit: registerData
    });


    return (
        <form
            className={classes.root}
            onSubmit={formik.handleSubmit}
        >
            <TextField
                error={formik.errors.firstNameError ? true : null}
                helperText={formik.errors.firstNameError}
                id="firstName"
                name="firstName"
                type="text"
                label={"Enter First name"}
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <TextField
                error={formik.errors.lastNameError ? true : null}
                helperText={formik.errors.lastNameError}
                id="lastName"
                name="lastName"
                type="text"
                label={"Enter Last name"}
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <div>
                <TextField
                    fullWidth
                    error={formik.errors.nickNameError ? true : null}
                    helperText={formik.errors.nickNameError}
                    id="nickName"
                    name="nickName"
                    type="text"
                    label={"Enter Nick name"}
                    onChange={formik.handleChange}
                    value={formik.values.nickName}
                />
            </div>
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
                <TextField
                    fullWidth
                    error={formik.errors.passwordError ? true : null}
                    helperText={formik.errors.passwordError}
                    id="password"
                    name="password"
                    type="password"
                    label={"Enter password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            <div>
                <TextField
                    fullWidth
                    error={formik.errors.password_confirmError ? true : null}
                    helperText={formik.errors.password_confirmError}
                    id="password_confirm"
                    name="password_confirm"
                    type="password"
                    label={"Password_confirm"}
                    onChange={formik.handleChange}
                    value={formik.values.password_confirm}
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
};