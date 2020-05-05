import React from "react";
import Progress from "../../../../Components/Progress/Progress";

export default function MovieImage(props) {
    return (
        <>
        {props.image ?
            <img className="MovieImage" src={`http://image.tmdb.org/t/p/w500/`+ props.image} alt=' '/>
            :
            <Progress/>
        }
        </>
    )
}