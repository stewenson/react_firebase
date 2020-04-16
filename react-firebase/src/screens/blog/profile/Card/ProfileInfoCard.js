import React from "react";
import "../../../../Styles/ProfileStyle/ProfileInfoCard.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";

export default function ProfileInfoCard(props) {

    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            <Typography variant="h4">
                                Personal Info
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>First Name:</strong> {props.data.firstName}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Last Name: </strong> {props.data.lastName}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Nick Name: </strong>{props.data.nickName}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>State:</strong>  {props.data.state}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>City: </strong> {props.data.city}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            <Typography variant="h4">
                                Contact
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Phone number:</strong> {props.data.phoneNumber}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="body1">
                                <strong>Email: </strong> {props.data.email}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
