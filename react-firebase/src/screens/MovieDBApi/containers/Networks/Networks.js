import React from "react";
import {CompaniesImage} from "../../../../Styles/TheMovieDBAPi/CompaniesImage";
import Grid from "@material-ui/core/Grid";

export default function Networks(props) {

    if (!props.networks) return null;
    return (
        <Grid item md={12} >
            <p className="rmdb-text">
                <strong>Networks: </strong>
            </p>
            {props.networks ?
                Object.entries(props.networks).map(([key, networks]) => (
                    networks.logo_path ?
                        <CompaniesImage  key={networks.id} src={`http://image.tmdb.org/t/p/w92/`+ networks.logo_path} alt={networks.name}/>
                        :
                        <p key={networks.id} className="rmdb-text">
                            {networks.name}
                        </p>
                    )
                )
                : null
            }
        </Grid>
    )
}