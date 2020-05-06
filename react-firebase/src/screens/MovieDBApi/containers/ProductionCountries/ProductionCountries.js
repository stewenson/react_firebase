import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ProductionCountries(props) {

    if (!props.countries) return null;

    return (
        <Grid item xs={12} >
            <p className="rmdb-imdb-rating-number">
                <strong>Filming Location: </strong>
            </p>
            <Grid container spacing={1}>
                {props.countries ?
                    Object.entries(props.countries).map(([key, countries]) => (
                        <Grid key={key} item>
                            <p className="rmdb-imdb-rating-number">
                                {countries.name},
                            </p>
                        </Grid>
                    ))
                    : null
                }
            </Grid>
        </Grid>
    )
}