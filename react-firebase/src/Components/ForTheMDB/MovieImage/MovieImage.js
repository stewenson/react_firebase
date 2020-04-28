import React from "react";
import Progress from "../../Progress/Progress";

export default function MovieImage(props) {
    return (
        <>
        {props.image ?
                <img className="MovieImage" src={`http://image.tmdb.org/t/p/w342/`+ props.image} alt=' '/>
                :
                <Progress/>
        }
        </>
    )
}