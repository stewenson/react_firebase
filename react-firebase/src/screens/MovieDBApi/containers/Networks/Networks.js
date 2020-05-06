import React from "react";
import {CompaniesImage} from "../../../../Styles/TheMovieDBAPi/CompaniesImage";
import Grid from "@material-ui/core/Grid";
import {ContainerLine} from "../../../../Styles/TheMovieDBAPi/Line";

export default function Networks(props) {

    if (!props.networks) return null;
    return (
        <Grid item md={12} >
            <p className="rmdb-imdb-rating-number">
                <strong>Networks: </strong>
            </p>
            {props.networks ?
                Object.entries(props.networks).map(([key, networks]) => (
                    networks.logo_path ?
                        <CompaniesImage  key={networks.id} src={`http://image.tmdb.org/t/p/w92/`+ networks.logo_path} alt={networks.name}/>
                        :
                        <p key={networks.id} className="rmdb-imdb-rating-number">
                            {networks.name}
                        </p>
                    )
                )
                : null
            }
            <ContainerLine/>
        </Grid>
    )
}