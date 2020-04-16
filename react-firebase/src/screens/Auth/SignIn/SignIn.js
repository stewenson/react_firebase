import React, {useContext} from "react";
import {withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Styles/LoginStyle/LoginStyle.scss';
import SignInForm from "./Form/SignInForm";
import { AuthContext } from '../Auth/Auth';

function SignIn() {
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to='/blog/allPosts' />
    }
    return (
        <div>
            <SignInForm />
        </div>
    );
}
export default withRouter(SignIn);