import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        maxWidth: '90%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function ListOfComments(props) {
    const classes = useStyles();
    const comments = props.comments.data;

    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);

        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };
    let data;

    if (comments){
        data = Object.entries(comments)
            .map(([key, comment]) => (
                <div key={comment.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary={convertDate(comment.created)}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {comment.userName}
                                    </Typography>
                                    {" — " + comment.comment}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
    ))
    }

    return (
        <List className={classes.root}>
            {data}
        </List>
    );
}
