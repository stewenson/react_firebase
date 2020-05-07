import React from "react";
/* Material UI */
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import GridList from "@material-ui/core/GridList";
import {makeStyles} from "@material-ui/core/styles";
/* Components */
import Progress from "../../../../Components/Progress/Progress";
/* CSS */
import '../../Styles/Actors.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    rootGridList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
}));

export default function SingleLineGridList(props) {
    const classes = useStyles();

    return (
        <GridList className={classes.root}>
            {props.actors ? props.actors.map((actor) => (
                <GridListTile style={{ width: 'auto'}} key={actor.cast_id ? actor.cast_id: actor.credit_id} className='Title'>
                    {actor.profile_path ?
                        <img style={{ width: 'auto'}} src={`http://image.tmdb.org/t/p/w185/`+ actor.profile_path} alt={actor.name}/>
                        :
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwkHBggIBwcFBwYHBRYFBwcFBw8IFQYWIBEWFiARHx8YHSggGBolGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQQDAgEH/8QALRABAAIBAwEGBgIDAQAAAAAAAAECAwQREiITITFBUVIFMkJhYnKCwTShoiT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/ZgAAAAAAAByz56YY6p3t5Vqw5dbktPT0V/EFKZiPGax+zzOXHE7TfHH8ke17Wne1rW/aXwFuLVnwtWd/bZ9RImYneJtE+tXbFq8mPaOXOvpcFUZ8Grpl2iei/pZoAAAAAAAAAAAAAAAAAZtXqeyjjTvyT/y75LRSlrT9NeSNe03tNpne1rcpAmZtMzM72nxmz4AAAAADZpNXMTFMk71npra30sYC4Mmgz869nad7V+Wfc1gAAAAAAAAAAAAAA4a6dtNbbztxSlTXx/5p/b+0sAAAAAAAAHfRTtqa/fpVUjSf5OP9v6VwAAAAAAAAAAAAAActTXlgvG288eUJC5PfExPhPSjZqdnltWY22t3A8AAAAAAAA76KN9TTby6lVO+HV3y2tM99a8YhRAAAAAAAAAAAAAAASNTMznyb+PJXTfiGPjl5RHTeoMoAAAAAAAO2jmY1NNvO20qyZoMfLLyn5aKYAAAAAAAAAAAAAADN8RjfBv7cjS5aqvPBeNt548oBIAAAAAAfYiZmIiN5npiHx20ffqafa2/+gUdNi7HFFfqnqtLqAAAAAAAAAAAAAAABMbxMT4SAI2enZ5bVnwi3c8KWuwc6c6x1U8Y9yaAAAAA0/D431EfajM76K3HUV9LdAKoAAAAAAAAAAAAAAAAPN8lccb3tWsfcHpK1leOotERtE9W1XfLr/GMVf5XY73te3K88rT5g8gAAAPtbcbRaPGtuUPgCjh11bbRkjhb1aq2i0bxNZifOqI948t8c70taPsCyMmn1sXmK5Om3lb3NcTvG8d8AAAAAAAAAA8ZclcVZtedo8o9wPbll1GPH81q7+2vew59XfJMxXop6R9TMDXl11p3jHHGPdbvZbWm072ta0+tnwAAAAAAAAAAAaNPqrYpiJ6qentZwFnFlrlrvS28ece17RceS2O3Kltp8/yU9Nqq5o2npv5xb6gdwAAAAAecl4x0m1p2iEjPltmvNpnu+mvtaviOXe8Y4nur1WYgAAAAAAAAAAAAAAAACO6d4naY8JAG/SavfamSer5a39zahqWhz9pThaeunh+QNQAD5M7RMz4RXlL6za/Jww8Y+a/SCdlv2mS1p+q27yAAAAAAAAAAAAAAAAAAAD1jvOO9bVnvq8gLOLJGWkWjz8Y9r6naLP2d+M/Je3GfxAU0zX5OeeYj5adKhlv2eO1p+mqPM7zMz4zblIPgAAAAAAAAAAAAAAAAAAAAAEd0xPp1AA3/ABHJtWMceNuqzAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=" alt=" "/>
                    }
                    <GridListTileBar title={actor.name} subtitle={actor.character ? actor.character : actor.job}/>
                </GridListTile>
                ))
                :
                <Progress/>
            }
        </GridList>
    )
}