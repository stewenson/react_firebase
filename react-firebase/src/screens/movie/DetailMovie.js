import React from 'react';
import '../../Styles/MovieStyle/DetailMovieStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

export default function DetailMovie(props) {

    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            <Typography variant="h4">
                                {props.data.Title}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Directors</strong> {props.data.Director}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Actors </strong> {props.data.Actors}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Writer: </strong>  {props.data.Writer}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Awards: </strong> {props.data.Awards}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Production: </strong> {props.data.Production}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
