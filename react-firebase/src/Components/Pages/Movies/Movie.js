import React from "react";
import app from "../../../config/base";

function Movie() {
    return (
        <div>
            <h1>Movie page</h1>
            {app.auth().currentUser.displayName}
        </div>
    );
}
export default Movie;