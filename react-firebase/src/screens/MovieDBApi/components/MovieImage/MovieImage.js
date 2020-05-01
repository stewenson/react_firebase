import React from "react";
import Progress from "../../../../Components/Progress/Progress";

export default function MovieImage(props) {
    return (
        <>
        {props.image ?
                <img className="MovieImage" src={`http://image.tmdb.org/t/p/original/`+ props.image} alt=' '/>
                :
                <Progress/>
        }
        </>
    )
}