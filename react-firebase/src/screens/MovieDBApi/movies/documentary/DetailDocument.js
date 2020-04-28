import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailMovieAction} from "../../actions/getDetailMovieAction";

export default function DetailDocument() {
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);

    useEffect(() => {
        dispatch(getDetailMovieAction(params.id))
    },[dispatch, params.id])
    console.log(params)

    return (
        <div>
            {data.detail.poster_path ?
                <img src={`http://image.tmdb.org/t/p/w500/`+ data.detail.poster_path} alt=' '/>
                :
                null
            }
        </div>
    )
}