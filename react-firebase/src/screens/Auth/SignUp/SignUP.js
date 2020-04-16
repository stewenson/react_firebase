import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Styles/SignUpStyle/SignUpStyle.scss';
import SignUPForm from './Form/SignUPForm';
import {AuthContext} from "../Auth/Auth";
import {Redirect} from "react-router-dom";

export default function SignUP() {

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/blog/allPosts' />
    }
    return (
        <div>
            <SignUPForm />
        </div>
    );
}
