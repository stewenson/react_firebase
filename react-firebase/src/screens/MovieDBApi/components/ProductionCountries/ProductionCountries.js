import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ProductionCountries(props) {

    return (
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
    )
}