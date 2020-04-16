import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function AboutBlog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button variant="contained" className={classes.button} color="secondary" onClick={handleClickOpen}>
                About Blog Page
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <h3>Use technology</h3>
                    <ListItem>
                        <ListItemIcon >
                            <ArrowForwardIcon />
                        </ListItemIcon>
                        <ListItemText primary="React Hooks Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <ArrowForwardIcon />
                        </ListItemIcon>
                        <ListItemText primary="React Redux React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data."/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <ArrowForwardIcon />
                        </ListItemIcon>
                        <ListItemText primary="React Bootstrap The most popular front-end framework Rebuilt for React."/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <ArrowForwardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Material UI - React components for faster and easier web development. Build your own design system, or start with Material Design."/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <ArrowForwardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Google Firebase Build apps fast, without managing infrastructure Firebase gives you functionality like analytics,
                        databases, messaging and crash reporting so you can move quickly and focus on your users."/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon >
                            <ArrowForwardIcon />
                        </ListItemIcon>
                        <ListItemText primary="React Router - So you want to do routing with your Redux app. You can use it with React Router.
                        Redux will be the source of truth for your data and React Router will be the source of truth for your URL. In most of the cases, it is fine to have them separate unless you need to time travel and rewind actions that trigger a URL change."/>
                    </ListItem>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>

    )
};
