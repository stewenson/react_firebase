import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UpdateProfileCard from "../../Card/UpdateProfileCard";
import ProfileInfoCard from "../../Card/ProfileInfoCard";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ProfileGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <UpdateProfileCard
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
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <ProfileInfoCard
                            header={"Profile"}
                            fName={"First Name"}
                            lName={"Last Name"}
                            eMail={"Email"}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
