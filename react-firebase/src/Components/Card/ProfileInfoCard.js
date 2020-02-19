import React from "react";
import "../../Styles/ProfileStyle/ProfileInfoCard.scss";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 'auto',
    },
});

function ProfileInfoCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.fName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.lName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.eMail}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <hr />
        </Card>
    );
}

export default ProfileInfoCard;