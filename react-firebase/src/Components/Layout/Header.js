import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import app from "../../config/base";

const Header = props => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" className={props.className}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Hello {app.auth().currentUser.displayName}
                    </Typography>
                    <Typography
                        variant="h6"
                        style={{ textAligh: 'right'}}
                    >
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;