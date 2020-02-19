import React from "react";
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

function OutlineCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.icon}
                        {props.header}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.sumtodo}
                        {props.text}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.complete}
                        <a href={props.linkToOmdb}>
                            {props.linkText}
                        </a>
                        {props.totalPost}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <hr />
        </Card>
    );
}

export default OutlineCard;