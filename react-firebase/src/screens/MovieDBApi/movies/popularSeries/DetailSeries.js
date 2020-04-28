import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetailSeriesAction} from "../../actions/getDetailSeriesAction";

export default function DetailSeries() {
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.movieDbAPI);

    console.log(params)
    useEffect(() => {
        dispatch(getDetailSeriesAction(params.id))
    },[dispatch, params.id])

    console.log(data.detail)

    return (
        <div>
            {data.detail ?
            <img src={`http://image.tmdb.org/t/p/w500/`+ data.detail.poster_path} alt=' '/>
            :
            null
        }

        </div>
    )
}