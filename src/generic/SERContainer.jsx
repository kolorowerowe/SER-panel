import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import RouterProvider from "../routes/RouterProvider";
import TopBar from "./TopBar";
import SideBarDrawer from "./SideBarDrawer";


const SERContainer = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>

            <CssBaseline/>

            <TopBar handleDrawerOpen={handleDrawerOpen}
                    open={open}/>

            <SideBarDrawer handleDrawerClose={handleDrawerClose}
                           open={open}/>

            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <RouterProvider/>
            </main>
        </div>
    );
}
export default SERContainer;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}));