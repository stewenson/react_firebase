import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import app from "../../config/base";

const Header = props => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" className={props.className}>
                <Toolbar>
                    <IconButton
                        color={props.color}
                        aria-label={props.ariaLabel}
                        edge={props.start}
                        onClick={props.clickedButton}
                        className={props.classNameButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <PersonIcon /> {app.auth().currentUser.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;