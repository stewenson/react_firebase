import React from "react";
import NewPostForm from "./form/NewPostForm";
import '../../../../Styles/BlogStyles/NewPost.scss';

export default function NewPost() {
    return (
        <div className="NewPost">
            <NewPostForm/>
        </div>
    )
}