import React, {useEffect} from "react";
import {FetchAllPosts} from '../../../Redux/Actions/BlogActions/FechAllPost';
import {useSelector, useDispatch} from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function AllPosts() {
    const classes = useStyles();
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchAllPosts());
    },[]);

    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);

        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };

    const data = content.allBlogPosts.data;

    return (
        <div className={classes.root}>
            <CssBaseline />
            {Object.entries(data)
            .map(([key, post]) => (
                <Container key={post.id} component="main" className={classes.main} >
                    <Typography variant="h2" component="h1" >
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom >
                        {convertDate(post.created)} <strong>by</strong> {post.author}
                    </Typography>
                    <Typography variant="h4" gutterBottom >
                        {post.content}
                    </Typography>
                    <Typography gutterBottom >
                        <ThumbUpIcon
                        />
                        {post.like}
                    </Typography>
                </Container>
            ))}
        </div>
    )
}

