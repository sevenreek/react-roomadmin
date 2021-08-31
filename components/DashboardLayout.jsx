import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from './Topbar'
import Sidebar from './Sidebar/Sidebar'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import {SIDEBAR_WIDTH} from "./Sidebar/Sidebar"

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -SIDEBAR_WIDTH,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
}));


const SITE_NAME = "BreakOut";


export default function DashboardLayout({ children, roomsList }) {
    const classes = useStyles();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebarClose = () => { setSidebarOpen(false) };
    const handleSidebarOpen = () => { setSidebarOpen(true) };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="og:title" content={SITE_NAME} />
            </Head>
            <Topbar isSidebarOpen={isSidebarOpen} appbarTitle={SITE_NAME + " Admin"} handleSidebarOpen={handleSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} handleSidebarClose={handleSidebarClose} roomsList={roomsList} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: isSidebarOpen,
                })}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    )
}