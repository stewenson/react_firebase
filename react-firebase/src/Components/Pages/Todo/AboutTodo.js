import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarIcon from "@material-ui/icons/Star";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../../../Styles/TodoStyle/ListTodoStyle.scss';

export default function AboutTodo() {

    return (
        <React.Fragment>
            <h3>Usage</h3>
            <ListItem>
                <ListItemIcon >
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="After click on star, todo will be changed to completed. Star will had yellow color."/>
            </ListItem>
            <ListItem>
                <ListItemIcon >
                    <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="After click on trash, todo will be deleted."/>
            </ListItem>
            <h3>Use technology</h3>
            <ListItem>
                <ListItemIcon >
                    <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText primary="React Hooks Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."/>
            </ListItem>
            <ListItem>
                <ListItemIcon >
                    <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText primary="React Redux React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data."/>
            </ListItem>
            <ListItem>
                <ListItemIcon >
                    <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText primary="React Bootstrap The most popular front-end framework Rebuilt for React."/>
            </ListItem>
            <ListItem>
                <ListItemIcon >
                    <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText primary="Material UI - React components for faster and easier web development. Build your own design system, or start with Material Design."/>
            </ListItem>
            <ListItem>
                <ListItemIcon >
                    <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText primary="Google Firebase Build apps fast, without managing infrastructure Firebase gives you functionality like analytics,
                        databases, messaging and crash reporting so you can move quickly and focus on your users."/>
            </ListItem>
        </React.Fragment>

    )
};
