import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {AuthContext} from "../../screens/Auth/Auth/Auth";
import {Link} from "react-router-dom";
import {SignOutAction} from "../../screens/Auth/actions/signOutAction";
import {useDispatch} from "react-redux";
import UpdateProfile from "../../screens/blog/profile/UpdateProfile/UpdateProfile";
import Profile from "../../screens/blog/profile/Profile";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import '../../Styles/PoUpMenuStyle.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    rootListItem: {
        width: '100%',
        maxWidth: '46ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function PopUpMenu() {
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const classes = useStyles();


    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    {currentUser ?
                        <Button {...bindTrigger(popupState)}>
                            <Avatar className={classes.orange}>{currentUser.displayName}</Avatar>
                        </Button>
                    :
                        <Button variant="outlined" color="primary" {...bindTrigger(popupState)}>
                           <AccountCircleRoundedIcon/>  <Link style={{ marginLeft: "5px"}} to="/login">Sign In</Link>
                        </Button>
                    }

                    <Menu {...bindMenu(popupState)}>
                        {currentUser ?
                            <div>
                                <List className={classes.rootListItem}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar src="/broken-image.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={currentUser.displayName}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        {currentUser.email}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <Profile />
                                        <UpdateProfile />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                    <Link to='/blog/newPosts' onClick={popupState.close}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CreateRoundedIcon />
                                            </ListItemIcon>
                                            <ListItemText id="switch-list-label-wifi" primary="New post" />
                                        </ListItem>
                                    </Link>
                                    <Link to='/blog/myPosts' onClick={popupState.close}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ListAltRoundedIcon />
                                            </ListItemIcon>
                                            <ListItemText id="switch-list-label-wifi" primary="My Posts" />
                                        </ListItem>
                                    </Link>
                                        <Link onClick={() => dispatch(SignOutAction())} to='/'>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ExitToAppIcon />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary="Sign Out" />
                                            </ListItem>
                                        </Link>
                                    <Divider variant="inset" component="li" />
                                    <Link to='/'>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <HomeIcon />
                                                </ListItemIcon>
                                                <ListItemText id="switch-list-label-wifi" primary="Back to Home" />
                                            </ListItem>
                                        </Link>
                                </List>
                            </div>
                        :
                            null
                        }
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}