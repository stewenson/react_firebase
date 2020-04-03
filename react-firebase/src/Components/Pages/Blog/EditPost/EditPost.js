import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FetchDetailPost} from "../../../../Redux/Actions/BlogActions/FetchDetailPost";
import {EditPostForm} from './form/EditPostForm';
import '../../../../Styles/BlogStyles/EditPost.scss';

export default function EditPost() {
    const params = useParams();
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(FetchDetailPost(params))
    }, [dispatch, params]);

    const data = content.blog.detailPost;

    return (
        <div className="EditPost">
            <EditPostForm data={data}
                          updated={content.blog.updatePost.id}

            />
        </div>
    )
}