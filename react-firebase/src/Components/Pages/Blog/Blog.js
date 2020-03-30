import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './LayoutBlog/Header';
import MainFeaturedPost from './FeaturedPost/MainFeaturedPost';
import FeaturedPost from './FeaturedPost/FeaturedPost';
import Sidebar from './LayoutBlog/Sidebar';
import Footer from './LayoutBlog/Footer';
import Main from "./LayoutBlog/Main";


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

export default function Blog() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container wdth="80%">
                <Header title="Blog"/>
                <main>
                    <MainFeaturedPost />
                    <FeaturedPost />
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="Posts" />
                        <Sidebar />
                    </Grid>
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
}