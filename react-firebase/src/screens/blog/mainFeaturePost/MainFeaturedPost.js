import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AboutBlog from "../AboutBlog/AboutBlog";

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainFeaturedPost() {
    const classes = useStyles();

    const mainFeaturedPost = {
        id: 1,
        title: 'Welcome to blog page',
        description:
            "A blog (shortening of “weblog”) is an online journal or informational website displaying information in the reverse chronological order, with the latest posts appearing first. It is a platform where a writer or even a group of writers share their views on an individual subject.",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
    };
    return (
        <Paper key={mainFeaturedPost.id} className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src='https://source.unsplash.com/random' alt={mainFeaturedPost.imageText} />}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {mainFeaturedPost.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {mainFeaturedPost.description}
                        </Typography>
                        <AboutBlog />
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainFeaturedPost.propTypes = {
    post: PropTypes.object,
};