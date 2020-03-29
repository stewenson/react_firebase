import React from "react";
import NewPostForm from "./Form/NewPostForm";
import '../../../../Styles/BlogStyles/NewPost.scss';

export default function NewPost() {
    return (
        <div className="NewPost">
            <NewPostForm/>
        </div>
    )
}