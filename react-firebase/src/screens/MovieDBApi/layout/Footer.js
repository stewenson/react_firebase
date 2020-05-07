import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import '../Styles/Footer.scss';

export default function Footer() {

    return (
        <footer className='rmdb-footer'>
            <Container maxWidth="sm">
                <Grid item xs={6} sm={3}>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=""/>
                </Grid>
            </Container>
        </footer>
    );
}