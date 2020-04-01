import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import MovieIcon from '@material-ui/icons/Movie';
import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from '@material-ui/icons/Forum';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export const mainListItems = (
    <div>
        <Nav.Item>
            <NavLink to="/dashboard">
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="/profile">
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="User Profile" />
                </ListItem>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="/todo">
                <ListItem button>
                    <ListItemIcon>
                        <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Todo" />
                </ListItem>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="/movie">
                <ListItem button>
                    <ListItemIcon>
                        <MovieIcon />
                    </ListItemIcon>
                    <ListItemText primary="Search movie" />
                </ListItem>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="/blog">
                <ListItem button>
                    <ListItemIcon>
                        <ForumIcon />
                    </ListItemIcon>
                    <ListItemText primary="Blog" />
                </ListItem>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink to="/iTunes">
                <ListItem button>
                    <ListItemIcon>
                        <MusicNoteIcon />
                    </ListItemIcon>
                    <ListItemText primary="iTunes App" />
                </ListItem>
            </NavLink>
        </Nav.Item>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);