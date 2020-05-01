import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer style={{background: 'rgb(46, 47, 56)', marginTop: '2%'}} className={classes.footer}>
            <Container maxWidth="sm">
                <Grid item xs={6} sm={3}>
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=""/>
                </Grid>
            </Container>
        </footer>
    );
}