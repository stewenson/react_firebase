import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './layout/Header';
import MainFeaturedPost from './mainFeaturePost/MainFeaturedPost';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Main from "./layout/Main";
import {FetchAllPosts} from "./actions/postAction/getAllPostsAction";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

export default function Blog() {
    const classes = useStyles();
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchAllPosts());
    },[content.blog.likePerPost, dispatch]);

    const data = content.blog;
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Blog"/>
                <main>
                    <MainFeaturedPost />
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <Main title="Posts" />
                        <Sidebar data={data}/>
                    </Grid>
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
}