import React from "react";
import UpdateProfileForm from "./Form/UpdateProfileForm/UpdateProfileForm";
import Grid from "@material-ui/core/Grid";
import ProfileGrid from "./ProfileGrid";
import {makeStyles} from "@material-ui/core/styles";
import '../../../Styles/ProfileStyle/ProfileFormCard.scss';
import Card from "@material-ui/core/Card";
import {CardHeader} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <Card className={classes.root}>
                        <CardHeader title="Update Profile" />
                        <CardContent>
                        <UpdateProfileForm />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <ProfileGrid />
                </Grid>
            </Grid>
        </div>
    );
}