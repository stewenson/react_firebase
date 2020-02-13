import React from "react";
import app from "../../../config/base";
import ButtonComponent from "../../Button/ButtonComponent";

function Profile() {
    console.log(app.auth().currentUser.displayName);
    return (
        <div>
            <h1>Welcome to your profile page {app.auth().currentUser.displayName}</h1>
            <ButtonComponent
                clicked={() => app.auth().signOut()}
                text={"Sign out"}
                color={"secondary"}
                variant={"contained"}
            />
        </div>
    );
}
export default Profile;