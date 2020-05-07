import React from 'react';
import Title from "../../components/Title/Title";
import {ContainerLine, LineHorizontalBlack} from "../../Styles/Line";
import Grid from "@material-ui/core/Grid";
import ProductionCountries from "../ProductionCountries/ProductionCountries";
import ProductionCompanies from "../ProductionCompanies/ProductionCompanies";
import Networks from "../Networks/Networks";

export const Detail = ({language, languageSeries, releaseDate, firstAirDate, companies, countries, networks}) => {

    return (
        <React.Fragment>
            <Title title={'Detail'} variant={'h5'} marginTop={'3%'} color={'black'}/>
            <LineHorizontalBlack />
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p className="rmdb-text">
                        <strong>Language: </strong>
                        {language ? language : languageSeries}
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <p className="rmdb-text">
                        <strong>Released Date: </strong>
                        {releaseDate ? releaseDate : firstAirDate}
                    </p>
                </Grid>
                {/* Filming companies container*/}
                <ProductionCompanies companies={companies}/>

                {/* Filming Countries container*/}
                <ProductionCountries countries={countries}/>

                {/* Networks container*/}
                <Networks networks={networks}/>
            </Grid>
            <ContainerLine />
        </React.Fragment>
    )
}