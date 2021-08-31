import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExpandableSidebarItem from './ExpandableSidebarItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsIcon from '@material-ui/icons/Directions';
import BarChartIcon from '@material-ui/icons/BarChart';
import FilterIcon from '@material-ui/icons/Filter';
const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
export default function RoomSidebarItem({ name, notifications }) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <ExpandableSidebarItem text={name} icon={<FilterIcon />} notifications={notifications}>
            <ListItem button className={classes.nested}>
                <ListItemIcon><DirectionsIcon /></ListItemIcon>
                <ListItemText primary="Control" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon><BarChartIcon /></ListItemIcon>
                <ListItemText primary="Stats" />
            </ListItem>
        </ExpandableSidebarItem>
    )
}