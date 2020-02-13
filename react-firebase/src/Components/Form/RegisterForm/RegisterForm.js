import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "../TextField/TextField";
import ButtonComponent from "../../Button/ButtonComponent";

const Form = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                width: 'auto',
            },
        },
    }));

    const classes = useStyles();

    return (
        <form
            className={classes.root}
            onSubmit={props.submit}
        >
            <TextField
                error={props.firstNameError ? true : null}
                helperText={props.firstNameError}
                id="firstName"
                name="firstName"
                type="text"
                label={props.nameLabel}
                changed={props.changed}
                value={props.firstName}
            />
            <TextField
                error={props.emailError ? true : null}
                helperText={props.emailError}
                id="email"
                name="email"
                type="text"
                label={props.emailLabel}
                changed={props.changed}
                value={props.email}
            />
            <TextField
                error={props.passwordError ? true : null}
                helperText={props.passwordError}
                id="password"
                name="password"
                type="password"
                label={props.passwordLabel}
                changed={props.changed}
                value={props.password}
            />
            <TextField
                error={props.password_confirmError ? true : null}
                helperText={props.password_confirmError}
                id="password_confirm"
                name="password_confirm"
                type="password"
                label={props.password_confirmLabel}
                changed={props.changed}
                value={props.password_confirm}
            />

            <div>
                <ButtonComponent
                    style={{width: '100%', marginTop: '10px'}}
                    text={"Submit"}
                    variant={"contained"}
                    color={"primary"}
                    clicked={props.clicked}
                />
            </div>
        </form>
    );
}

export default Form;