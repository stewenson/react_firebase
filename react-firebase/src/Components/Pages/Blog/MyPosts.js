import React, {useContext, useEffect} from "react";
import {FetchUserPosts} from '../../../Redux/Actions/BlogActions/FetchUserPosts';
import {useSelector, useDispatch} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

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

export default function MyPosts() {
    const classes = useStyles();
    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchUserPosts(currentUser.uid));
    },[]);

    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);

        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };
    console.log(content);
    const data = content.userBlogPosts.data;

    return (
        <div className={classes.root}>
            <CssBaseline />
            {Object.entries(data)
                .map(([key, post]) => (
                    <Container key={post.id} component="main" className={classes.main} >
                        <Typography variant="h2" component="h1" >
                            {post.title}
                        </Typography>
                        <Typography variant="caption" gutterBottom >
                            {convertDate(post.created)} <strong>by</strong> {post.author}
                        </Typography>
                        <Typography variant="h5" gutterBottom >
                            {post.content}
                        </Typography>
                        <Typography variant="h5" gutterBottom >
                            <ThumbUpIcon
                            />
                            {post.like}
                        </Typography>
                    </Container>
                ))}
        </div>
    )
}