import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from "../../Card/MovieCard";
import Progress from "../../Progress/Progress";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MovieList(props) {
    const classes = useStyles();

    let movieList;
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
        movieList = (<Progress/>);
    }
    return (
        <div className="MovieList">
            <div className={classes.root}>
                <Grid container spacing={4}>
                {movieList}
                </Grid>
            </div>
        </div>
    )
}