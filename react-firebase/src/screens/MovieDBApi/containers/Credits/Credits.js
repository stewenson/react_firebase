import React from "react";
import Title from "../../components/Title/Title";
import {ContainerLine, LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";
import SingleLineGridList from "../../components/GridList/SingleLineGridList";

export const Credits = (props) => {

    if (!props.casts) return null;

    return (
        <div>
            <Title title={props.title} variant={'h5'} marginTop={'10px'} color={'black'}/>
            <LineHorizontalBlack />
            <SingleLineGridList actors={props.casts}/>
            <ContainerLine/>
        </div>
    )
}