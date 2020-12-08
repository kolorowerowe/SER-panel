import React from 'react';
import PropTypes from "prop-types"
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

const ProgressBar = props => {

    const {
        loading,
        displayGrid,
        ...other
    } = props;

    return loading ? (
        displayGrid ?
            <Grid item xs={12}>
                <LinearProgress {...other}/>
            </Grid> :
            <LinearProgress {...other}/>
    ) : null;
};

ProgressBar.propTypes = {
    loading: PropTypes.bool.isRequired,
    displayGrid: PropTypes.bool
};

export default ProgressBar;
