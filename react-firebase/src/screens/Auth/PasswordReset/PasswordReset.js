import React, {useContext} from "react";
import {withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Styles/LoginStyle/LoginStyle.scss';
import { AuthContext } from '../Auth/Auth';
import ResetPasswordForm from "./Form/ResetPasswordForm";

function PasswordReset() {

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/dashboard' />
    }

    return (
       <div>
           <ResetPasswordForm />
       </div>
    );
}
export default withRouter(PasswordReset);