import React from "react";
import Title from "../../components/Title/Title";
import {ContainerLine, LineHorizontalBlack} from "../../../../Styles/TheMovieDBAPi/Line";
import Grid from "@material-ui/core/Grid";

export const BoxOffice = ({budget, revenue}) => {

    if (!budget || !revenue) return null;
    return (
        <div>
            <Title title={'Box Office'} variant={'h5'} marginTop={'3%'} color={'black'}/>
            <LineHorizontalBlack />
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p className="rmdb-imdb-rating-number">
                        <strong>Budget: </strong>
                        $ {budget} (estimated)
                    </p>
                </Grid>
                <Grid item md={12}>
                    <p className="rmdb-imdb-rating-number">
                        <strong>Revenue: </strong>
                        $ {revenue}
                    </p>
                </Grid>
            </Grid>
            <ContainerLine />
        </div>
    )
}