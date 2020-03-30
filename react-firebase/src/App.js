import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Header from "./Components/Layout/Header";
import { AuthContext } from "./Components/Auth/Auth/Auth";
import Routes from "./Routes/Routes";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import '../src/Styles/RootStyle/RootStyle.scss';
import DrawerList from "./Components/Layout/DrawerList";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function App() {
    const { currentUser } = useContext(AuthContext);
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let data;
    if (currentUser) {
        data = (
            <div className={classes.root}>
              <Header
                class={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                clicked={handleDrawerOpen}
                iconClass={clsx(classes.menuButton, open && classes.hide)}
                buttonCLass={classes.menuButton}
              />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <DrawerList
                        class={classes.drawerHeader}
                        clicked={handleDrawerClose}
                        themeDirection={theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    />
                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
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
