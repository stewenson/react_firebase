import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import {LinkStyle} from '../../../Styles/TheMovieDBAPi/LinkStyle';
import {TextLink} from "../../../Styles/TheMovieDBAPi/LinkStyle";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#2e2f38'}}>
                <Toolbar>
                    <img width='50' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt=' '/>
                   <LinkStyle>
                       <Link className='Link' to="/tmdbapi">
                           <TextLink>
                               <HomeIcon /> Back To Home
                           </TextLink>
                       </Link>
                   </LinkStyle>
                    <LinkStyle>
                       <Link className='Link' to="/tmdbapi/search">
                           <TextLink>
                               <SearchIcon /> Search
                           </TextLink>
                       </Link>
                   </LinkStyle>
                </Toolbar>
            </AppBar>
        </div>
    );
}