import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Calendar from 'react-calendar';
import LatestPost from "./LatestPost/LatestPost";

const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}));

export default function Sidebar(props) {
    const classes = useStyles();
    const [date] = useState(new Date());

    const sidebar = {
        id: 1,
        title: 'About',
        description:
            'If you want to add new Post, you have to login first.',
    };

    const data = props.data.fetchAllPost;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                    {sidebar.title}
                </Typography>
                <Typography>{sidebar.description}</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                <Calendar
                    value={date}
                />
            </Typography>
            <LatestPost classes={classes.sidebarSection}
                        data={data}
            />
        </Grid>
    );
}

Sidebar.propTypes = {
    archives: PropTypes.array,
    description: PropTypes.string,
    social: PropTypes.array,
    title: PropTypes.string,
};