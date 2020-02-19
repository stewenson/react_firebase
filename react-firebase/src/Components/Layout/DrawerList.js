import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import MovieIcon from '@material-ui/icons/Movie';

const DrawerList = props => {
    return (
        <>
            <div className={props.classesDrawerList} />
            <Divider />
            <List>
                <Nav.Item>
                    <NavLink to="/dashboard">
                        <ListItem
                            button
                        >
                            <DashboardIcon/>
                            <ListItemText primary='Dashboard'/>
                        </ListItem>
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/profile">
                        <ListItem
                            button
                        >
                            <PersonIcon/>
                            <ListItemText primary='User Profile'/>
                        </ListItem>
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/todo">
                        <ListItem
                            button
                        >
                            <PlaylistAddCheckIcon/>
                            <ListItemText primary='Todo App'/>
                        </ListItem>
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/movie">
                        <ListItem
                            button
                        >
                            <MovieIcon/>
                            <ListItemText primary='Movie App'/>
                        </ListItem>
                    </NavLink>
                </Nav.Item>
            </List>
            <Divider />
            <ListItem
                button
                onClick={props.clickedLogOut}
            >
                <ExitToAppIcon/>
                <ListItemText primary='Log out'/>
            </ListItem>
        </>
    );
};
export default DrawerList;