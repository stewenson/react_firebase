import React, {useContext} from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../Auth/Auth/Auth";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function Header(props) {
    const { currentUser } = useContext(AuthContext);
    const classes = useStyles();
    const { title } = props;

    let navigationLink;
    let signButton;
    let iTunesButton;
    if (currentUser) {
        navigationLink = (
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                <NavLink to='/blog/allPosts'>All Posts</NavLink>
                <NavLink to='/blog/newPosts'>New Posts</NavLink>
                <NavLink to='/blog/myPosts'>My Posts</NavLink>
            </Toolbar>
        )
    } else {
        signButton = <a href="#/login">Sign In</a>;
        iTunesButton = <a href="#/iTunes"> iTunes App</a>;
        navigationLink = (
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                <NavLink to='/blog/allPosts'>All Posts</NavLink>
                <NavLink to='/'>Back to Home</NavLink>
            </Toolbar>
        )
    }

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Typography style={{ marginRight: '15px'}}>
                    {signButton}
                </Typography>
                <Typography>
                    {iTunesButton}
                </Typography>
            </Toolbar>
            {navigationLink}
        </React.Fragment>
    );
}

// Header.propTypes = {
//     sections: PropTypes.array,
//     title: PropTypes.string,
// };