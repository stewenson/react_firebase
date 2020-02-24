import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "../TextField/TextField";
import ButtonComponent from "../../Button/ButtonComponent";

function UpdateProfileForm(props) {
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
                label={props.firstNameLabel}
                changed={props.changed}
                value={props.firstName}
            />
            <TextField
                error={props.lastNameError ? true : null}
                helperText={props.lastNameError}
                id="lastName"
                name="lastName"
                type="text"
                label={props.lastNameLabel}
                changed={props.changed}
                value={props.lastName}
            />
            <div>
                <TextField
                    error={props.nickNameError ? true : null}
                    helperText={props.nickNameError}
                    id="nickName"
                    name="nickName"
                    type="text"
                    label={props.nickNameLabel}
                    changed={props.changed}
                    value={props.nickName}
                />
            </div>
            <div>
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
            </div>
            <div>
                <ButtonComponent
                    style={{width: '30%', marginTop: '10px', backgroundColor: '#7b1fa2'}}
                    text={"Submit"}
                    variant={"contained"}
                    color={"primary"}
                    clicked={props.clicked}
                />
            </div>
        </form>
    )
}
export default UpdateProfileForm;