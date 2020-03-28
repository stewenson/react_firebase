import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from "../../Card/MovieCard";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import '../../../Styles/MovieStyle/MovieListStyles.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MovieList(props) {
    const classes = useStyles();

    let movieList;
    let movieListError;
    if (props.data){
        movieList = props.data.map(movie => (
            <Grid item xs={6} sm={3} key={movie.imdbID}>
                <MovieCard
                    title={movie.Title}
                    img={movie.Poster}
                    year={movie.Year}
                    id={movie.imdbID}
                />
            </Grid>
        ))
    } else {
        movieListError = (<h2 className="MovieNotFound">Movie not found</h2>);
    }
    return (
        <div className="MovieList">
            <div className={classes.root}>
                <Grid container spacing={4}>
                    {movieList}
                </Grid>
                {movieListError}
                <Grid container spacing={4} className="MovieText">
                    <div className={classes.paper}>
                        <Paper elevation={3}>
                            <h3>Usage</h3>
                            <ListItem>
                                <ListItemIcon >
                                    <ArrowForwardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Enter a movie name in the input and press Enter."/>
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
                                <ListItemText primary="The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. "/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon >
                                    <ArrowForwardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Just about every project needs to interface with a REST API at some stage.
                        Axios is a lightweight HTTP client based on the $http service within Angular.js v1.x and similar to the Fetch API.
                        Axios is promise-based and thus we can take advantage of async and await for more readable asynchronous code.
                        We can also intercept and cancel requests, and there’s built-in client side protection against cross site request forgery. But the best part about Axios? The easy to use API!"/>
                            </ListItem>
                        </Paper>
                    </div>
                </Grid>
            </div>
        </div>
    )
}