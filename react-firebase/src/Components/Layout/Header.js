import React, {useContext} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import '../../Styles/LayoutStyle/HeaderStyle.scss';
import {AuthContext} from "../Auth/Auth/Auth";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import app from "../../config/base";

export default function Header(props) {
    const { currentUser } = useContext(AuthContext);

    let data;
    if (currentUser) {
        data = (
                <Button onClick={() => app.auth().signOut()} className="LoginButton" color="inherit">Log Out <ExitToAppIcon /></Button>
        )
    } else {
        data = (
            <Button className="LoginButton" color="inherit">Login</Button>
        )
    }

    return (
        <div className="Header">
            <CssBaseline />
            <AppBar
                position="fixed"
                className={props.class}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.clicked}
                        edge="start"
                        className={props.iconClass}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                       <PersonIcon /> {currentUser.displayName}
                    </Typography>
                    {data}
                </Toolbar>
            </AppBar>
        </div>
    );
};
