import React from 'react';
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const DefaultCard = props => {

    const {
        title,
        children
    } = props;

    const styles = useStyles();

    return (
        <Card className={styles.card}>
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
    }
}))
