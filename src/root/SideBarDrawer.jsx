import React from 'react';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Drawer from "@material-ui/core/Drawer";
import {Dashboard, Person} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {logoutAction} from "../redux/actions/authActions";

const drawerWidth = 240;

const SideBarDrawer = (props) => {

    const {open, handleDrawerClose} = props;

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const handleRedirect = (path) => {
        history.push(path);
    }

    const handleLogout = () => {
        logoutAction(dispatch,history);
    }

    const sideBarElements = [
        {
            text: t('sidebar:startPage'),
            icon: <Dashboard/>,
            path: '/'
        },
        {
            text: t('sidebar:profile'),
            icon: <Person/>,
            path: '/profile'
        }
    ];


    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                {sideBarElements.map(({text, icon, path}, index) => <ListItem key={index} button onClick={()=>handleRedirect(path)}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>)}
            </List>
            <Divider/>
            <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                    <ExitToAppIcon/>
                </ListItemIcon>
                <ListItemText primary={t('sidebar:signOut')}/>
            </ListItem>
        </Drawer>
);
};

SideBarDrawer.propTypes = {
    handleDrawerClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default SideBarDrawer;


const useStyles = makeStyles((theme) => ({
    drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
}),
},
    drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
}),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9),
},
},
    toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
},
}));