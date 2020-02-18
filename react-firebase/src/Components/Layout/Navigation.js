import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import '../../Styles/NavigationStyle/Navigation.scss';

function Navigation(props) {
    return (
        <Drawer
            className={props.classNameDrawer}
            variant={props.variant}
            classes={props.classes}
            anchor={props.anchor}
        >
            <div className={props.classNameToolbar} />
            <Divider />
            <List>
                <Nav>
                    <Nav.Item>
                        <NavLink to="/profile">
                            <ListItem
                            button
                            >
                                <ExitToAppIcon/>
                                <ListItemText primary='Profile'/>
                            </ListItem>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/todo">
                            <ListItem
                                button
                            >
                                <ExitToAppIcon/>
                                <ListItemText primary='Todo App'/>
                            </ListItem>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/movie">
                            <ListItem
                                button
                            >
                                <ExitToAppIcon/>
                                <ListItemText primary='Movie App'/>
                            </ListItem>
                        </NavLink>
                    </Nav.Item>

                </Nav>
                <Divider />
                <ListItem
                    button
                    onClick={props.clickedLogOut}
                >
                    <ExitToAppIcon/>
                    <ListItemText primary='Log out'/>
                </ListItem>
            </List>
        </Drawer>
    );
}
export default Navigation;