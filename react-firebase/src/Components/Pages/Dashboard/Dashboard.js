import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TodoInfo from './TodoInfo';
import BlogInfo from "./BlogInfo";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
       <div>
           <Grid container spacing={3}>
                {/*Todo Info Card */}
               <Grid item xs={12} md={4} lg={3}>
                   <Paper className={fixedHeightPaper}>
                       <TodoInfo />
                   </Paper>
               </Grid>
               {/*Blog info Card*/}
               <Grid item xs={12} md={4} lg={3}>
                   <Paper className={fixedHeightPaper}>
                       <BlogInfo className={fixedHeightPaper}/>
                   </Paper>
               </Grid>
           </Grid>
       </div>
    );
}
