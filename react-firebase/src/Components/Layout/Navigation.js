import React from "react";
import Drawer from "@material-ui/core/Drawer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/NavigationStyle/Navigation.scss';
import Hidden from "@material-ui/core/Hidden";
import DrawerList from "./DrawerList";

function Navigation(props) {
    return (
        <nav className={props.classNameNav} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={props.container}
                    variant={props.variant}
                    anchor={props.anchor}
                    open={props.open}
                    onClose={props.onClose}
                    classes={props.classDrawer}
                    ModalProps={props.ModalProps}
                >
                    <DrawerList
                    classesDrawerList={props.classesDrawerList}
                    clickedLogOut={props.clickedLogOut}
                    />

                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={props.classDrawer}
                    variant="permanent"
                    open
                >
                    <DrawerList
                        classesDrawerList={props.classesDrawerList}
                        clickedLogOut={props.clickedLogOut}
                    />
                </Drawer>
            </Hidden>
        </nav>
    );
}
export default Navigation;
