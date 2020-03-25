import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ButtonComponent from "../../../../Button/ButtonComponent";
import {AuthContext} from "../../../../Auth/Auth/Auth";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {UserProfileUpdate} from "../../../../../Redux/Actions/AuthActions/UserProfileUpdate";

const useStyles = makeStyles({
    root: {
        '& > *': {
            width: 'auto',
        },
    },
});

export default  function UpdateProfileForm() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);

    const updateData = async values => {
        const data = [
            currentUser.uid,
            values.firstName,
            values.lastName,
            values.nickName,
            values.email
        ];
        try {
           dispatch(UserProfileUpdate(data))
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
        if (!values.email) {
            errors.email = 'Required';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            nickName: '',
            email: '',
        },
        validate,
        onSubmit: updateData
    });


    return (
        <form
            className={classes.root}
            onSubmit={formik.handleSubmit}
        >
            <TextField
                error={formik.errors.firstName ? true : null}
                helperText={formik.errors.firstName}
                id="firstName"
                name="firstName"
                type="text"
                label={'Enter First Name'}
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <TextField
                error={formik.errors.lastName ? true : null}
                helperText={formik.errors.lastName}
                id="lastName"
                name="lastName"
                type="text"
                label={'Enter Last Name'}
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            <div>
                <TextField
                    error={formik.errors.nickName ? true : null}
                    helperText={formik.errors.nickName}
                    id="nickName"
                    name="nickName"
                    type="text"
                    label={'Enter Nick Name'}
                    onChange={formik.handleChange}
                    value={formik.values.nickName}
                />
            </div>
            <div>
                <TextField
                    error={formik.errors.email ? true : null}
                    helperText={formik.errors.email}
                    id="email"
                    name="email"
                    type="text"
                    label={'Enter Email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div>
                <ButtonComponent
                    style={{width: '30%', marginTop: '10px', backgroundColor: '#7b1fa2'}}
                    text={"Submit"}
                    variant={"contained"}
                    color={"primary"}
                    clicked={formik.handleSubmit}
                />
            </div>
        </form>
    )
};