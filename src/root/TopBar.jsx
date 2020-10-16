import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import LanguageIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import MenuItem from "@material-ui/core/MenuItem";
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import Menu from "@material-ui/core/Menu";
import {changeLanguage, changeTheme} from "../redux/actions/generalActions";
import i18next from "i18next";
import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";
import "moment/locale/pl";

const drawerWidth = 280;

const TopBar = ({handleDrawerToggle}) => {

    const classes = useStyles();
    const {t} = useTranslation();
    const dispatch = useDispatch();


    const LANGUAGES_LABEL = [
        {
            code: 'en',
            text: 'English',
        },
        {
            code: 'pl',
            text: 'Polski',
        }
    ];

    const {languageCode, theme} = useSelector((state) => state.preferences);
    moment.locale(languageCode);

    const [languageMenu, setLanguageMenu] = React.useState(null);

    const handleLanguageIconClick = (event) => {
        setLanguageMenu(event.currentTarget);
    };

    const handleLanguageMenuChange = (code) => {
        setLanguageMenu(null);
        i18next.changeLanguage(code);
        changeLanguage(code, dispatch);
    };

    const handleThemeChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        changeTheme(newTheme, dispatch);
    };

    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar} variant={'dense'}>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleDrawerToggle}
                    className={clsx(classes.menuButton)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    {t('general:header')}
                </Typography>

                <Button
                    color="inherit"
                    onClick={handleLanguageIconClick}
                >
                    <LanguageIcon/>
                    <span className={classes.language}>
                            {LANGUAGES_LABEL.filter((language) => language.code === languageCode)[0].text}
                        </span>
                    <ExpandMoreIcon fontSize="small"/>
                </Button>

                <Menu
                    anchorEl={languageMenu}
                    open={!!languageMenu}
                    onClose={() => setLanguageMenu(null)}
                >
                    {LANGUAGES_LABEL.map((language) => (
                        <MenuItem
                            key={language.code}
                            value={language.code}
                            selected={languageCode === language.code}
                            onClick={() => handleLanguageMenuChange(language.code)}
                            lang={language.code}
                        >
                            {language.text}
                        </MenuItem>
                    ))}
                </Menu>

                <Tooltip title={t('general:toggleTheme')} enterDelay={300}>
                    <IconButton
                        color="inherit"
                        onClick={handleThemeChange}
                    >
                        {theme === 'light' ? <Brightness4Icon/> : <Brightness7Icon/>}
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
};

export default TopBar;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    title: {
        flexGrow: 1,
    },
    language: {
        margin: theme.spacing(0, 0.5, 0, 1),
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
}));