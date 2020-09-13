import React from 'react';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Drawer from "@material-ui/core/Drawer";
import {AllInbox, Business, Dashboard, Group, Person, Schedule, Tune} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types"
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../redux/actions/authActions";
import NavigationList from "./NavigationList";

const drawerWidth = 280;

const SideBarDrawer = (props) => {

    const {open, handleDrawerClose} = props;
    const {isLoggedIn, isOrganizer, isCompany} = useSelector(state => state.auth);
    const {
        user: {
            companyAccessList = []
        } = {}
    } = useSelector(state => state.activeUser);


    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const handleRedirect = (path) => {
        navigate(path);
    }

    const handleLogout = () => {
        logoutAction(dispatch, navigate);
    }

    const getSideBarCompanies = companyAccessList.map(({companyId, companyName}) => ({
        text: companyName,
        icon: <Business/>,
        path: `/company/${companyId}`,
        visible: isCompany,
        collapsible: false
    }))

    const sideBarElements = [
        {
            text: t('sidebar:startPage'),
            icon: <Dashboard/>,
            path: '/',
            visible: true,
            collapsible: false
        },
        ...getSideBarCompanies,
        {
            text: t('sidebar:companies'),
            icon: <Business/>,
            path: '/company',
            visible: isLoggedIn && isOrganizer,
            collapsible: false
        },
        {
            text: t('sidebar:users'),
            icon: <Group/>,
            path: '/user',
            visible: isLoggedIn && isOrganizer,
            collapsible: false
        },
        {
            text: t('sidebar:eventConfig'),
            icon: <Tune/>,
            path: '/deadline',
            visible: isLoggedIn && isOrganizer,
            collapsible: true,
            childrenItems: [{
                text: t('sidebar:deadline'),
                icon: <Schedule/>,
                path: '/deadline',
                visible: isLoggedIn && isOrganizer,
            },{
                text: t('sidebar:sponsorshipPackage'),
                icon: <AllInbox/>,
                path: '/sponsorship-package',
                visible: isLoggedIn && isOrganizer,
            }]
        },
        {
            text: t('sidebar:profile'),
            icon: <Person/>,
            path: '/profile',
            visible: isLoggedIn,
            collapsible: false
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
            <NavigationList navItems={sideBarElements} handleRedirect={handleRedirect}/>
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