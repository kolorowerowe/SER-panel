import React from 'react';
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";
import {useHistory} from "react-router";

const DefaultCard = props => {

    const {
        title,
        buttonComponent,
        children,
        backButton
    } = props;

    const classes = useStyles();
    const history = useHistory();

    return (
        <Card className={classes.card}>
            <div className={classes.header}>
                <div className={classes.leftHeader}>
                    {!!backButton && <IconButton onClick={() => history.goBack()}>
                        <ArrowBackIcon/>
                    </IconButton>}
                    {!!title && <Typography className={classes.title}>
                        {title}
                    </Typography>}
                </div>

                {!!buttonComponent && buttonComponent}
            </div>

            {children}
        </Card>

    );
};

DefaultCard.propTypes = {
    title: PropTypes.string.isRequired,
    buttonComponent: PropTypes.object,
    backButton: PropTypes.bool
};

export default DefaultCard;

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2)
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2)
    },
    leftHeader: {
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.text.primary,
    }
}))
