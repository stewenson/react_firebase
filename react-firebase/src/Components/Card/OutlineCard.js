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

export default function OutlineCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography  variant="h4" component="h2">
                        {props.icon}
                        {props.header}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="h4">
                        {props.sumtodo}
                        {props.text}
                    </Typography>
                    <Typography variant="h6" color="textPrimary"  component="h4">
                        {props.complete}
                        <a href={props.linkToOmdb}>
                            {props.linkText}
                        </a>
                        {props.totalPost}
                    </Typography>
                    <Typography variant="h6" color="textPrimary"  component="h4">
                        {props.uncomplete}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <hr />
        </Card>
    );
}