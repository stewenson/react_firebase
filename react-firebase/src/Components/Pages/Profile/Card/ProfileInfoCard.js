import React from "react";
import "../../../../Styles/ProfileStyle/ProfileInfoCard.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";

function ProfileInfoCard(props) {

    return (
        <div>
            <h4>Personal info</h4>
            <Table responsive="sm">
                <tbody>
                <tr>
                    <th>First Name</th>
                    <td>{props.fName}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{props.lName}</td>
                </tr>
                <tr>
                    <th>Nick Name</th>
                    <td>{props.nickName}</td>
                </tr>
                <tr>
                    <th>State</th>
                    <td>{props.state}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{props.city}</td>
                </tr>
                </tbody>
            </Table>
            <h4>Contact info</h4>
            <Table responsive="md">
                <tbody>
                <tr>
                    <th>Email</th>
                    <td>{props.eMail}</td>
                </tr>
                <tr>
                    <th>Phone Number</th>
                    <td>{props.phone}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ProfileInfoCard;