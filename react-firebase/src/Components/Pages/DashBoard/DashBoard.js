import React from "react";
import app from "../../../config/base";
import '../../../Styles/DashBoardStyle/DashBoardStyle.scss';
import ButtonComponent from "../../Button/ButtonComponent";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Header from "../../Layout/Header";

function DashBoard({history}) {
    const drawerWidth = 240;

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header
                className={classes.appBar}
                title={app.auth().currentUser.displayName}
                clicked={() => app.auth().signOut()}
                text={"Sign Out"}
                variant={'outlined'}
            />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem
                        button
                        onClick={() => history.push('/profile')}
                    >
                        <AccountCircleIcon/>
                        <ListItemText primary='Profile' />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => history.push('/profile')}
                    >
                        <FormatListBulletedIcon />
                        <ListItemText primary='Todo App' />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>

                </Typography>
            </main>
        </div>
    );
}
export default DashBoard;

// <div>
//     <h1>Hello {app.auth().currentUser.displayName}</h1>
//     <ButtonComponent
//         clicked={() => app.auth().signOut()}
//         text={"Sign out"}
//         color={"secondary"}
//         variant={"contained"}
//     />
//     <ButtonComponent
//         clicked={() => history.push('/profile')}
//         color={"secondary"}
//         text={"Profile"}
//     />
// </div>