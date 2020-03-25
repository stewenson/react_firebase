import React from "react";
import "../../../../Styles/ProfileStyle/ProfileInfoCard.scss";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {CardHeader} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
        flexGrow: 1,
    },
});

function ProfileInfoCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.header}
            />
                <CardContent>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Image src="holder.js/171x180" roundedCircle />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.fName}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.lName}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.nickName}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.eMail}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>

        </Card>
    );
}

export default ProfileInfoCard;