import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import app from "../../config/base";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ButtonComponent from "../Button/ButtonComponent";

const Header = props => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" className={props.className}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Hello {props.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        style={{ textAligh: 'right'}}
                    >
                        <ExitToAppIcon
                            onClick={props.clicked}
                        />
                        <ButtonComponent
                            clicked={props.clicked}
                            text={props.text}
                            variant={props.variant}
                        />
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Header;