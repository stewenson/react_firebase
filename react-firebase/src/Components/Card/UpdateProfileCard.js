import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import UpdateProfileForm from "../Form/UpdateProfileForm/UpdateProfileForm";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
    },
});

function UpdateProfileCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
            <UpdateProfileForm
                //action
                submit={props.submit}
                clicked={props.clicked}
                changed={props.changed}
                // values
                firstName={props.firstName}
                lastName={props.lastName}
                nickName={props.nickName}
                email={props.email}
                // errors
                firstNameError={props.firstNameError}
                lastNameError={props.lastNameError}
                nickNameError={props.nickNameError}
                emailError={props.emailError}
                // labels (placeholder)
                firstNameLabel={props.firstNameLabel}
                lastNameLabel={props.lastNameLabel}
                nickNameLabel={props.nickNameLabel}
                emailLabel={props.emailLabel}
            />
                </CardContent>
        </Card>
    );
}

export default UpdateProfileCard;