import React from 'react';
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const DefaultCard = props => {

    const {
        title,
        buttonComponent,
        children
    } = props;

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div className={classes.header}>
                {!!title && <Typography className={classes.title}>
                    {title}
                </Typography>}
                {!!buttonComponent && buttonComponent}
            </div>

            {children}
        </Card>

    );
};

DefaultCard.propTypes = {
    title: PropTypes.string.isRequired,
    buttonComponent: PropTypes.object
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
    title: {
        color: theme.palette.text.primary,
    }
}))
