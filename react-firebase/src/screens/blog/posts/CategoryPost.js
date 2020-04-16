import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {filterPostsAction} from "../actions/postAction/filterPostsAction";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Paginator from "../../../Components/Pagination/Paginator";
import {makeStyles} from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {LikeUpdateAction} from "../actions/postAction/likeUpdateAction";

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

const defaultPropsLike = {
    color: 'secondary',
    children: <ThumbUpIcon />,
};
export default function CategoryPost() {
    const classes = useStyles();
    const params = useParams();
    const content = useSelector(state => state.blog.fetchPostsByCategory);
    const dispatch = useDispatch();

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(5);
    const indexOfLastTodo = currentPage * todoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
    const totalData = Object.keys(content).length;

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
         dispatch(filterPostsAction(params.category));
    },[params.category, dispatch])

    return (
        <React.Fragment>
            <Grid container  className="AllPosts" >
                <div className={classes.root}>
                    <CssBaseline />
                    {content.length > 0 ?
                        (Object.entries(content)
                            .slice(indexOfFirstTodo, indexOfLastTodo)
                            .map(([key, post]) => (
                                <Grid key={post.id}  item xs={12} className={classes.main} style={{ marginLeft: '10px'}}>
                                    <Typography component="h2" variant="h5">
                                        {post.title}
                                    </Typography>
                                    <Typography ariant="subtitle1" color="textSecondary" >
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
                                            {...defaultPropsLike}
                                        />
                                    </div>
                                </Grid>
                            )))
                    :
                        <Typography component="h2" align="center" variant="h3">
                            No Posts
                        </Typography>
                    }
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