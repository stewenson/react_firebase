import React from 'react';
import Title from "../../components/Title/Title";
import {LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";
import Grid from "@material-ui/core/Grid";

export const Detail = ({language, languageSeries, releaseDate, firstAirDate}) => {

    // if (!language || !releaseDate || !firstAirDate) return null;
    return (
        <React.Fragment>
            <Title title={'Detail'} variant={'h5'} marginTop={'3%'} color={'black'}/>
            <LineHorizontalBlack />
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p className="rmdb-imdb-rating-number">
                        <strong>Language: </strong>
                        {language ? language : languageSeries}
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <p className="rmdb-imdb-rating-number">
                        <strong>Released Date: </strong>
                        {releaseDate ? releaseDate : firstAirDate}
                    </p>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}