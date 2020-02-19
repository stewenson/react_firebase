import React from "react";
import '../../../Styles/DashBoardStyle/DashBoardStyle.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CollectionsIcon from '@material-ui/icons/Collections';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import QueueIcon from '@material-ui/icons/Queue';
import OutlineCard from "../../Card/OutlineCard";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid id="todo" item xs={6} sm={3}>
                       <OutlineCard
                           icon={<CollectionsIcon fontSize={"large"}/>}
                           header={"Todo"}
                           sumtodo={"Total"}
                           complete={"Complete"}
                       />
                </Grid>
                <Grid item xs={6} sm={3}>
                       <OutlineCard
                           icon={<MovieCreationIcon fontSize={"large"} /> }
                           header={"Movie"}
                           text={"Movie app from omdbApi"}
                           linkText={"OMDb Api Link"}
                           linkToOmdb={"http://www.omdbapi.com/"}
                       />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <OutlineCard
                        icon={<QueueIcon fontSize={"large"} /> }
                        header={"Blog"}
                        text={"Latest Post"}
                        totalPost={"Total Post"}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
export default Dashboard;