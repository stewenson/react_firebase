import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "../TextField/TextField";
import ButtonComponent from "../../Button/ButtonComponent";

const ResetForm = (props) => {
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

export default ResetForm;