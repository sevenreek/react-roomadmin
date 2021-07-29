import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "./Logo";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {SIDEBAR_WIDTH} from "./Sidebar"

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        marginLeft: SIDEBAR_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

export default function DashboardLayout({ appbarTitle, isSidebarOpen, handleSidebarOpen }) {
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: isSidebarOpen,
            })}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarOpen} className={clsx(classes.menuButton, isSidebarOpen && classes.hide)}>
                    <MenuIcon />
                </IconButton>
                <Logo />
                <Typography variant="h6" className={classes.title}>
                    {appbarTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}