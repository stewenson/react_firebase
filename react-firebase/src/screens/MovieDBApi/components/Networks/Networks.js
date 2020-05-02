import React from "react";
import {CompaniesImage} from "../../../../Styles/TheMovieDBAPi/CompaniesImage";

export default function Networks(props) {
    return (
        <div>
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
        </div>
    )
}