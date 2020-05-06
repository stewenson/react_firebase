import React from "react";
import Grid from "@material-ui/core/Grid";
import {LineVertical} from "../../../../Styles/TheMovieDBAPi/Line";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Genres from "../Genres/Genres";

export const MovieInfo = (props) => {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <p className="rmdb-imdb-rating-number">{props.runtime ? props.runtime : props.episodeRuntime} min</p>
            </Grid>
            <LineVertical />
            <Grid item>
                <p className="rmdb-imdb-rating-number">
                    <StarBorderIcon style={{ color: 'gold', fontSize: '25px'}}/> {props.voteAverage}
                </p>
            </Grid>
            <LineVertical />
            <Grid item>
                <Genres genres={props.genres}/>
            </Grid>
            <LineVertical />
            {props.numOfSeasons || props.numberOfEpisodes ?
                <Grid item>
                    <p className="rmdb-imdb-rating-number">Seasons: {props.numOfSeasons} Episodes: {props.numberOfEpisodes}</p>
                </Grid>
                :
                ''
            }
        </Grid>
    )
}