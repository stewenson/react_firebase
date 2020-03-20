import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from "./Components/Layout/Header";
import Navigation from "./Components/Layout/Navigation";
import { AuthContext } from "./Components/Auth/Auth/Auth";
import Routes from "./Routes/Routes";
import app from "./config/base";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { currentUser } = useContext(AuthContext);
    let data;
    if (currentUser) {
        data = (
            <div className={classes.root}>
                <Header
                    className={classes.appBar}
                    //Button
                    color={"inherit"}
                    ariaLabel={"open drawer"}
                    edge={"start"}
                    clickedButton={handleDrawerToggle}
                    classNameButton={classes.menuButton}

                />
                <Navigation
                    classNameNav={classes.drawer}
                    container={container}
                    variant={"temporary"}
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classDrawer={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open perfor
                        // mance on mobile.
                    }}
                    classesDrawerList={classes.toolbar}
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
