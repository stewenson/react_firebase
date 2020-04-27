import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailAction} from "../actions/getDetailAction";

export default function DetailMovie() {
    const params = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state.movieDbAPI);

    useEffect(() => {
        dispatch(getDetailAction(params.id))
    },[dispatch, params.id])
    console.log(state.detail)
    return (
        <div>
            <img src={`http://image.tmdb.org/t/p/w500/`+ state.detail.poster_path} alt=' '/>

        </div>
    )
}