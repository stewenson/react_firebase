import React from "react";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import {CompaniesImage} from "../../../../Styles/TheMovieDBAPi/CompaniesImage";

const useStyles = makeStyles((theme) => ({
    chip: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function ProductionCompanies(props) {
    const classes = useStyles();
    return (
        <div className={classes.chip}>
            {props.companies ?
                Object.entries(props.companies).map(([key, companies]) => (
                    companies.logo_path ?
                        <CompaniesImage key={companies.id} src={`http://image.tmdb.org/t/p/w92/`+ companies.logo_path} alt={companies.name} />
                        :
                        <Chip key={companies.id} size="medium" label={companies.name} />
                    )
                )
                : null
            }
        </div>
    )
}