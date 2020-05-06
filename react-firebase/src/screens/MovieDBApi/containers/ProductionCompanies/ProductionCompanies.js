import React from "react";
import {CompaniesImage} from "../../../../Styles/TheMovieDBAPi/CompaniesImage";
import Grid from "@material-ui/core/Grid";

export default function ProductionCompanies(props) {

    if (!props.companies) return null;

    return (
        <Grid item xs={12} >
            <p className="rmdb-text">
                <strong>Filming Companies: </strong>
            </p>
                <Grid container spacing={1}>
                    {props.companies ?
                        Object.entries(props.companies).map(([key, companies]) => (
                            companies.logo_path ?
                                <CompaniesImage key={companies.id} src={`http://image.tmdb.org/t/p/w92/`+ companies.logo_path} alt={companies.name} />
                                :
                                <p key={companies.id} className="rmdb-text">
                                    {companies.name}
                                </p>
                            )
                        )
                        : null
                    }
                </Grid>
        </Grid>
    )
}