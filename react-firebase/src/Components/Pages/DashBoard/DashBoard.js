import React from "react";
import app from "../../../config/base";
import ButtonComponent from "../../Button/ButtonComponent";

function DashBoard({history}) {
    console.log(app.auth().currentUser.displayName);
    return (
        <div>
            <h1>Hello {app.auth().currentUser.displayName}</h1>
            <ButtonComponent
                clicked={() => app.auth().signOut()}
                text={"Sign out"}
                color={"secondary"}
                variant={"contained"}
            />
            <ButtonComponent
                clicked={() => history.push('/profile')}
                color={"secondary"}
                text={"Profile"}
            />
        </div>
    );
}
export default DashBoard;