import React, {useContext, useEffect} from "react";
import NewPostForm from "./form/NewPostForm";
import '../../../../Styles/BlogStyles/NewPost.scss';
import {AuthContext} from "../../../Auth/Auth/Auth";
import {useSelector, useDispatch} from "react-redux";
import {GetCategoriesAction} from "../../actions/getCategoriesAction";

export default function NewPost() {
    const { currentUser } = useContext(AuthContext);
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCategoriesAction());
    }, [dispatch]);

    return (
        <div className="NewPost">
            <NewPostForm msg={content.blog.msg}
                         uID={currentUser.uid}
                         displayName={currentUser.displayName}
                         add={content.blog.msg}
                         categories={content.blog.fetchCategories}
            />
        </div>
    )
}