import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {GetMyPostsAction} from '../actions/postAction/getMyPostsAction';
import {LikeUpdateAction} from "../actions/postAction/likeUpdateAction";
import {useSelector, useDispatch} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Button from '@material-ui/core/Button';
import Paginator from "../../../Components/Pagination/Paginator";
import {DeletePostsAction} from "../actions/postAction/deletePostsAction";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    badge: {
        '& > *': {
            margin: theme.spacing(2),
        },
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

const defaultProps = {
    color: 'secondary',
    children: <ThumbUpIcon />,
};

export default function MyPosts() {
    const classes = useStyles();
    const content = useSelector(state => state);
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(5);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
    const data = content.blog.userPosts;
    const totalData = Object.keys(data).length;

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    //Convert ms to date
    const convertDate = (seconds) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        let myDate = new Date( seconds * 1);

        return (myDate.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    };

    useEffect(() => {
        dispatch(GetMyPostsAction(currentUser.uid));
    },[content.blog.likePerPost, dispatch, currentUser.uid, content.blog.deletedId]);

    return (
        <React.Fragment>
        <Grid container >
            <div className={classes.root}>
                <CssBaseline />
                {Object.entries(data)
                    .slice(indexOfFirstTodo, indexOfLastTodo)
                    .map(([key, post]) => (
                        <Grid key={post.id} item xs={12} className={classes.main} style={{ marginLeft: '10px'}}>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography ariant="subtitle1" color="textSecondary" gutterBottom>
                                {convertDate(post.created)} <strong>by</strong> {post.author}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.content.slice(0, 250)}
                            </Typography>
                            <Link to={{pathname: `/blog/detailPost/${post.id}`, query: "/blog/detailPost"}}>Continue reading...</Link>
                            <div className={classes.badge}>
                                <Badge
                                    onClick={() => dispatch(LikeUpdateAction([post.id, post.like]))}
                                    badgeContent={post.like}
                                    {...defaultProps}
                                />
                                <Button variant="outlined" color="primary">
                                    <Link to={{pathname: `/blog/editPost/${post.id}`, query: "/blog/editPost"}}>Edit Post</Link>
                                </Button>
                                <Button onClick={() => dispatch(DeletePostsAction(post.id))} variant="outlined" color="secondary">
                                    Delete
                                </Button>
                            </div>
                        </Grid>
                    ))}
                    <Paginator
                        count={totalData/todoPerPage}
                        page={currentPage}
                        changed={handleChange}
                    />
                </div>
        </Grid>
        </React.Fragment>
    )
}