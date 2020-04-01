import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "../../Auth/Auth/Auth";
import {FetchAllPosts} from "../../../Redux/Actions/BlogActions/FechAllPost";
import {FetchUserPosts} from "../../../Redux/Actions/BlogActions/FetchUserPosts";

export default function TodoInfo() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        dispatch(FetchAllPosts());
        dispatch(FetchUserPosts(currentUser.uid));
    },[]);

    const allPosts = content.blog.fetchAllPost.length;
    const userPosts = content.blog.userPosts.length;

    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" color="primary" gutterBottom>
                <div>
                    <Link to="/blog" >
                        Blog info
                    </Link>
                </div>
            </Typography>
            <Typography component="p" variant="h5">
                All Posts: {allPosts}
            </Typography>
            <Typography component="p" variant="h5">
                {currentUser.displayName} Posts : {userPosts}
            </Typography>
        </React.Fragment>
    );
}