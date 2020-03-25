import React, {useEffect} from 'react';
import ProfileInfoCard from "./Card/ProfileInfoCard";
import app from "../../../config/base";
import {useDispatch, useSelector} from "react-redux";
import {UserProfile} from "../../../Redux/Actions/AuthActions/UserProfile";

export default function ProfileGrid() {
    const dispatch = useDispatch();
    const content = useSelector(state => state);
    const data = content.auth.data;

    const loadData = () => {
        const user = app.auth().currentUser;
        dispatch(UserProfile(user.uid))
    };

    useEffect(() => {
        loadData();
    }, [content.auth.message]);

    return (
        <ProfileInfoCard
            header={"Profile"}
            fName={data.firstName}
            lName={data.lastName}
            eMail={data.email}
            nickName={data.nickName}
        />
    );
}
