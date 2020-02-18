import React, {useContext} from 'react';
import Header from "./Components/Layout/Header";
import app from "./config/base";
import Navigation from "./Components/Layout/Navigation";
import {makeStyles} from "@material-ui/core/styles";
import Routes from "./Routes/Routes";
import {AuthContext} from "./Components/Auth/Auth/Auth";

function App() {

    const drawerWidth = 240;

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 1,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(2),
        },
    }));
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);

    let data;
    if (currentUser) {
        data = (
            <div className={classes.root}>
                <Header
                    className={classes.appBar}
                    text={"Sign Out"}
                    variant={'outlined'}
                />
                <Navigation
                    classNameDrawer={classes.drawer}
                    variant={"permanent"}
                    classes={{paper: classes.drawerPaper}}
                    anchor={"left"}
                    classNameToolbar={classes.toolbar}
                    clickedLogOut={() => app.auth().signOut()}

                />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Routes/>
                </main>
            </div>
        )
    }else {
        data = (
           <Routes/>
        )
    }
  return (
      <div>
          {data}
      </div>
  );
}
export default App;