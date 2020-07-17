import React from 'react';
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const DefaultCard = props => {

    const {
        title,
        children
    } = props;

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            {!!title && <Typography className={classes.title}>
                {title}
            </Typography>}
            {children}
        </Card>

    );
};

DefaultCard.propTypes = {
    title: PropTypes.string
};

export default DefaultCard;

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2)
    },
    title:{
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2)
    }
}))
