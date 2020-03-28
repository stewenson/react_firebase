import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import MovieIcon from '@material-ui/icons/Movie';
import IconButton from "@material-ui/core/IconButton";
import '../../Styles/NavigationStyle/Navigation.scss';

export default function DrawerList(props) {
    return (
        <div className="DrawerList">
            <div className={props.class}>
                <IconButton onClick={props.clicked}>
                    {props.themeDirection}
                </IconButton>
            </div>
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
                <Nav.Item>
                    <NavLink to="/blog">
                        <ListItem
                            button
                        >
                            <MovieIcon/>
                            <ListItemText primary='Blog'/>
                        </ListItem>
                    </NavLink>
                </Nav.Item>
            </List>
            <Divider />
        </div>
    );
};
