import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GetDetailPostAction} from "../../actions/postAction/getDetailPostAction";
import {EditPostForm} from './form/EditPostForm';
import '../../../../Styles/BlogStyles/EditPost.scss';

export default function EditPost() {
    const params = useParams();
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(GetDetailPostAction(params.id))
    }, [dispatch, params.id]);

    const data = content.blog.detailPost;

    console.log(params)

    return (
        <div className="EditPost">
            <EditPostForm data={data}
                          updated={content.blog.editPost.id}

            />
        </div>
    )
}