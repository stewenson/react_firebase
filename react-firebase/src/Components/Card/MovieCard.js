import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MovieDetailModal from "../Modal/MovieDetailModal";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },

});

export default function MediaCard(props) {
    const classes = useStyles();
    return (
        <Card
            key={props.idkey}
            className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.year}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <MovieDetailModal
                    id={props.id}
                />
                <a href={`https://www.imdb.com/title/${props.id}`}>IMDB link</a>
            </CardActions>
        </Card>
    );
}
