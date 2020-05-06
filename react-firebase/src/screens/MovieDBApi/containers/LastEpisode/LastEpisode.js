import React from "react";
import Title from "../../components/Title/Title";
import {LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";
import Grid from "@material-ui/core/Grid";
import {SearchImage} from "../../../../Styles/TheMovieDBAPi/CarouselImg";

export const LastEpisode = ({airDate, seasonNumber, episodeNumber, name, overview, img}) => {
    return (
        <React.Fragment>
            <Title title={`Last Episode Season ${seasonNumber} Episode ${episodeNumber}`} variant={'h5'} marginTop={'3%'} color={'black'}/>
            <LineHorizontalBlack />
            <Grid container spacing={2} style={{ boxShadow: '10px 5px 20px #adb5bd', marginBottom: '10px'}}>
                <Grid  item xs={5} sm={2}>
                    <SearchImage src={`http://image.tmdb.org/t/p/w94_and_h141_bestv2${img}`}/>
                </Grid>
                <Grid item xs={7} sm={10}>
                    <Title title={name} variant={'h6'} />
                    <Title title={airDate} variant={'subtitle2'} />
                    <Title title={overview} variant={'body2'} />
                </Grid>
            </Grid>

        </React.Fragment>
    )
}