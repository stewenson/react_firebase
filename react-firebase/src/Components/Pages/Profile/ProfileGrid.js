import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UpdateProfileCard from "../../Card/UpdateProfileCard";
import ProfileInfoCard from "../../Card/ProfileInfoCard";
import app from "../../../config/base";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ProfileGrid(props) {
    const [data, setData] = useState([]);
    const classes = useStyles();

    const loadData = async () => {
        const user = app.auth().currentUser;
        const db = app.firestore();
        db.collection("users").doc(user.uid)
            .get()
            .then(doc => {
                if (doc.exists) {
                    setData(doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    alert('Empty data')
                }
            }).catch(function(error) {
            alert(error.message);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <UpdateProfileCard
                        //action
                        submit={props.submit}
                        clicked={props.clicked}
                        changed={props.changed}
                        // values
                        firstName={props.firstName}
                        lastName={props.lastName}
                        nickName={props.nickName}
                        email={props.email}
                        // errors
                        firstNameError={props.firstNameError}
                        lastNameError={props.lastNameError}
                        nickNameError={props.nickNameError}
                        emailError={props.emailError}
                        // labels (placeholder)
                        firstNameLabel={'First Name: ' + data.firstName}
                        lastNameLabel={'Last Name: ' + data.lastName}
                        nickNameLabel={'Nick Name: ' + data.nickName}
                        emailLabel={'Email: ' + data.email}
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Paper className={classes.paper}>
                        <ProfileInfoCard
                            header={"Profile"}
                            fName={data.firstName}
                            lName={data.lastName}
                            eMail={data.email}
                            nickName={data.nickName}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
