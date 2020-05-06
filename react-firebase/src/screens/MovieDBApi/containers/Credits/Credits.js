import React from "react";
import Title from "../../components/Title/Title";
import {LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";
import SingleLineGridList from "../../components/GridList/SingleLineGridList";

export const Credits = (props) => {

    if (!props.casts) return null;

    return (
        <div>
            <Title title={'Casts'} variant={'h5'} marginTop={'10px'} color={'black'}/>
            <LineHorizontalBlack />
            <SingleLineGridList actors={props.casts}/>
        </div>
    )
}