import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function ExpandableSidebarItem({ text, icon, notifications, children }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    if (notifications) {
        var iconElement = (
            <ListItemIcon>
                <Badge badgeContent={notifications} color="primary">
                    {icon}
                </Badge>
            </ListItemIcon>
        )
    }
    else {
        var iconElement = (
            <ListItemIcon>
                {icon}
            </ListItemIcon>
        )
    }
    return (
        <>
            <ListItem button onClick={handleClick}>
                {iconElement}
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children}
                </List>
            </Collapse>
        </>
    );
}