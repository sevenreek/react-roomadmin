import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandableSidebarItem from './ExpandableSidebarItem';
import RoomSidebarItem from './RoomSidebarItem';
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
    },
    hide: {
        display: 'none',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        width: SIDEBAR_WIDTH,

    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
export const SIDEBAR_WIDTH = 240;
export default function Sidebar({ isOpen, handleSidebarClose, roomsList }) {
    const classes = useStyles();
    const theme = useTheme();
    let roomsJSX = (
        roomsList.map((room) => 
            <RoomSidebarItem name={room.name}></RoomSidebarItem>
        )
    );
    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={isOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleSidebarClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button >
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {roomsJSX}
                </List>
            </Drawer>
        </>
    );
}