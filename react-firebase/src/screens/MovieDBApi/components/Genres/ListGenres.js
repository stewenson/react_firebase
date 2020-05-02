import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ListGenres(props) {
    return (
        <Grid container spacing={1}>
            {props.genres ?
                Object.entries(props.genres).map(([key, genre]) => (
                    <Grid key={genre.id} item>
                    <p>
                        {genre.name},
                    </p>
                    </Grid>
                    )
                )
                : null
            }
        </Grid>
    )
}