import React, {useContext, useEffect} from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {AuthContext} from "../../Auth/Auth/Auth";
import {GetCategoriesAction} from "../actions/getCategoriesAction";
import {useDispatch, useSelector} from "react-redux";
import PopUpMenu from "../../../Components/PopUpMenu/PopUpMenu";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function Header(props) {
    const { currentUser } = useContext(AuthContext);
    const classes = useStyles();
    const { title } = props;
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCategoriesAction());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                    {currentUser ? currentUser.dispayName : <Link to='/'>Back to Home</Link>}
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <Typography >
                    <PopUpMenu />
                </Typography>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                <Link to='/blog/allPosts'>All Posts</Link>
                {Object.entries(content.blog.fetchCategories)
                    .map(([key, data]) => (
                        <Link style={{paddingLeft: '10px'}} key={key} to={{pathname: `/blog/posts/${data.category}`, query: "/blog/posts"}}>{data.category}</Link>
                    ))}
            </Toolbar>
        </React.Fragment>
    );
}

// Header.propTypes = {
//     sections: PropTypes.array,
//     title: PropTypes.string,
// };