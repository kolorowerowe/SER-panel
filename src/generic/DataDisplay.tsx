import React from 'react';
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

type Props = {
    value: string,
    label: string,
    displayGrid: boolean
}
const DataDisplay = ({label, value, displayGrid}: Props) => {

    const classes = useStyles();

    return (
        displayGrid ? <Grid item xs={12}>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
                <Typography>
                    {value}
                </Typography>
            </Grid> :
            <div>
                <Typography className={classes.secondaryField}>
                    {label}
                </Typography>
                <Typography>
                    {value}
                </Typography>
            </div>
    );
};

const useStyles = makeStyles((theme) => ({
    secondaryField: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize
    }
}));

DataDisplay.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    displayGrid: PropTypes.bool
};

export default DataDisplay;
